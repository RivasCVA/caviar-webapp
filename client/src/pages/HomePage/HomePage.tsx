import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import Icon from 'components/Icon';
import { Strut } from 'components/Layout';
import Tokenomics, { TokenomicsItem } from './components/Tokenomics';
import Roadmap, { RoadmapItem } from './components/Roadmap';
import Community, { CommunityItem } from './components/Community';
import Contact from './components/Contact';
import JoinNewsletter from './components/JoinNewsletter';

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
            <Strut size={40} />
            <h1 className={css(styles.caviarTitle)}>Caviar</h1>
            <Strut size={20} />

            {/** Mission Statement */}
            <p className={css(styles.missionStatement)}>Mission statement</p>
            <Strut size={35} />

            {/** Roadmap */}
            <Roadmap title="Roadmap">
                <RoadmapItem title="Q1">
                    Dx Presale
                    <br />
                    Contract launch to public
                    <br />
                    Weekly donations to ocean cleanup
                    <br />
                    Organic growth via all social media
                    <br />
                    Listing applications
                    <br />
                    Audit
                    <br />
                    Blockfolio listing
                    <br />
                    LiveCoinWatch Listing
                    <br />
                    BSCscan and Trust Wallet Logo
                </RoadmapItem>
                <RoadmapItem title="Q2">Coming Soon!</RoadmapItem>
                <RoadmapItem title="Q3">Coming Soon!</RoadmapItem>
                <RoadmapItem title="Q4" isLast>
                    Coming Soon!
                </RoadmapItem>
            </Roadmap>
            <Strut size={45} />

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
            <Strut size={45} />

            {/** Join Community */}
            <Community title="Join Our Community!">
                <CommunityItem icon="telegram" href="https://telegram.org/" />
                <CommunityItem icon="facebook" href="https://facebook.com/" />
                <CommunityItem icon="reddit" href="https://reddit.com/" />
                <CommunityItem icon="tiktok" href="https://tiktok.com/" />
                <CommunityItem icon="twitter" href="https://twitter.com/" />
                <CommunityItem icon="instagram" href="https://instagram.com/" />
            </Community>
            <Strut size={45} />

            {/* Contact Us */}
            <Contact title="Contact Us" />
            <Strut size={45} />

            {/* Join Newsletter */}
            <JoinNewsletter title="Join our Newsletter" />
            <Strut size={45} />
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
    caviarTitle: {
        font: '85px Roboto',
        color: Color.caviarGreen,
    },
    missionStatement: {
        font: '300 22px Poppins',
        color: Color.offWhite,
    },
    logo: {
        position: 'absolute',
        left: 10,
        top: 10,
        width: 45,
        height: 45,
        '@media (max-width: 600px)': {
            left: 8,
            top: 8,
            width: 35,
            height: 35,
        },
    },
});

export default HomePage;
