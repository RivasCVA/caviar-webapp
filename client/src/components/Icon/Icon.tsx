import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import icons from 'assets/icons';

export type IconType = keyof typeof icons;

type Props = {
    style?: React.CSSProperties;
    icon: IconType;
    backgroundColor?: keyof typeof Color;
};

const Icon = (props: Props): JSX.Element => {
    const { style, icon, backgroundColor } = props;
    return (
        <div
            className={css([
                styles.container,
                backgroundColor &&
                    StyleSheet.create({
                        background: { backgroundColor: Color[backgroundColor] },
                    }).background,
                style && style,
            ])}
        >
            <img
                className={css([
                    styles.noDrag,
                    backgroundColor ? styles.fillPartial : styles.fillFull,
                ])}
                src={icons[icon]}
                alt=""
            />
        </div>
    );
};

export default Icon;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderWidth: 0,
        borderRadius: 8,
    },
    noDrag: {
        '-webkit-user-drag': 'none',
        '-khtml-user-drag': 'none',
        '-moz-user-drag': 'none',
        '-o-user-drag': 'none',
        'user-drag': 'none',
    },
    fillPartial: {
        width: '80%',
        height: '80%',
    },
    fillFull: {
        width: '100%',
        height: '100%',
    },
});
