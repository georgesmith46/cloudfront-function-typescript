import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer";

const limitBytes = 1e4;

const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < limitBytes) return;
  console.error("Build failed");
  console.error(
    `Bundle size exceeds CloudFront function limit of ${limitBytes} bytes`
  );
  console.error(`Bundle size: ${bundleSize} bytes`);
  return process.exit(1);
};

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    strict: false,
    esModule: false,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: "bundled" }),
    terser(),
    analyze({ onAnalysis, skipFormatted: true }),
  ],
};
