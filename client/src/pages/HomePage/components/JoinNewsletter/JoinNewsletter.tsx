import React, { useState } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Title, TextStyle } from 'components/Typography';
import { Strut } from 'components/Layout';
import Button from 'components/Button';
import Color from 'util/Color';
import API from 'util/API';

type Props = {
    title: string;
};

const JoinNewsletter = (props: Props): JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);
    const { title } = props;

    const handleJoin = () => {
        if (email.length === 0 || name.length === 0) {
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

        setError('');
        API.post('contacts', { name, email })
            .then(() => {
                setError('Success');
                setDisabled(true);
            })
            .catch((err) => {
                const { response } = err;
                if (response && response.data) {
                    setError(response.data);
                }
            });
    };

    return (
        <div className={css(styles.container)}>
            <Title>{title}</Title>
            <Strut size={15} />
            <input
                className={css(TextStyle, styles.input)}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                disabled={disabled}
            />
            <input
                className={css(TextStyle, styles.input)}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                type="email"
                disabled={disabled}
            />
            <p className={css(TextStyle, styles.error, disabled && styles.success)}>{error}</p>
            <Button title="Join" onClick={() => handleJoin()} disabled={disabled} />
        </div>
    );
};

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
    error: {
        fontWeight: 400,
        color: Color.red,
        minHeight: 35,
        textAlign: 'center',
    },
    success: {
        color: Color.caviarGreen,
        fontWeight: 500,
    },
});

export default JoinNewsletter;
