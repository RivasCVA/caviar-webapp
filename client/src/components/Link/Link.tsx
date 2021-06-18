import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';

type Props = {
    children: string;
    href: string;
    selected?: boolean;
};

const Link = (props: Props): JSX.Element => {
    const { children, href, selected = false } = props;
    return (
        <a className={css([styles.container, selected && styles.selected])} href={href} type="link">
            {children}
        </a>
    );
};

export default Link;

const styles = StyleSheet.create({
    container: {
        color: Color.jungleGreen,
        width: 175,
        height: 50,
        fontSize: 24,
        cursor: 'pointer',
    },
    selected: {
        color: Color.lightBlue,
    },
});
