import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Icon, { IconType } from 'components/Icon';

type Props = {
    icon: IconType;
    href: string;
};

const CommunityItem = (props: Props): JSX.Element => {
    const { icon, href } = props;
    return (
        <a className={css(styles.container)} href={href} target="blank">
            <Icon style={styles.icon} icon={icon} />
        </a>
    );
};

export { CommunityItem };

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 40,
        margin: '15px 10px',
        transition: 'transform 450ms',
        ':hover': {
            transform: 'scale(1.20)',
        },
    },
    icon: {
        width: '100%',
    },
});
