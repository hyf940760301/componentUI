import React, { useEffect, useState } from 'react';

import { optionsProps, colorList } from './type';

import './index.less';

interface OperateListProps {
    options: optionsProps[];
    onEditClick?: (label: string, value: any) => void;
}

function OperateList({
    // 操作列表
    options,
    // 点击时的回调
    onEditClick,
}: OperateListProps) {
    const handleClick = (item: optionsProps) => {
        if (!item?.disabled) {
            onEditClick && onEditClick(item.label, item.value);
        }
    };

    return (
        <div className="bayui-operate-border">
            {options?.map((item, index) => (
                <div
                    key={`${item}_${index}`}
                    className={item?.disabled ? 'bayui-operate-disabled' : 'bayui-operate-item'}
                    onClick={() => handleClick(item)}
                >
                    <span
                        className="bayui-operate-icon"
                        style={{ color: item?.disabled ? '' : colorList[item?.color || 'primary'] }}
                    >
                        {item?.icon}
                    </span>
                    <span
                        style={{ color: item?.disabled ? '' : colorList[item?.color || 'primary'] }}
                    >
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}

OperateList.defaultProps = {
    options: [],
};

export default OperateList;
