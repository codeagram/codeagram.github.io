(() => {
  // <stdin>
  tailwind.config = {
    darkMode: "selector",
    theme: {
      colors: {
        gray: {
          dark: "#141414",
          medium: "#C6C6C6",
          light: "#E1E1E1"
        },
        blue: "#3B82F6",
        saffron: "#FF9933",
        white: "#FFFFFF",
        green: "#128807",
        navy: "#000088"
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        faster: ["Faster One", "system-ui"]
      },
      extend: {
        keyframes: {
          wave: {
            "0%": { transform: "rotate(0.0deg)" },
            "10%": { transform: "rotate(14deg)" },
            "20%": { transform: "rotate(-8deg)" },
            "30%": { transform: "rotate(14deg)" },
            "40%": { transform: "rotate(-4deg)" },
            "50%": { transform: "rotate(10.0deg)" },
            "60%": { transform: "rotate(0.0deg)" },
            "100%": { transform: "rotate(0.0deg)" }
          }
        },
        animation: {
          "waving-hand": "wave 2s linear infinite"
        }
      }
    }
  };
  if (localStorage.getItem("dark-mode") === "true" || !("dark-mode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
})();
