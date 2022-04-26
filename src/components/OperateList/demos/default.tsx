/**
 * transform: true
 * title: 基本
 * desc: 最简单的使用
 */

import React, { useState, useEffect } from 'react';
import { OperateList } from 'shanbay-ui';

const editOptions = [
    {
        label: '编辑',
        value: 0,
        color: 'primary',
    },
    {
        label: '隐藏',
        value: 1,
        color: 'warning',
    },
    {
        label: '下线',
        value: 2,
        color: 'danger',
    },
];

function defaultCom() {
    const [content, setContent] = useState<string>('');

    const handleEditClick = (label, value) => {
        setContent(`点击的内容：${label}  ${value}`);
    };

    return (
        <div>
            {content}
            <OperateList options={editOptions} onEditClick={handleEditClick}></OperateList>
        </div>
    );
}

export default defaultCom;
