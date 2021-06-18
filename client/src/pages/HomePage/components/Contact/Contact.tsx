import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from 'components/Button';
import Color from 'util/Color';
import { Title, TextStyle } from 'components/Typography';
import { Strut } from 'components/Layout';

type Props = {
    title: string;
};

const Contact = (props: Props): JSX.Element => {
    const { title } = props;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const CAVIAR_EMAIL = 'caviar@gmail.com';

    const handleSubmit = () => {
        if (email.length === 0 || name.length === 0 || message.length === 0) {
            setError('All fields are required');
            return;
        }

        const emailRegex = /^[^@\s]+@[^@\s.]+\.[^@.\s]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email');
            return;
        }

        if (name.length <= 2) {
            setError('Invalid name');
            return;
        }

        if (message.length <= 2) {
            setError('Please provide a detailed message');
            return;
        }

        window.open(
            `mailto:${CAVIAR_EMAIL}?subject=Caviar Contact - ${name}&body=${message}`,
            '_self'
        );
    };

    const handleFocus = () => {
        setError('');
    };

    return (
        <div className={css(styles.container)}>
            <Title>{title}</Title>
            <Strut size={15} />
            <input
                className={css(TextStyle, styles.input)}
                value={email}
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                onFocus={handleFocus}
            />
            <input
                className={css(TextStyle, styles.input)}
                value={name}
                type="text"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                onFocus={handleFocus}
            />
            <textarea
                className={css(TextStyle, styles.input, styles.textarea)}
                value={message}
                placeholder="Message"
                onChange={(event) => setMessage(event.target.value)}
                onFocus={handleFocus}
            />
            <p className={css(TextStyle, styles.error)}>{error}</p>
            <Button title="Submit" onClick={handleSubmit} />
        </div>
    );
};

export default Contact;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: 250,
        height: 40,
        paddingLeft: 10,
        border: 'none',
        borderRadius: 8,
        margin: '10px 0px',
    },
    textarea: {
        height: 80,
        paddingTop: 10,
    },
    error: {
        fontWeight: 400,
        color: Color.red,
        height: 35,
    },
});
