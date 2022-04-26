/**
 * transform: true
 * title: 基本
 * desc: 最简单的使用
 */

import React, { useState, useEffect } from 'react';
import { CssStyleBoard } from 'shanbay-ui';

import styles from './demos.module.less';

function defaultCom() {
    return (
        <div className={styles['demo-container']}>
            <CssStyleBoard
                cssValue={'RGB(100%,0%,0%)'}
                shadow={false}
                mode="preview"
            ></CssStyleBoard>

            <CssStyleBoard cssValue={'#1890ff'} shadow={true} mode="edit"></CssStyleBoard>
        </div>
    );
}

export default defaultCom;
