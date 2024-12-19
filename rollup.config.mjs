
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js", ".jsx", ".ts", ".tsx", ".native.js"];

// Define external dependencies to exclude from the bundle
const external = [
  "react",
  "react-dom",
  "react-native",
  "react-native-web",
];

// Map external dependencies to their global variable names
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react-native": "ReactNative",
  "react-native-web": "ReactNativeWeb",
  "react/jsx-runtime": "jsxRuntime",
};

// Predicate function to determine external modules
const makeExternalPredicate = (externalArr) => {
  if (!externalArr.length) return () => false;
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => pattern.test(id);
};

export default {
  input: "src/index.tsx", // Entry point for the library
  output: [
    {
      file: packageJson.browser,
      format: "umd",
      name: "DevlanderHooks", // Replace with your library's name
      globals,
      sourcemap: true,
    },
    {
      file: packageJson.main,
      format: "cjs",
      globals,
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: makeExternalPredicate(external),
  plugins: [
    alias({
      entries: [
        { find: "react-native", replacement: "react-native-web" },
      ],
    }),
    nodeResolve({
      extensions,
      preferBuiltins: true,
    }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: /node_modules/,
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    json(),
    terser(), // Minify the output
  ],
};
