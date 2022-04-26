import React from 'react';
import Layout from 'dumi-theme-default/src/layout';
import { IRouteComponentProps } from 'umi';
import { Image, Table } from 'antd';

import './layout.less';

const columns = [
    {
        title: (
            <Image
                src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png"
                preview={false}
            ></Image>
        ),
        dataIndex: 'Edge',
    },
    {
        title: (
            <Image
                src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png"
                preview={false}
            ></Image>
        ),
        dataIndex: 'FireFox',
    },
    {
        title: (
            <Image
                src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png"
                preview={false}
            ></Image>
        ),
        dataIndex: 'Chrome',
    },
    {
        title: (
            <Image
                src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png"
                preview={false}
            ></Image>
        ),
        dataIndex: 'Safari',
    },
];

const data = [
    {
        Edge: 'last 2 ',
        FireFox: 'last 2 ',
        Chrome: 'last 2 ',
        Safari: 'last 2',
    },
];

const LayoutPage = ({ children, ...props }: IRouteComponentProps) => {
    const object = { ...props };
    return (
        <Layout {...props}>
            <div style={{ marginTop: '20px' }}>
                <div key="children">{children}</div>
                {/* 当路由为首页时，加载浏览器兼容性列表 */}
                {object?.location?.pathname === '/' && (
                    <div>
                        <Table columns={columns} dataSource={data} pagination={false} />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default LayoutPage;
