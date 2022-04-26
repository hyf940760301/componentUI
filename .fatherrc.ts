export default {
    entry: 'src/index.ts',
    cjs: {
        type: 'rollup',
        minify: true,
    },
    runtimeHelpers: true,
    lessInBabelMode: true,
};
