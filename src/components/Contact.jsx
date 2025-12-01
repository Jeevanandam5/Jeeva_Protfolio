import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    // initialize EmailJS once
    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        setSending(true);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,

        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then((res) => {
                console.log("EmailJS success", res.status, res.text);
                alert("Message sent successfully! ");
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((err) => {

                console.error("EmailJS error (full):", err);

                const status = err?.status || "unknown";
                const text = err?.text || JSON.stringify(err);
                alert(`Failed to send message. (${status}) ${text}`);
            })
            .finally(() => setSending(false));
    };

    return (
        <section className="w-full bg-gray-50 py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Get in Touch
                    <div className="mx-auto w-25 h-1 bg-orange-400 rounded-full mt-4" />
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-2xl p-7 shadow-lg hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-orange-400 text-xl" />
                                <div>
                                    <p className="text-sm text-gray-600">Location</p>
                                    <p className="font-medium">Salem, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-orange-400 text-xl" />
                                <div>
                                    <p className="text-sm text-gray-600">Phone</p>
                                    <a href="tel:+91978954557" className="font-medium hover:text-orange-400 transition">+91 9789545578</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-orange-400 text-xl" />
                                <div>
                                    <p className="text-sm text-gray-600">Email</p>
                                    <a href="mailto:jeevanandam2708@gmail.com" className="font-medium hover:text-orange-400 transition">jeevanandam2708@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <a href="https://github.com/Jeevanandam5" target="_blank" rel="noreferrer" className="bg-black/10 p-3 rounded-lg hover:bg-black/20 transition">
                                <FaGithub className=" text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/jeevanandam-net/" target="_blank" rel="noreferrer" className="bg-black/10 p-3 rounded-lg hover:bg-black/20 transition">
                                <FaLinkedin className=" text-xl" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white hover:shadow-2xl rounded-2xl p-7 shadow-lg">
                        <h3 className="text-xl font-semibold mb-5 text-gray-800">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="email" placeholder="Your Email" className="w-full border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <textarea placeholder="Your Message" rows="5" className="w-full border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" value={message} onChange={(e) => setMessage(e.target.value)} required />
                            <button type="submit" disabled={sending} className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-300 transition">
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
