import React from 'react';

export interface optionsProps {
    label: string;
    value: any;
    disabled?: boolean;
    color?: 'primary' | 'danger' | 'success' | 'warning';
    icon?: React.ReactNode;
}

export enum colorList {
    primary = '#1890ff',
    success = '#52c41a',
    danger = '#ff4d4f',
    warning = '#faad14',
}
