/**
 * transform: true
 * title: 场景
 * desc: 基于表格的自动刷新
 */

import React, { useState, useEffect, useRef } from 'react';
import { AutoRefresh } from 'shanbay-ui';
import { Table } from 'antd';

import './table.less';

const dataSource = [
    {
        content: 'test',
        date: '2022-3-31',
    },
];

export default () => {
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<number>(5);
    const [currentCount, setCurrentCount] = useState<number>(0);

    const interval = useRef('');

    const columns = [
        {
            title: '当前刷新次数',
            dataIndex: 'sequence',
            width: '8%',
            render: (_) => <span>{currentCount}</span>,
        },
        {
            title: '内容',
            dataIndex: 'content',
            width: '5%',
        },
        {
            title: '日期',
            dataIndex: 'date',
            width: '8%',
        },
    ];

    const handleCheck = (checked: boolean) => {
        setIsCheck(checked);
    };

    const handleInput = (value: number) => {
        setInputValue(value);
    };

    useEffect(() => {
        clearInterval(interval.current);
        if (isCheck && inputValue) {
            interval.current = setInterval(() => {
                setCurrentCount((i) => i + 1);
            }, inputValue * 1000);
        } else {
            clearInterval(interval.current);
        }

        return () => clearInterval(interval.current);
    }, [isCheck, inputValue]);

    return (
        <div className="bayui-container">
            <div className="bayui-item_1">
                <AutoRefresh
                    key="refresh"
                    inputValue={inputValue}
                    isCheck={isCheck}
                    onCheck={handleCheck}
                    onInput={handleInput}
                ></AutoRefresh>
            </div>
            <div className="bayui-item_2">
                <Table columns={columns} dataSource={dataSource} pagination={false} />
            </div>
        </div>
    );
};
