/**
 * transform: true
 * title: 编辑模式
 * desc: 编辑模式下支持对输入框的禁用, 监听输入框值的改变
 */

import React, { useState, useEffect } from 'react';
import { CssStyleBoard } from 'shanbay-ui';
import { Radio } from 'antd';

import styles from './demos.module.less';

const options = [
    { label: '启用', value: false },
    { label: '禁用', value: true },
];

function EditCom() {
    const [disabledValue, setDisabledValue] = useState<boolean>(false);
    // const [inputValue, setInputValue] = useState<string>('yellow');

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const handleDisabled = (e) => {
        setDisabledValue(e.target.value);
    };

    return (
        <div className={styles['demo-container']}>
            <div className={styles['demo-operate']}>
                <div className={styles['demo-operate-item']}>
                    <span>是否禁用：</span>
                    <Radio.Group
                        options={options}
                        onChange={handleDisabled}
                        value={disabledValue}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </div>
            </div>

            <div className={styles['demo-content']}>
                <CssStyleBoard
                    cssValue={'yellow'}
                    disabled={disabledValue}
                    onInputChange={handleChange}
                    mode="edit"
                    key={`${disabledValue}`}
                ></CssStyleBoard>
            </div>
        </div>
    );
}

export default EditCom;
