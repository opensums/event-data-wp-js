// rollup.config.js
import { terser } from 'rollup-plugin-terser';

// Make sure these properties are set in package.json!
import { name, version, homepage, author, license } from './package.json';

// First year of publication.
const firstYear = 2020;

// External globals.
const globals = {
  jquery: 'jQuery',
  Tabulator: 'Tabulator',
  wpApiSettings: 'wpApiSettings',
};

const now = new Date();
const date = now.toISOString().substr(0, 19).replace('T', ' ');
const year = now.getUTCFullYear();
const years = year === firstYear ? year : `${firstYear}-${year}`;

// Banner for minified output.
const preamble = `/// ${name} v${version} ${date}
/// ${homepage}
/// Copyright © ${years} ${author}
/// License: ${license}`;

// Banner for unminified output.
const banner = preamble;

export default {
  input: 'src/index.js',

  external: Object.keys(globals),

  output: [
    {
      file: `dist/${name}-${version}.js`,
      format: 'iife',
      globals,
      banner,
    },
    {
      file: `dist/${name}-${version}.min.js`,
      format: 'iife',
      globals,
      plugins: [terser({ format: { preamble } })],
    },
  ],
};
