"use client"
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from "react";
import Button from "@mui/material/Button";
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

function sendMessage(formData){
    const resend = new Resend('re_Wp3mp7H4_9XE6CUX3JjMkF3uEAc9gjZmQ');
    resend.emails.send({
        from: formData.email,
        to: 'rishijs2002@gmail.com',
        subject: formData.subject,
        html: `<a>From ${formData.fullname} <br>${formData.content}<a>`,
    });
}

export default function Contact() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (

        <div className="grid grid-rows gap-8 justify-items-center mb-12">

        <form
            noValidate
            autoComplete="off"
            className="grid grid-cols-2 gap-8 w-full"
        >
            <div className="flex flex-col gap-6">
                <FormControl fullWidth>
                <OutlinedInput
                    className="border border-gray-500"
                    placeholder="Fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                />
                </FormControl>
                <FormControl fullWidth>
                <OutlinedInput
                    className="border border-gray-500"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                </FormControl>
                <FormControl fullWidth>
                <OutlinedInput
                    className="border border-gray-500"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth>
                <OutlinedInput
                    className="border border-gray-500 w-full"
                    placeholder="Message"
                    name="message"
                    multiline
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                />
                </FormControl>
            </div>

            <Button onClick={() => sendMessage(formData)}  className="w-full !border-2 !border-solid !border-white !text-white">
                SEND MESSAGE
            </Button>

        </form>

        </div>
    );
}