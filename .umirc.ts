import { defineConfig } from 'dumi';
import { resolve } from 'path';

const IMG_URL =
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2016%2F03%2F09%2F145748955125357398.jpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651474400&t=8ff701bf5d28608b0b424ec51aad34d5';

const isDeploy = process.env.SITE_DEPLOY === 'TRUE';

export default defineConfig({
    title: '素质组前端通用业务组件库',
    mode: 'site',
    description: '素质组前端业务组件库',
    favicon: IMG_URL,
    logo: IMG_URL,
    outputPath: './docs-dist',
    webpack5: {},
    exportStatic: {},
    base: '/ui-components',
    publicPath: '/ui-components/',
    alias: {
        '@': resolve(__dirname, './src'),
    },
    extraBabelPlugins: [
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
        ],
    ],
    hash: true,
    ssr: isDeploy ? {} : undefined,
});
