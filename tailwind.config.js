/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      purple: "#7D4AEA",
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
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        },
        ".modalInputProperties": {
          width: "350px",
          height: "48px",
          border: "1px solid #D2DAE3",
          borderRadius: "12px",
          paddingLeft: "14.5px",
        },
        ".modalButtonProperties": {
          height: "48px",
          borderRadius: "12px",
          textAlign: "center",
        },
        //for 4 grid card
        ".modalGridStyles": {
          backgroundColor: "#F5F5F5;",
          width: "276px",
          height: "200px",
          border: "1px solid #EAEAEA",
          borderRadius: "12px",
          boxSizing: "border-box",
        },
        // for 5 colors card
        ".colorsCardStyles": {
          border: "1px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          with: "42px",
          height: "42px",
          boxSizing: "border-box",
        },
        ".UploadLogoBorder" : {
          border: "1px dashed #DDDDDD",
          borderRadius: "12px",
          boxSizing: "border-box",
          width : "378px",
          height: "178px",
        }
      });
    }),
  ],
};
