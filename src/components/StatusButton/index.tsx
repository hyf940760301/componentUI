import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

import './index.less';

interface StatusButtonProps {
    status: number;
    defaultStatus?: number;
    preComponents?: React.ReactNode[];
    afterComponents?: React.ReactNode[];
    typeStyle?: string;
    showModal?: boolean;
    disabled?: boolean;
    shape?: 'default' | 'circle' | 'round';
    size?: 'large' | 'middle' | 'small';
    handleOk?: (statusLabel: string, statusCode: number) => void;
    handleStatus?: (statusLabel: string, statusCode: number) => void;
    handleChangeStatus?: (statusCode: number) => void;
}

const statusList = new Map([
    ['未发布', 0],
    ['内测中', 1],
    ['已发布', 2],
    ['已下线', 3],
]);

function StatusButton({
    status,
    // 默认当前状态
    defaultStatus,
    // 前置组件数组
    preComponents,
    // 后置组件数组
    afterComponents,
    // 设置主题色
    typeStyle,
    // 是否显示默认弹窗
    showModal,
    // 是否禁用
    disabled,
    // 设置按钮形状
    shape,
    // 设置按钮大小
    size,
    // 默认弹窗存在下的确定事件回调
    handleOk,
    // 状态改变时的事件回调
    handleStatus,
}: StatusButtonProps) {
    const [currentStatus, setCurrentStatus] = useState<number>(defaultStatus || status);

    const onStatus = async (statusLabel: string, statusCode: any) => {
        if (showModal) {
            Modal.warning({
                content: `确定${statusLabel}吗?`,
                closable: true,
                okText: '确定',
                onOk: async () => {
                    try {
                        handleOk && (await handleOk(statusLabel, statusCode));
                        setCurrentStatus(statusCode);
                    } catch (err) {
                        throw new Error('状态改变失败');
                    }
                },
            });
        } else {
            try {
                handleStatus && (await handleStatus(statusLabel, statusCode));
            } catch (err) {
                throw new Error('状态改变失败');
            }
        }
    };

    const statusCom = (statusCode: number): React.ReactNode[] => {
        const components: React.ReactNode[] = preComponents ? [...preComponents] : [];

        switch (statusCode) {
            case statusList.get('未发布'):
                components.push([
                    <Button
                        disabled={disabled}
                        size={size}
                        shape={shape}
                        onClick={() => onStatus('内测', statusList.get('内测中'))}
                        key="test"
                        type={typeStyle ? typeStyle : 'default'}
                    >
                        内测
                    </Button>,
                ]);
                break;
            case statusList.get('内测中'):
                components.push([
                    <Button
                        disabled={disabled}
                        size={size}
                        shape={shape}
                        onClick={() => onStatus('撤销内测', statusList.get('未发布'))}
                        key="untest"
                        type={typeStyle ? typeStyle : 'default'}
                    >
                        撤销内测
                    </Button>,
                    <Button
                        disabled={disabled}
                        size={size}
                        shape={shape}
                        onClick={() => onStatus('发布', statusList.get('已发布'))}
                        key="publish"
                        type={typeStyle ? typeStyle : 'default'}
                    >
                        发布
                    </Button>,
                ]);
                break;
            case statusList.get('已发布'):
                components.push([
                    <Button
                        disabled={disabled}
                        size={size}
                        shape={shape}
                        onClick={() => onStatus('下线', statusList.get('未发布'))}
                        key="offline"
                        type={typeStyle ? typeStyle : 'default'}
                    >
                        下线
                    </Button>,
                ]);
                break;
            case statusList.get('已下线'):
                components.push([
                    <Button
                        disabled={disabled}
                        size={size}
                        shape={shape}
                        onClick={() => onStatus('内测', statusList.get('内测中'))}
                        key="test"
                        type={typeStyle ? typeStyle : 'default'}
                    >
                        内测
                    </Button>,
                ]);
                break;
            default:
                break;
        }

        components.push([...afterComponents]);

        return components;
    };

    useEffect(() => {
        setCurrentStatus(status);
    }, [status]);

    return (
        <div className="bayui-status-but-border">
            {statusCom(currentStatus)?.map((item) => item)}
        </div>
    );
}

StatusButton.defaultProps = {
    status: 0,
    defaultStatus: 0,
    preComponents: [<Button>test</Button>, <Button>test</Button>],
    afterComponents: [<Button>test</Button>, <Button>test</Button>],
    typeStyle: 'primary',
    showModal: true,
    disabled: false,
    shape: 'default',
    size: 'default',
};

export default StatusButton;
