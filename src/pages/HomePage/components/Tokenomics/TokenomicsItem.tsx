import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import icons from 'assets/icons';

type Props = {
    icon: keyof typeof icons;
    title: string;
    children: string;
};

const TokenomicsItem = (props: Props): JSX.Element => {
    const { icon, title, children } = props;
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.left)}>
                <img className={css(styles.icon)} src={icons[icon]} alt="" />
            </div>
            <div className={css(styles.right)}>
                <p className={css(styles.title)}>{title}</p>
                <p className={css(styles.description)}>{children}</p>
            </div>
        </div>
    );
};

export { TokenomicsItem };

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 300,
        margin: '15px 10px',
    },
    left: {
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        paddingRight: 20,
    },
    right: {
        display: 'flex',
        flex: 9,
        flexDirection: 'column',
    },
    icon: {
        width: '100%',
    },
    title: {
        font: '22px Roboto Mono',
        paddingBottom: 5,
    },
    description: {
        font: '18px Roboto Mono',
    },
});
