import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'
export default {
    input: 'src/main.js',
    output: {
       format:'esm',
      dir:'dist'
    },
    plugins: [
        resolve(),
        terser(),
        json(),
        vue({
            css: true,
            compilerTemplate: true,
            preprocessStyles: true
        }),
        babel({
            exclude: "**/node_modules/**"
        }),
        commonjs(),
        postcss()
    ]
}