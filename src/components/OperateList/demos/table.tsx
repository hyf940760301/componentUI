/**
 * transform: true
 * title: 场景
 * desc: 在表格中添加操作列表
 */

import React from 'react';
import { OperateList } from 'shanbay-ui';
import { EditOutlined, StopOutlined } from '@ant-design/icons';
import { Table } from 'antd';

const editOptions = [
    {
        label: '编辑',
        value: 0,
        color: 'primary',
        icon: <EditOutlined />,
    },
    {
        label: '禁用',
        value: 1,
        color: 'warning',
        disabled: true,
        icon: <StopOutlined />,
    },
    {
        label: '下线',
        value: 2,
        color: 'danger',
    },
];

const tableData = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
];

function tableCom() {
    const handleEditClick = (label: string, value: any, record: any) => {
        console.log(label, value, record);
    };

    const tableColumn = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            render: (_, record) => (
                <OperateList
                    options={editOptions}
                    onEditClick={(label, value) => handleEditClick(label, value, record)}
                ></OperateList>
            ),
        },
    ];

    return (
        <div>
            <Table columns={tableColumn} dataSource={tableData}></Table>
        </div>
    );
}

export default tableCom;
