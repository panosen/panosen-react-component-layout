import React from 'react';

import { createRule } from '@panosen/css-in-js'

export interface LayoutProps {
    children?: JSX.Element | JSX.Element[];

    style?: React.CSSProperties;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

    const { children, style } = props;

    const style_layout = createRule()
        .addStyle('display', 'flex')
        .addStyle('flex-direction', 'column')
        .build();

    return <div className={style_layout} style={style}>{children}</div>
}