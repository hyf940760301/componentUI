import React, { useEffect, useState } from 'react';
import { Radio, Select } from 'antd';

const { Option } = Select;

import { comProps } from './type';

interface StatusSwitchProps {
    defaultValue?: any;
    value?: any;
    mode?: 'button' | 'select';
    type?: 'outline' | 'solid';
    options: comProps[];
    width?: string | number;
    onChange?: (value: any, option: any) => void;
}

const modeList = ['button', 'select'];
const typeList = ['outline', 'solid'];

function StatusComponents({
    // 默认值
    defaultValue,
    // 当前选中的值
    value,
    // 选择展示模式：按钮组件或选择器组件
    mode,
    // 选项数组
    options,
    // 按钮组件模式下按钮样式
    type,
    // 在选择器模式下的宽度
    width,
    // 按钮组件或选择器组件值改变时的回调
    onChange,
}: StatusSwitchProps) {
    const [changeValue, setChangeValue] = useState<any>(defaultValue || value);

    const handleButtonChange = async (e) => {
        const optionFilter = options.filter((item) => item.value === e.target.value);
        onChange && (await onChange(e.target.value, optionFilter[0]));
        setChangeValue(e.target.value);
    };

    const handleSelectChange = async (value, option) => {
        onChange && (await onChange(value, option));
        setChangeValue(value);
    };

    useEffect(() => {
        // 对type值进行处理
        if (modeList.indexOf(mode) === -1) {
            mode = modeList[0];
        }

        // 对type值进行处理
        if (typeList.indexOf(type) === -1) {
            type = typeList[0];
        }
    });

    return (
        <>
            {mode === 'button' ? (
                <Radio.Group
                    onChange={handleButtonChange}
                    value={changeValue}
                    optionType="button"
                    buttonStyle={type}
                >
                    {options?.map((item, index) => (
                        <Radio.Button
                            value={item.value}
                            key={`${item}_${index}`}
                            disabled={item?.disabled}
                        >
                            {item?.label}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            ) : (
                <Select
                    value={changeValue}
                    onChange={(value, option) => handleSelectChange(value, option)}
                    style={{ width: width }}
                >
                    {options?.map((item, index) => (
                        <Option
                            value={item?.value}
                            key={`${item}_${index}`}
                            disabled={item?.disabled}
                        >
                            {item?.label}
                        </Option>
                    ))}
                </Select>
            )}
        </>
    );
}

StatusComponents.defaultProps = {
    mode: 'button',
    type: 'solid',
    width: '120px',
};

export default StatusComponents;
