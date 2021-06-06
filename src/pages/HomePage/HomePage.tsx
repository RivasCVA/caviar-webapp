import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import Tokenomics, { TokenomicsItem } from './components/Tokenomics';

const HomePage = (): JSX.Element => {
    return (
        <div className={css(styles.container)}>
            {/** Title */}
            <h1>Caviar</h1>
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: Color.oceanWhite,
        color: Color.black,
    },
});

export default HomePage;
