import React from 'react';
import { Checkbox, InputNumber } from 'antd';

import './index.less';

interface TimeRefreshProps {
    onCheck?: (checked: boolean) => void;
    onInput?: (value: number | undefined) => void;
    isCheck?: boolean;
    inputValue?: number | undefined;
}

const DEFAULT_TIME_INTERVAL = 5;

function AutoRefresh({ onCheck, onInput, isCheck, inputValue }: TimeRefreshProps) {
    const handleCheck = (checked: boolean) => {
        if (onCheck) {
            onCheck(checked);
        }
    };

    return (
        <div className="bayui-border">
            <Checkbox onChange={(e) => handleCheck(e.target.checked)} checked={isCheck} />
            <span>自动刷新</span>
            <InputNumber
                size="small"
                defaultValue={DEFAULT_TIME_INTERVAL}
                onChange={onInput}
                value={inputValue}
                formatter={(item: number | undefined) => {
                    if (item && item > 0 && item % 1 === 0) {
                        return `${item}`;
                    }

                    return DEFAULT_TIME_INTERVAL.toString();
                }}
                parser={(item) => {
                    if (item?.match(/^[1-9][0-9]*/)) {
                        return parseInt(item);
                    }

                    return DEFAULT_TIME_INTERVAL;
                }}
            />
            <span>秒</span>
        </div>
    );
}

AutoRefresh.defaultProps = {
    onInput: () => null,
    isCheck: false,
    inputValue: 5,
};

export default AutoRefresh;
