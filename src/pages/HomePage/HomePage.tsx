import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import Icon from 'components/Icon';
import Tokenomics, { TokenomicsItem } from './components/Tokenomics';

const HomePage = (): JSX.Element => {
    return (
        <div className={css(styles.container)}>
            {/** Background */}
            <div className={css(styles.background)}>
                <div className={css(styles.upperBackground)} />
            </div>

            {/** Logo */}
            <Icon style={styles.logo} icon="logo" />

            {/** Title */}
            <h1 className={css(styles.title)}>Caviar</h1>

            {/** Mission Statement */}
            <p className={css(styles.missionStatement)}>Mission statement</p>

            {/** Tokenomics Section */}
            <Tokenomics title="Tokenomics">
                <TokenomicsItem icon="supply" title="Supply">
                    100 trillion Caviar tokens
                </TokenomicsItem>
                <TokenomicsItem icon="taxes" title="Taxes">
                    10% tax on all transactions
                </TokenomicsItem>
                <TokenomicsItem icon="burn" title="Burn">
                    3% burned on each transaction
                </TokenomicsItem>
                <TokenomicsItem icon="redistribution" title="Redistribution">
                    5% redistribution to shareholders
                </TokenomicsItem>
                <TokenomicsItem icon="cleanup" title="Cleanup">
                    2% donated towards ocean cleanup
                </TokenomicsItem>
            </Tokenomics>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
    },
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: '100%',
        zIndex: -1,
        background: Color.oceanWhite,
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
    },
    upperBackground: {
        width: '100%',
        height: 500,
        background: `
            linear-gradient(
                180deg,
                ${Color.oceanDark} 10%,
                ${Color.oceanBlue} 40%,
                ${Color.oceanWhite} 90%
            )
        `,
        zIndex: -1,
    },
    title: {
        marginTop: 40,
        marginBottom: 20,
        font: '85px Roboto',
        color: Color.caviar,
    },
    missionStatement: {
        marginBottom: 35,
        font: '300 22px Poppins',
        color: Color.offWhite,
    },
    logo: {
        position: 'absolute',
        left: 10,
        top: 10,
        width: 50,
        height: 50,
        '@media (max-width: 600px)': {
            left: 8,
            top: 8,
            width: 40,
            height: 40,
        },
    },
});

export default HomePage;
