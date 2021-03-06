import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon, { IconType } from 'components/Icon';
import { TextStyle } from 'components/Typography';
import Color from 'util/Color';

type Props = {
    icon: IconType;
    title: string;
    children: string;
};

const TokenomicsItem = (props: Props): JSX.Element => {
    const { icon, title, children } = props;
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.left)}>
                <Icon style={styles.icon} icon={icon} />
            </div>
            <div className={css(styles.right)}>
                <p className={css(styles.itemTitle)}>{title}</p>
                <p className={css(TextStyle)}>{children}</p>
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
        alignItems: 'center',
        paddingRight: 10,
    },
    right: {
        display: 'flex',
        flex: 9,
        flexDirection: 'column',
        paddingLeft: 10,
    },
    icon: {
        width: '95%',
    },
    itemTitle: {
        font: '500 20px Poppins',
        color: Color.offBlack,
        paddingBottom: 5,
    },
});
