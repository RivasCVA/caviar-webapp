import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Title } from 'components/Typography';
import { Strut } from 'components/Layout';

type Props = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Community = (props: Props): JSX.Element => {
    const { title, children } = props;
    return (
        <div className={css(styles.container)}>
            <Title>{title}</Title>
            <Strut size={15} />
            <div className={css(styles.horizontal)}>{children}</div>
        </div>
    );
};

export default Community;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    horizontal: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
