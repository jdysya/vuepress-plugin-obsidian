import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const isProd = process.env.BUILD === 'production'

export default {
  input: './src/index.ts',
  output: {
    dir: './dist',
    sourcemap: 'inline',
    sourcemapExcludeSources: isProd,
    format: 'es',
    exports: 'default',
  },
  plugins: [
    typescript(),
    nodeResolve({ browser: true }),
    commonjs(),
  ],
}