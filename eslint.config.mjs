import { defineConfig } from "eslint/config";
import requireExtensions from "./index.js";

export default defineConfig([{
    extends: [
        requireExtensions.configs.recommended,
    ],
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    ignores: [
        "index.js"
    ]
}]);
