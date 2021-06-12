import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
    size: number;
    style?: React.CSSProperties;
};

const Strut = (props: Props): JSX.Element => {
    const { size, style } = props;
    return <div aria-hidden="true" className={css(strutStyle(size), style)} />;
};

export default Strut;

const strutStyle = (size: number) => {
    return StyleSheet.create({
        default: {
            width: size,
            MsFlexBasis: size,
            MsFlexPreferredSize: size,
            WebkitFlexBasis: size,
            flexBasis: size,
            flexShrink: 0,
        },
    }).default;
};
