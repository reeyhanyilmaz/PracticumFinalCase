/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#7D4AEA",
      },
    },
  
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".generalPosition": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        //for one modal styles
        ".generalModalStyle": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
        },
        ".modalInputProperties": {
          width: "350px",
          height: "48px",
          border: "1px solid #D2DAE3",
          borderRadius: "8px",
          paddingLeft: "14.5px",
          fontSize: "16px",
        },
        ".modalButtonProperties": {
          height: "48px",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "500",
        },
        //for 4 grid card
        ".modalGridStyles": {
          backgroundColor: "#F5F5F5;",
          width: "276px",
          height: "200px",
          border: "1px solid #EAEAEA",
          borderRadius: "12px",
          boxSizing: "border-box",
          curser: "pointer",
        },
        ".modalGridSelectedStyles": {
          backgroundColor: "rgba(125, 74, 234, 0.6)",
          width: "276px",
          height: "200px",
          borderRadius: "12px",
          boxSizing: "border-box",
          curser: "pointer",
        },
        // for 5 colors card
        ".colorsCardStyles": {
          border: "1px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          with: "42px",
          height: "42px",
          boxSizing: "border-box",
        },
        ".UploadLogoBorder": {
          border: "1px dashed #DDDDDD",
          borderRadius: "12px",
          boxSizing: "border-box",
          width: "378px",
          height: "178px",
        },
        ".modalPosition": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      });
    }),
  ],
};
