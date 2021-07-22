import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import serve from 'rollup-plugin-serve';
import {terser} from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import rollupReplace from '@rollup/plugin-replace';

const packageJson = require("./package.json");
const serverDir = "public";
export default {
  input: "src/index.tsx",
  output: [
    {
      file: `${serverDir}/${packageJson.main}`,
      format: "cjs",
      sourcemap: process.env.NODE_ENV === 'production'
    },
    {
      file: `${serverDir}/${packageJson.main}.esm.js`,
      format: "esm",
      sourcemap: process.env.NODE_ENV === 'production'
    },
    {
      file: `${serverDir}/${packageJson.main}.umd.js`,
      format: "umd",
      sourcemap: process.env.NODE_ENV === 'production'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    serve(serverDir),
    sourcemaps(),
    rollupReplace(),
    (process.env.NODE_ENV === 'production' && terser())
  ],
  watch: {
    chokidar: {
      // if the chokidar option is given, rollup-watch will
      // use it instead of fs.watch. You will need to install
      // chokidar separately.
      //
      // this options object is passed to chokidar. if you
      // don't have any options, just pass `chokidar: true`
    },

    // include and exclude govern which files to watch. by
    // default, all dependencies will be watched
    exclude: ['node_modules/**']
  }
};