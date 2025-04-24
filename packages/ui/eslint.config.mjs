// import is failing here, don't know why. Using the extension via spread instead.
import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    ...config.rules,
    "react/prop-types": "off",
  },
};
