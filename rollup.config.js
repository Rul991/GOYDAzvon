import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: `src/client/index.ts`,
    output: [
      {
        file: 'public/js/index.js',
        format: 'umd',
        name: 'goyda',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve({browser: true}),
      commonjs(),
      typescript(),
      terser({keep_classnames: true})
    ],
  }
];