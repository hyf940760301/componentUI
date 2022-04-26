/**
 * transform: true
 * title: 场景
 * desc: 阴影，样式大小，样式形状
 */

import React, { useState } from 'react';
import { CssStyleBoard } from 'shanbay-ui';
import { Radio } from 'antd';

import styles from './demos.module.less';

const optionsShadow = [
    { label: '阴影', value: true },
    { label: '隐藏阴影', value: false },
];

const optionsSize = [
    { label: 'default', value: 'default' },
    { label: 'middle', value: 'middle' },
    { label: 'large', value: 'large' },
];

const optionsType = [
    { label: 'circle', value: 'circle' },
    { label: 'square', value: 'square' },
    { label: 'round', value: 'round' },
];

function SceneCom() {
    const [shadowValue, setShadowValue] = useState<boolean>(true);
    const [sizeValue, setSizeValue] = useState<string>('default');
    const [typeValue, setTypeValue] = useState<string>('round');

    const handleShadow = (e) => {
        setShadowValue(e.target.value);
    };

    const handleSize = (e) => {
        setSizeValue(e.target.value);
    };

    const handleType = (e) => {
        setTypeValue(e.target.value);
    };

    return (
        <div className={styles['demo-container']}>
            <div className={styles['demo-operate']}>
                <div className={styles['demo-operate-item']}>
                    <span>阴影：</span>
                    <Radio.Group
                        options={optionsShadow}
                        onChange={handleShadow}
                        value={shadowValue}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </div>

                <div className={styles['demo-operate-item']}>
                    <span>样式大小：</span>
                    <Radio.Group
                        options={optionsSize}
                        onChange={handleSize}
                        value={sizeValue}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </div>

                <div className={styles['demo-operate-item']}>
                    <span>样式形状：</span>
                    <Radio.Group
                        options={optionsType}
                        onChange={handleType}
                        value={typeValue}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </div>
            </div>

            <div className={styles['demo-content']}>
                <CssStyleBoard
                    cssValue={'RGB(100%,0%,0%)'}
                    shadow={shadowValue}
                    size={sizeValue}
                    type={typeValue}
                    mode="preview"
                    key={`${shadowValue}_${sizeValue}_${typeValue}`}
                ></CssStyleBoard>
            </div>
        </div>
    );
}

export default SceneCom;
