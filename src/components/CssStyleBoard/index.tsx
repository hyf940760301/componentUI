import React, { useEffect, useState, MouseEvent } from 'react';
import { Input } from 'antd';

import './index.less';

interface CssStyleBoardProps {
    cssValue: string;
    mode?: 'preview' | 'edit';
    disabled?: boolean;
    type?: 'circle' | 'square' | 'round';
    size?: 'default' | 'middle' | 'large';
    shadow?: boolean;
    placeholder?: string;
    onInputChange?: (e: MouseEvent) => void;
    width?: string;
    height?: string;
}

const typeList = ['circle', 'square', 'round'];
const sizeList = ['default', 'middle', 'large'];
const modeList = ['preview', 'edit'];
const boxShadow = '3px 3px 3px #888888';

function CssStyleBoard({
    // css色值字符串
    cssValue,
    // 当前展示模式：预览模式或者编辑模式
    mode,
    // 在编辑模式下支持禁用输入框
    disabled,
    // 样式展示形状：正方形，圆形和正方圆弧
    type,
    // 样式展示尺寸大小
    size,
    // 是否支持阴影
    shadow,
    // 输入框默认值
    placeholder,
    // 支持对文本或输入框长度进行调整
    width,
    // 支持对文本或输入框高度进行调整
    height,
    // 输入框值变化时的回调
    onInputChange,
}: CssStyleBoardProps) {
    const [typeValue, setTypeValue] = useState<string>(type);
    const [sizeValue, setSizeValue] = useState<string>(size);
    const [modeValue, setDisplayModalValue] = useState<string>(mode);
    const [inputValue, setInputValue] = useState<string>(cssValue);

    const handleInoutChange = (e) => {
        onInputChange && onInputChange(e);
        setInputValue(e.target.value);
    };

    useEffect(() => {
        // 对传入的type值进行处理
        if (typeList.indexOf(type) === -1) {
            setTypeValue(typeList[0]);
        }

        // 对传入的size值进行处理
        if (sizeList.indexOf(size) === -1) {
            setSizeValue(sizeList[0]);
        }

        // 对传入的displayModal值进行处理
        if (modeList.indexOf(modeValue) === -1) {
            setDisplayModalValue(modeList[0]);
        }
    }, []);

    return (
        <div className="bayui-css-container">
            <div
                className={`bayui-css-${typeValue} bayui-css-${typeValue}-${sizeValue}`}
                style={{
                    backgroundColor: inputValue,
                    boxShadow: shadow ? boxShadow : '0',
                }}
            ></div>
            {modeValue === 'preview' ? (
                <div className="bayui-css-font" style={{ width, height }}>
                    {inputValue}
                </div>
            ) : (
                <Input
                    className="bayui-css-input"
                    style={{ width, height }}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={handleInoutChange}
                    value={inputValue}
                />
            )}
        </div>
    );
}

CssStyleBoard.defaultProps = {
    type: 'round',
    size: 'default',
    cssValue: '#fff',
    mode: 'edit',
    shadow: true,
    placeholder: '请输入色值',
    disabled: false,
    width: '160px',
    height: '30px',
};

export default CssStyleBoard;
