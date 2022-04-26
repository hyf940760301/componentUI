import React, { useState } from 'react';
import { Modal } from 'antd';
import { StatusButton } from 'shanbay-ui';

function defaultCom() {
    const [visible, setVisible] = useState<boolean>(false);
    const handleStatus = (statusLabel: string, statusCode: number) => {
        setVisible(true);
    };

    return (
        <>
            <StatusButton
                status={1}
                // defaultStatus={0}
                showModal={false}
                handleStatus={handleStatus}
            ></StatusButton>
            <Modal title="Basic Modal" visible={visible}></Modal>
        </>
    );
}

export default defaultCom;
