import express from 'express';
import Joi from 'joi';

const router = express.Router();

router.post('/signup', (req, res) => {
    const { name, email } = req.body;
    const { error } = signupSchema.validate({ name, email });

    if (error) {
        res.status(400).send(error.message);
        return;
    }

    res.send(`Received:<br/>name: ${name}<br/>email: ${email}`);
});

const signupSchema = Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.string().min(5).max(255).email().required(),
});

export default router;
