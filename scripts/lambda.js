const https = require("https");

// Airtable configuration
const AIRTABLE_API_KEY =
  "patrbDD6IEBr6MzvU.5735696d592fb979aad2b453fd620d6089b9d29c767aafa65dfaa80e099cb06d"; // Replace with your Airtable API key
const AIRTABLE_BASE_ID = "app0Nccvz7IalRhLt"; // Replace with your Airtable base ID
const AIRTABLE_TABLE_NAME = "Lead"; // Replace with your table name

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "GET") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Only POST method is allowed" }),
      };
    }

    const requestBody = JSON.parse(event.body);

    /*
    const requestBody = {
      fullName: "Arun",
      email: "arunmlr.jaysel@gmail.com",
      message: "Test",
    };
    */

    const { fullName, email, message } = requestBody;

    if (!fullName || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Missing required fields: fullName, email, or message",
        }),
      };
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    const postData = JSON.stringify({
      fields: {
        Name: fullName,
        Email: email,
        Message: message,
        Status: "New",
      },
    });

    const options = {
      hostname: "api.airtable.com",
      path: `/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      });

      req.on("error", (e) => {
        reject(e);
      });

      req.write(postData);
      req.end();
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data successfully added to Airtable",
        response: response,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
