import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    plugins: {
      import: (await import("eslint-plugin-import")).default,
    },
    rules: {
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // shared 레이어는 상위 레이어들을 import할 수 없음
            {
              target: "./src/shared/**",
              from: "./src/entities/**",
              message: "shared 레이어는 entities 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/shared/**",
              from: "./src/features/**",
              message: "shared 레이어는 features 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/shared/**",
              from: "./src/widgets/**",
              message: "shared 레이어는 widgets 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/shared/**",
              from: "./src/pages/**",
              message: "shared 레이어는 pages 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/shared/**",
              from: "./src/app/**",
              message: "shared 레이어는 app 레이어를 import할 수 없습니다."
            },
            // entities 레이어는 상위 레이어들을 import할 수 없음
            {
              target: "./src/entities/**",
              from: "./src/features/**",
              message: "entities 레이어는 features 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/entities/**",
              from: "./src/widgets/**",
              message: "entities 레이어는 widgets 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/entities/**",
              from: "./src/pages/**",
              message: "entities 레이어는 pages 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/entities/**",
              from: "./src/app/**",
              message: "entities 레이어는 app 레이어를 import할 수 없습니다."
            },
            // features 레이어는 상위 레이어들을 import할 수 없음
            {
              target: "./src/features/**",
              from: "./src/widgets/**",
              message: "features 레이어는 widgets 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/features/**",
              from: "./src/pages/**",
              message: "features 레이어는 pages 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/features/**",
              from: "./src/app/**",
              message: "features 레이어는 app 레이어를 import할 수 없습니다."
            },
            // widgets 레이어는 상위 레이어들을 import할 수 없음
            {
              target: "./src/widgets/**",
              from: "./src/pages/**",
              message: "widgets 레이어는 pages 레이어를 import할 수 없습니다."
            },
            {
              target: "./src/widgets/**",
              from: "./src/app/**",
              message: "widgets 레이어는 app 레이어를 import할 수 없습니다."
            },
            // pages 레이어는 상위 레이어들을 import할 수 없음
            {
              target: "./src/pages/**",
              from: "./src/app/**",
              message: "pages 레이어는 app 레이어를 import할 수 없습니다."
            }
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
