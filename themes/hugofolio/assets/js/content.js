function createGrid() {
  const gridBackground = document.querySelector(".grid-background");

  gridBackground.innerHTML = "";

  const cols = Math.floor(window.innerWidth / 50); // Cell width (50px)
  const rows = Math.floor(window.innerHeight / 50); // Cell height (50px)

  gridBackground.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridBackground.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    if (localStorage.getItem("dark-mode") === "true") {
      cell.style.backgroundColor = "#ffffff14";
    } else {
      cell.style.backgroundColor = "#dee3e0";
    }
    cell.addEventListener("mouseover", () => {
      cell.style.transform = "scale(1.2) perspective(500px)";
      if (localStorage.getItem("dark-mode") === "true") {
        cell.style.backgroundColor = "#ffffff33";
      } else {
        cell.style.backgroundColor = "#f3f2f2";
      }
      cell.style.zIndex = "2";
      cell.style.boxShadow = "0 0 10px 5px rgba(255, 255, 255, 0.3)";
    });
    cell.addEventListener("mouseout", () => {
      cell.style.transform = "none";
      if (localStorage.getItem("dark-mode") === "true") {
        cell.style.backgroundColor = "#ffffff14";
      } else {
        cell.style.backgroundColor = "#dee3e0";
      }
      cell.style.zIndex = "auto";
      cell.style.boxShadow = "none";
    });

    gridBackground.appendChild(cell);
  }
}

createGrid();
window.addEventListener("resize", createGrid);

const lightSwitches = document.querySelectorAll(".light-switch");

if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem("dark-mode") === "true") {
      lightSwitch.checked = true;
    } else {
    }
    lightSwitch.addEventListener("click", () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", true);
        createGrid();
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", false);
        createGrid();
      }
    });
  });
}

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell, index) => {
    const moveX = (x / window.innerWidth - 0.5) * (index % 16) * 2;
    const moveY = (y / window.innerHeight - 0.5) * Math.floor(index / 16) * 2;
    cell.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

var toggleflag = 0;
var overlay = document.getElementById("overlay-dropdown");
var toggler = document.getElementById("navbar-toggler");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

function mobilenav() {
  if (toggleflag == 0) {
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.classList.add("overflow-hidden");

    // Animate menu icon
    line1.style.transform = "rotate(50deg) translate(5px, 5px)";
    line2.style.opacity = "0";
    line3.style.transform = "rotate(-50deg) translate(5px, -5px)";

    toggleflag = 1;
  } else {
    overlay.classList.remove("flex");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    // Reset menu icon
    line1.style.transform = "rotate(0deg) translate(0, 0)";
    line2.style.opacity = "1";
    line3.style.transform = "rotate(0deg) translate(0, 0)";

    toggleflag = 0;
  }
}

function navigation() {
  overlay.classList.remove("flex");
  overlay.classList.add("hidden");

  // Reset menu icon
  line1.style.transform = "rotate(0deg) translate(0, 0)";
  line2.style.opacity = "1";
  line3.style.transform = "rotate(0deg) translate(0, 0)";

  toggleflag = 0;
}

document.querySelectorAll("#overlay-dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation();
    document.body.classList.remove("overflow-hidden");
  });
});
