import React from 'react';

import { createRule } from '@panosen/css-in-js'

export interface HeadProps {
    children?: JSX.Element | JSX.Element[];

    style?: React.CSSProperties;
}

export const Head: React.FC<HeadProps> = (props: HeadProps) => {

    const { children, style } = props;

    const style_layout = createRule()
        .addStyle('display', 'flex')
        .addStyle('flex-direction', 'row')
        .addStyle('z-index', '1')
        .addStyle('box-shadow', '0px 3px 5px 0px #878787')
        .addStyle('justify-content', 'space-between')
        .addStyle('padding', '10px 0')
        .build();

    return <div className={style_layout} style={style}>{children}</div>
}