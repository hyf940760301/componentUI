/**
 * transform: true
 * title: 图标
 * desc: 给操作列表中的操作添加图标
 */

import React, { useState } from 'react';
import { OperateList } from 'shanbay-ui';
import { EditOutlined, StopOutlined } from '@ant-design/icons';

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

function iconCom() {
    const [content, setContent] = useState<string>('');

    const handleEditClick = (label: string, value: any) => {
        setContent(`点击的内容：${label}  ${value}`);
    };

    return (
        <div>
            {content}
            <OperateList options={editOptions} onEditClick={handleEditClick}></OperateList>
        </div>
    );
}

export default iconCom;
