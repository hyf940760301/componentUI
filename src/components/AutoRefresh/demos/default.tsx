/**
 * transform: true
 * title: 基本
 * desc: 最简单的使用
 */

import React, { useState, useRef, useEffect } from 'react';
import { AutoRefresh } from 'shanbay-ui';

export default () => {
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<number>(5);
    const [currentCount, setCurrentCount] = useState<number>(0);

    const interval = useRef('');

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
        <>
            <p>当前刷新次数：{currentCount}</p>
            <AutoRefresh
                key="refresh"
                inputValue={inputValue}
                isCheck={isCheck}
                onCheck={handleCheck}
                onInput={handleInput}
            ></AutoRefresh>
        </>
    );
};
