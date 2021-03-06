import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
const pkg = {
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "browser": "dist/index.js"
};

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

const external = [
  'react',
  'react-dom',
  'prop-types',
];

export default {
  input: `react-videoroom-janus.tsx`,
  output: [
    {
      name: 'react-videoroom-janus', 
      file: pkg.browser,
      format: 'umd',
      sourcemap: false,
      globals
    },
    {
      name: 'react-videoroom-janus', 
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
      globals
    },
    {
      name: 'react-videoroom-janus', 
      file: pkg.module,
      format: 'es',
      sourcemap: false,
      globals
    }
  ],
  external,
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    resolve({
      browser: true
    }),
    sourceMaps(),
    copy({
      targets: [
        { src: './package.json', dest: 'dist' },
        { src: './README.md', dest: 'dist' }
      ]
    })
  ]
}
