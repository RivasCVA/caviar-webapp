import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';

type Props = {
    title: string;
    children: string;
    isLast?: boolean;
};

const RoadmapItem = (props: Props): JSX.Element => {
    const { title, children, isLast = false } = props;
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.left)}>
                <p className={css(styles.title)}>{title}</p>
                {!isLast && <div className={css(styles.bar)} />}
            </div>
            <div className={css(styles.right)}>
                <p className={css(styles.description)}>{children}</p>
            </div>
        </div>
    );
};

export { RoadmapItem };

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 400,
        margin: '3px 120px',
        marginTop: -20,
    },
    left: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        flexDirection: 'column',
    },
    right: {
        display: 'flex',
        flex: 9,
        flexDirection: 'row',
    },
    title: {
        font: '24px Roboto Mono',
        color: 'white',
        background: Color.caviarGreen,
        width: 50,
        height: 50,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        font: '15px Roboto Mono',
        paddingBottom: 80,
    },
    bar: {
        display: 'flex',
        flex: 1,
        width: 2,
        background: 'black',
    },
});
