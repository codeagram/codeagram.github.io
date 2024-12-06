import https from "https";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

export const handler = async (event) => {
  try {
    const { fullName, email, message } = JSON.parse(event.body);

    if (
      !fullName ||
      !email ||
      !message ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message:
            "Invalid or missing required fields: fullName, email, or message",
        }),
      };
    }

    const airtableRequestOptions = {
      hostname: "api.airtable.com",
      path: `/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    };

    const airtableData = {
      fields: {
        Name: fullName,
        Email: email,
        Message: message,
        Status: "New",
      },
    };

    const airtableResponse = await new Promise((resolve, reject) => {
      const req = https.request(airtableRequestOptions, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      });

      req.on("error", reject);
      req.write(JSON.stringify(airtableData));
      req.end();
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data successfully added to Airtable",
        response: airtableResponse,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
