import React, { useEffect, useState, useRef } from "react";
import bg from "../assets/Hero_image.jpg";

const phrases = [
    "MERN Stack Developer.",
    "Frontend Developer.",
    "React.js Developer."
];

const HeroSection = () => {
    // Typewriter state
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    const typingSpeed = 100;
    const deletingSpeed = 80;
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 500;
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        let timer;

        const handleType = () => {
            if (!mounted.current) return;

            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting) {
                // Typing logic
                if (text.length < currentPhrase.length) {
                    setText(currentPhrase.slice(0, text.length + 1));
                    timer = setTimeout(handleType, typingSpeed);
                } else {
                    // Finished typing, wait 2 seconds then start deleting
                    timer = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseAfterTyping);
                }
            } else {
                // Deleting logic
                if (text.length > 0) {
                    setText(currentPhrase.slice(0, text.length - 1));
                    timer = setTimeout(handleType, deletingSpeed);
                } else {
                    // Finished deleting, move to next phrase
                    setIsDeleting(false);
                    setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                    timer = setTimeout(handleType, pauseAfterDeleting);
                }
            }
        };

        timer = setTimeout(handleType, 200);

        const blinkInterval = setInterval(() => {
            if (mounted.current) {
                setBlink((b) => !b);
            }
        }, 500);

        return () => {
            mounted.current = false;
            clearTimeout(timer);
            clearInterval(blinkInterval);
        };
    }, [phraseIndex, isDeleting, text]); // Added text to dependencies

    return (
        <section className="w-full bg-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                {/*  Content */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="max-w-lg w-full space-y-6 md:space-y-8">
                        {/* Name */}
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                                <span className="text-orange-400">I'm </span>
                                <span className="sm:inline">Jeevanandam A</span>
                            </h1>
                        </div>

                        {/* Typewriter */}
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                            <span className=" whitespace-nowrap">I'm a</span>
                            <div className="flex items-center justify-center md:justify-start min-w-[200px] sm:min-w-[300px] h-8 sm:h-10">
                                <span className="inline-block text-center md:text-left">
                                    <span className="text-orange-400 font-bold whitespace-nowrap">{text}</span>
                                    <span
                                        aria-hidden="true"
                                        className={`ml-1 inline-block align-middle w-1 h-6 sm:h-7 ${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
                                        <span className=" bg-gray-900 w-0.5 h-full rounded-sm"></span>
                                    </span>
                                </span>
                            </div>
                        </div>

                        {/* Short intro */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-600 font-semibold sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                I'm a MERN Stack Developer specializing in React.js and Tailwind CSS. As a fresher, I build responsive, user-friendly interfaces and full-stack applications with clean code and real-world integrations. I'm eager to contribute to product teams and grow as a developer.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-4">
                            <a
                                href="https://drive.google.com/file/d/1QKENzSZlrXUPdfKLobUwL65Ra0mHY735/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-5 sm:py-3 bg-orange-400 text-white rounded-lg shadow-md  transform transition-all duration-200 font-medium text-sm sm:text-base">
                                Download Resume
                            </a>

                            {/* <a
                                href=""
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-4 sm:py-3 border border-gray-200 hover:border-gray-300 rounded-lg text-gray-800 bg-white shadow-sm transition-all duration-200 font-medium text-sm sm:text-base hover:shadow-md">
                                View Projects
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Image / card */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-full overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src={bg}
                            alt="Jeevanandam "
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;