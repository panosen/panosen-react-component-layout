import React from 'react';

import styles from './layout.module.css'

export interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout: React.FC = (props: LayoutProps) => {

    const { children } = props;

    return <div className={styles.layout}>{children}</div>
}