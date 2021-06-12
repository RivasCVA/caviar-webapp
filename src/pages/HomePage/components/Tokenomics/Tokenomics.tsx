import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Title } from 'components/Typography';
import { Strut } from 'components/Layout';

type Props = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Tokenomics = (props: Props): JSX.Element => {
    const { title, children } = props;
    return (
        <div className={css(styles.container)}>
            <Title>{title}</Title>
            <Strut size={15} />
            <div className={css(styles.grid)}>{children}</div>
        </div>
    );
};

export default Tokenomics;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 'min(750px, 100%)',
    },
});
