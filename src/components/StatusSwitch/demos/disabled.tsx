/**
 * transform: true
 * title: 禁用
 * desc: 选择器选项禁用
 */

import React, { useState, useEffect } from 'react';
import { StatusSwitch } from 'shanbay-ui';
import { Space } from 'antd';

const dataOptions = [
    {
        label: '草稿',
        value: 1,
    },
    {
        label: '已发布',
        value: 2,
        disabled: true,
    },
    {
        label: '已下线',
        value: 3,
    },
    {
        label: '已隐藏',
        value: 4,
    },
];

function disabledCom() {
    const handleButtonChange = (value, option) => {
        console.log(value, option);
    };

    const handleSelectChange = (value, option) => {
        console.log(value, option);
    };

    return (
        <div>
            <Space direction="vertical" size={30}>
                <StatusSwitch
                    options={dataOptions}
                    defaultValue={dataOptions[0].value}
                    onChange={handleButtonChange}
                    mode="button"
                ></StatusSwitch>

                <StatusSwitch
                    options={dataOptions}
                    defaultValue={dataOptions[0].value}
                    onChange={handleSelectChange}
                    mode="select"
                ></StatusSwitch>
            </Space>
        </div>
    );
}

export default disabledCom;
