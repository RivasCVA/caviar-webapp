import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import icons from 'assets/icons';

type Props = {
    icon: keyof typeof icons;
};

const Icon = (props: Props): JSX.Element => {
    const { icon } = props;
    return (
        <div className={css(styles.container)}>
            <img className={css(styles.image)} src={icons[icon]} alt="" />
        </div>
    );
};

export default Icon;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.black,
        width: 50,
        height: 50,
        borderWidth: 0,
        borderRadius: 8,
    },
    image: {
        width: '80%',
        height: '80%',
    },
});
