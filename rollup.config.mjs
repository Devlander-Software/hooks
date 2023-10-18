import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import generateGitVersion from "rollup-plugin-generate-git-version";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";
// @ts-ignore
import auto from "@rollup/plugin-auto-install";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { readFileSync } from "fs";
import swcPreserveDirectives from "rollup-swc-preserve-directives";

const pkg = JSON.parse(readFileSync("package.json", { encoding: "utf8" }));
const devDependenciesArray = Object.keys(pkg.devDependencies || {});
// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== "production";
const treeshake = {
  moduleSideEffects: false,
  propertyReadSideEffects: false,
  tryCatchDeoptimization: false,
};
const nodePlugins = [
  nodeResolve({
    extensions: [".ts", ".d.ts"],
  }),
  json(),
  commonjs({
    ignoreTryCatch: false,
    include: "node_modules/**",
  }),
  typescript({
    tsconfig: "./tsconfig.json",
    sourceMap: true,
    inlineSources: true,
  }),
];

const generalPlugins = [
  ...nodePlugins,
  babel({
    babelHelpers: "runtime",
    plugins: ["@babel/plugin-transform-runtime"],
    extensions: [".ts", ".d.ts"],
    exclude: "node_modules/**",
    presets: ["@babel/preset-typescript"],
  }),
  terser({
    ecma: 2020,
    mangle: { toplevel: true },
    compress: {
      toplevel: true,
      drop_console: !dev,
      drop_debugger: !dev,
    },
    output: { quote_style: 1 },
  }),
  generateGitVersion({ fileName: "gitVersion.json" }),
  swcPreserveDirectives(),
  auto(),
  peerDepsExternal(),
];

const commonOutput = {
  treeshake,
  plugins: [...generalPlugins],
};

const config = [
  // Configuration for React Native
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals: {
          "react-native": "reactNative", // Map 'react-native' to the global variable 'reactNative'
        },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
        globals: {
          "react-native": "reactNative", // Map 'react-native' to the global variable 'reactNative'
        },
      },
    ],
    ...commonOutput,
  },
  // Configuration for the web
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.browser,
        format: "umd",
        name: "devlanderHooks",
        globals: {
          "react-native": "reactNative", // Map 'react-native' to the global variable 'reactNative'
        },
      },
    ],
    ...commonOutput,
  },
  // Configuration for TypeScript declaration files
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
