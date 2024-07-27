import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
      react: pluginReact,
    },
    rules: {
      "prettier/prettier": ["error", { singleQuote: false }], // Ensures Prettier uses double quotes
      "react/prop-types": false, // Disable prop-types validation
      "react/react-in-jsx-scope": "off", // Disable the requirement to import React
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
];
