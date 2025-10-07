import js from "@eslint/js";
import nextConfig from "eslint-config-next";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  js.configs.recommended,
  ...nextConfig(),
  prettier
];

export default config;
