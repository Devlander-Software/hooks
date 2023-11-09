import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import { terser } from "rollup-plugin-terser";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js", ".jsx", ".ts", ".tsx",  ".native.js"];

// Exclude certain dependencies from being bundled
const external = [
  "react",
  "react-dom",
  "react-native-web",  // Add more peer dependencies here

];

const globals = {
  react: "React",
  "react-native-web": "reactNativeWeb",
  'react-native-web/dist/exports/Platform': 'ReactNativeWeb.Platform',
  "react-native-web/dist/exports/View": "ReactNativeWeb.View",
  "react-native-web/dist/exports/Button": "ReactNativeWeb.Button",
  "react-native-web/dist/exports/StyleSheet": "ReactNativeWeb.StyleSheet",
  "react-native-web/dist/exports/Dimensions": "ReactNativeWeb.Dimensions",

  "react-native-web/Libraries/Utilities/codegenNativeComponent": 'ReactNativeWeb.codegenNativeComponent',
  "react-native-web/dist/exports/useWindowDimensions": "ReactNativeWeb.useWindowDimensions",
  "react-native-web/dist/exports/TouchableOpacity": "ReactNativeWeb.TouchableOpacity",
  "react-native-web/dist/exports/FlatList": "ReactNativeWeb.FlatList",
  "react-native-web/dist/exports/SectionList": "ReactNativeWeb.SectionList",
  "react-native-web/dist/exports/Text": "ReactNativeWeb.Text",
  "react-native-web/dist/exports/TouchableHighlight": "ReactNativeWeb.TouchableHighlight",
  "react-native-web/dist/exports/ScrollView": "ReactNativeWeb.ScrollView",
  "react-native-web/Libraries/Image/AssetSourceResolver": "ReactNativeWeb.AssetSourceResolver",
  "react-native-web/Libraries/Image/AssetRegistry": "ReactNativeWeb.AssetRegistry",
  "react-native-web/Libraries/Image/resolveAssetSource": "ReactNativeWeb.resolveAssetSource",
}

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};


export default {
  input: "src/index.tsx", // Your entry point
  output: [
    {
      file: packageJson.main,
      format: "umd",
      name: "RawDesignSystem", // Replace with your library's name
      globals: globals,
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      globals: globals,

      sourcemap: true,
    }
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
    typescript(),
    json(),
    terser(), // Use terser for minification
  ],
};
