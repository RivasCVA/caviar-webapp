import express from 'express';
import mongoose from 'mongoose';
import Joi from 'joi';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email } = req.body;
    const { error } = contactValidation.validate({ name, email });

    if (error) {
        res.status(400).send(error.message);
        return;
    }

    const contact = new Contact({ name, email });

    try {
        await contact.save();
        res.send(contact);
    } catch (err) {
        res.status(500).send(err);
    }
});

const contactValidation = Joi.object({
    name: Joi.string().alphanum().max(255).required(),
    email: Joi.string().min(5).max(255).email().required(),
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Contact = mongoose.model('Contact', contactSchema);

export default router;
