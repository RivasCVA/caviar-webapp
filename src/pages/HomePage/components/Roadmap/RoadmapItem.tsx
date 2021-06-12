import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import { TextStyle } from 'components/Typography';

type Props = {
    title: string;
    children: string | React.ReactNode;
    isLast?: boolean;
};

const RoadmapItem = (props: Props): JSX.Element => {
    const { title, children, isLast = false } = props;
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.left)}>
                <p className={css(styles.quarterTitle)}>{title}</p>
                {!isLast && <div className={css(styles.bar)} />}
            </div>
            <div className={css(styles.right)}>
                <p className={css(TextStyle, styles.description)}>{children}</p>
            </div>
        </div>
    );
};

export { RoadmapItem };

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 400,
        '@media (max-width: 600px)': {
            width: '95%',
        },
    },
    left: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: -20,
    },
    right: {
        display: 'flex',
        flex: 9,
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 10,
    },
    quarterTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '500 20px Poppins',
        background: Color.caviarGreen,
        color: 'white',
        width: 55,
        height: 55,
        borderRadius: '50%',
        boxShadow: `0px 0px 0px 1px ${Color.offBlack}`,
    },
    description: {
        lineHeight: 2,
        paddingBottom: 40,
    },
    bar: {
        display: 'flex',
        flex: 1,
        width: 5,
        background: Color.offBlack,
    },
});
