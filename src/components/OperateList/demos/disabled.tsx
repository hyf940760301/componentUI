/**
 * transform: true
 * title: 禁用
 * desc: 禁用操作列表中的操作
 */

import React, { useState } from 'react';
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
        disabled: true,
    },
    {
        label: '下线',
        value: 2,
        color: 'danger',
    },
];

function disabledCom() {
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

export default disabledCom;
