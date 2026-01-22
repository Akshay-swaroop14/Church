import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-surface overflow-hidden">

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">

                        {/* Small label */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-4 text-accent uppercase tracking-widest text-sm font-bold"
                        >
                            Grace • Glory • Faith
                        </motion.span>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 text-primary"
                        >
                            Welcome to <br />
                            <span className="text-secondary italic">Grace Glory</span> Ministries
                        </motion.h1>

                        {/* Pastor Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                        >
                            {/* Pastor Image */}
                            <img
                                src={require("../assets/pastor.jpeg")} // replace later
                                alt="Pastor Y. Yesubabu"
                                className="w-16 h-16 rounded-full object-cover border-2 border-accent shadow-soft"
                            />

                            {/* Pastor Name */}
                            <p className="font-body text-light-text text-base md:text-lg">
                                Rev Father:&nbsp;
                                <span className="text-accent font-semibold">
                                    Yesubabu Yaram
                                </span>
                            </p>
                        </motion.div>


                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1.2 }}
                            className="text-lg md:text-2xl text-light-text max-w-xl mx-auto lg:mx-0 mb-10 font-light"
                        >
                            A Christ-centered community where faith is nurtured,
                            lives are transformed, and hope is restored.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link to="/services">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Join a Service
                                </motion.button>
                            </Link>

                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition"
                                >
                                    Learn More
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1.1, ease: "easeOut" }}
                        className="hidden lg:block bg-gradient-glass backdrop-blur-md rounded-2xl p-10 shadow-soft border border-border"
                    >

                        {/* Decorative Dove Image */}
                        <img
                            src={require("../assets/dove-1.webp")} // 👈 replace with your image path
                            alt="Peace Dove"
                            className="absolute -top-2 -right-0 w-24 opacity-30 pointer-events-none"
                        />

                        <h3 className="font-heading text-2xl font-semibold mb-6 text-primary">
                            Service Times
                        </h3>

                        <p className="font-body text-primary mb-3 font-medium">
                            Sunday Worship — <span className="text-accent">11:00 AM</span>
                        </p>

                        <p className="font-body text-primary mb-3 font-medium">
                            Bible Study — <span className="text-accent">Wednesday 8:00 PM</span>
                        </p>

                        <p className="font-body text-primary mb-3 font-medium">
                            Prayer Meeting — <span className="text-accent">Saturday 8:00 PM</span>
                        </p>

                        <p className="font-body text-primary mb-3 font-medium">
                            Gospel Meeting — <span className="text-accent">Every Month 20th</span>
                        </p>

                        <p className="font-body text-primary font-medium">
                            First Friday Half-Night Prayer —{" "}
                            <span className="text-accent">8:00 PM</span>
                        </p>

                        {/* Highlighted Monthly & Youth Services */}
                        <div className="pt-4 border-t border-border space-y-3">

                            <p className="font-body text-primary font-semibold">
                                Every Month First Monday —
                                <span className="text-accent"> Chain Prayer</span>
                            </p>
                            <p className="font-body text-light-text text-sm">
                                ⏰ 6:00 AM – 3:00 PM
                            </p>

                            <p className="font-body text-primary font-semibold mt-3">
                                Every Sunday Evening —
                                <span className="text-accent"> Youth Meeting</span>
                            </p>
                            <p className="font-body text-light-text text-sm">
                                ⏰ 4:00 PM
                            </p>

                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-light-text text-sm font-semibold"
            >
                Scroll ↓
            </motion.div>
        </section>
    );
}

export default Hero;
