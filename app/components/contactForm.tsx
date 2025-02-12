"use client";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(null);

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.ok) {
                setSuccess(true);
                setFormData({ fullname: "", email: "", subject: "", message: "" });
            } else {
                setError("Error sending email: " + result.error);
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-rows gap-8 justify-items-center mb-12">
            <form
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                className="grid grid-cols-1 gap-8 w-full"
            >
                <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col gap-6">
                        <FormControl fullWidth>
                            <OutlinedInput
                                className="border border-gray-500"
                                placeholder="Full Name"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <OutlinedInput
                                className="border border-gray-500"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <OutlinedInput
                                className="border border-gray-500"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
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
                                required
                            />
                        </FormControl>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full !border-2 !border-solid !border-white !text-white"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "SEND MESSAGE"}
                </Button>

                {success && <p className="text-green-500">Message sent successfully!</p>}
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
}
