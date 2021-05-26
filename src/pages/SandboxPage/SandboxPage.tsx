/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from 'util/Color';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';

const SandboxPage = (): JSX.Element => {
    return (
        <div className={css(styles.container)}>
            <h1>Sandbox Environment</h1>
            <h3>Showcase our design system</h3>
            <div className={css(styles.componentSection)}>
                <h2>Button</h2>
                <div className={css(styles.strut)} />
                <Button title="Hello, world!" onClick={() => alert('Hello, world!')} />
                <div className={css(styles.strut)} />
                <p>
                    <code>
                        {
                            '<Button title="Hello, world!" onClick={() => alert(\'Hello, world!\')} />'
                        }
                    </code>
                </p>
            </div>
            <div className={css(styles.componentSection)}>
                <h2>Icon</h2>
                <div className={css(styles.strut)} />
                <Icon icon="logo" />
                <div className={css(styles.strut)} />
                <p>
                    <code>{'<Icon icon="logo" />'}</code>
                </p>
            </div>
            <div className={css(styles.componentSection)}>
                <h2>Link (Not Selected)</h2>
                <div className={css(styles.strut)} />
                <Link href="test">Test Link</Link>
                <div className={css(styles.strut)} />
                <p>
                    <code>{'<Link href="test">Test Link</Link>'}</code>
                </p>
            </div>
            <div className={css(styles.componentSection)}>
                <h2>Link (Selected)</h2>
                <div className={css(styles.strut)} />
                <Link href="test" selected>
                    Test Link
                </Link>
                <div className={css(styles.strut)} />
                <p>
                    <code>{'<Link href="test" selected>'}</code>
                </p>
                <p>Test Link</p>
                <p>
                    <code>{'</Link>'}</code>
                </p>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: Color.offWhite,
    },
    componentSection: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: 'fit-content',
        margin: '20px 0px',
    },
    strut: {
        margin: '10px 0px',
    },
});

export default SandboxPage;
