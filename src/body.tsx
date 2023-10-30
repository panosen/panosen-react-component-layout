import React from 'react';

import { createRule } from '@panosen/css-in-js'

export interface BodyProps {
    children?: JSX.Element | JSX.Element[];

    style?: React.CSSProperties;
}

export const Body: React.FC<BodyProps> = (props: BodyProps) => {

    const { children, style } = props;

    const style_layout = createRule()
        .addStyle('display', 'flex')
        .addStyle('flex-direction', 'row')
        .build();

    return <div className={style_layout} style={style}>{children}</div>
}