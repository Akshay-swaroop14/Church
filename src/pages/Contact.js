import React from "react";
import { motion } from "framer-motion";

function Contact() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    return (
        <div className="flex flex-col">

            {/* PAGE HEADER */}
            <section className="relative h-[55vh] flex items-center justify-center bg-primary overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                    alt="Contact church"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-6"
                >
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-primary">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-2xl text-primary font-medium">
                        We’re here for you — let’s connect
                    </p>
                </motion.div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2">

                    {/* INFO */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                            Get in Touch
                        </h2>

                        <p className="text-lg text-secondary leading-relaxed mb-10 max-w-xl">
                            Whether you have questions, need prayer, or want to get involved,
                            we would love to hear from you. Our team is here to walk with you.
                        </p>

                        <div className="space-y-8 text-secondary">
                            <div>
                                <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                                    Visit Us
                                </h3>
                                <p>123 Faith Avenue</p>
                                <p>Cityville, ST 12345</p>
                            </div>

                            <div>
                                <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                                    Call Us
                                </h3>
                                <p>(555) 123-4567</p>
                            </div>

                            <div>
                                <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                                    Email Us
                                </h3>
                                <p>info@graceglory.example</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* FORM */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-md p-10"
                    >
                        <form className="space-y-6">

                            <div>
                                <label className="block mb-2 font-semibold text-primary">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg border border-border
                  focus:outline-none focus:ring-2 focus:ring-accent/50"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-primary">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-lg border border-border
                  focus:outline-none focus:ring-2 focus:ring-accent/50"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-primary">
                                    Message
                                </label>
                                <textarea
                                    placeholder="How can we help you?"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-border
                  focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white
                rounded-xl font-semibold text-lg shadow-lg
                hover:scale-[1.02] transition-transform"
                            >
                                Send Message
                            </button>

                        </form>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
