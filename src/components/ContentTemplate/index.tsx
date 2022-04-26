/**
 * transform: true
 * title: 基本
 * desc: 最简单的使用
 */

import React, { useEffect, useState } from 'react';
import { Button, Tag, Image } from 'antd';
import { IMG_ERROR_DEFAULT } from '../../constant';

import './index.less';

interface ContentTemplateProps {
    title: string;
    mode?: 'font' | 'img';
    font: fontProps[];
    titleSize?: 'default' | 'middle' | 'large';
    imgSrc?: string;
    components?: React.ReactNode[];
    content?: 'left' | 'middle' | 'right';
    imgPosition?: 'left' | 'right';
    fontMode?: 'vertical' | 'horizontal';
    imgWidth?: string;
    // 支持修改图片高度
    imgHeight?: string;
}

interface fontProps {
    title: string;
    content: React.ReactNode | string | number;
}

const IMG_ERROR = IMG_ERROR_DEFAULT;

const modeList = ['font', 'img'];
const titleSizeList = ['default', 'middle', 'large'];
const contentList = ['left', 'middle', 'right'];
const imgPositionList = ['left', 'right'];
const fontModeList = ['vertical', 'horizontal'];

function ContentTemplate({
    // 标题
    title,
    // 模式选择：图文或者文字
    mode,
    // 标题大小
    titleSize,
    // 文字内容
    font,
    // 图片路径
    imgSrc,
    // 右上操作组件
    components,
    // 内容主体部分的布局方式：居中，偏左，偏右
    content,
    // 内容中图片的布局方式：偏左，偏右
    imgPosition,
    // 内容中文字部分的排列方式：垂直或者水平
    fontMode,
    // 支持修改图片宽度
    imgWidth,
    // 支持修改图片高度
    imgHeight,
}: ContentTemplateProps) {
    useEffect(() => {
        // 对titleSize值进行处理
        if (titleSizeList.indexOf(titleSize) === -1) {
            titleSize = titleSizeList[0];
        }

        // 对contentPosition值进行处理
        if (contentList.indexOf(content) === -1) {
            content = contentList[0];
        }

        // 对mode值进行处理
        if (modeList.indexOf(mode) === -1) {
            mode = modeList[0];
        }

        // 对fontMode值进行处理
        if (fontModeList.indexOf(fontMode) === -1) {
            fontMode = fontModeList[0];
        }

        // 对imgPosition值进行处理
        if (imgPositionList.indexOf(imgPosition) === -1) {
            imgPosition = imgPositionList[0];
        }
    }, []);

    return (
        <div className="bayui-content-container">
            <div className="bayui-content-title">
                <div className={`bayui-content-title-left content-title-left-${titleSize}`}>{title}</div>
                <div className="bayui-content-title-right">
                    {components && components?.map((item) => item)}
                </div>
            </div>
            <div className={`bayui-content-inf content-inf-${content}`}>
                {/* 主体内容中的文字部分 */}
                {mode === 'font' ? (
                    <div className={`bayui-content-inf-font-${fontMode}`}>
                        {font?.length > 0 ? (
                            font.map((item, index) => (
                                <div className="bayui-content-inf-font-item" key={`item-${index}`}>
                                    <div style={{ margin: '8px' }}>{item.title}：</div>
                                    <div style={{ margin: '8px' }}>{item.content}</div>
                                </div>
                            ))
                        ) : (
                            <span>无内容</span>
                        )}
                    </div>
                ) : (
                    <div className={`bayui-content-inf-img-border-${imgPosition}`}>
                        {/* 图片偏左排列 */}
                        {imgPosition === 'left' && (
                            <Image
                                src={imgSrc}
                                fallback={IMG_ERROR}
                                width={imgWidth}
                                height={imgHeight}
                            />
                        )}
                        {/* 文字内容 */}
                        <div></div>
                        {imgPosition === 'right' && (
                            <Image
                                src={imgSrc}
                                fallback={IMG_ERROR}
                                width={imgWidth}
                                height={imgHeight}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

ContentTemplate.defaultProps = {
    title: 'Test',
    titleSize: 'large',
    components: [<Button>1111111</Button>, <Button>1111111</Button>],
    content: 'left',
    imgPosition: 'right',
    imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2016%2F03%2F09%2F145748955125357398.jpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651474400&t=8ff701bf5d28608b0b424ec51aad34d5',
    mode: 'img',
    font: [
        {
            title: '标题',
            content: <Tag color="magenta">magenta</Tag>,
        },
        {
            title: '标题',
            content: <Tag color="magenta">magenta</Tag>,
        },
        {
            title: '标题',
            content: <Tag color="magenta">magenta</Tag>,
        },
    ],
    fontMode: 'horizontal',
    // 这两个默认值不应该设置，仅为了测试
    imgWidth: '90px',
    // 支持修改图片高度
    imgHeight: '90px',
};

export default ContentTemplate;
