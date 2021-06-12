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
        <a className={css(styles.container)} href={href} type="link">
            <Icon style={styles.icon} icon={icon} />
        </a>
    );
};

export { CommunityItem };

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
