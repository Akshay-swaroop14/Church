import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Home() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    return (
        <div className="flex flex-col">

            {/* HERO */}
            <Hero />

            {/* WELCOME SECTION */}
            <section className="bg-white py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                            Welcome Home
                        </h2>

                        <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                            Grace Glory Ministries is a Christ-centered church where faith
                            grows, lives are transformed, and everyone is welcomed with love
                            and purpose.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE TIMES */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                            Join Us This Week
                        </h2>
                        <p className="text-lg text-secondary max-w-2xl mx-auto">
                            We would love to worship with you. Come as you are.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Sunday Worship",
                                time: "10:00 AM",
                                desc: "Worship & Word",
                            },
                            {
                                title: "Bible Study",
                                time: "Wednesday • 7:00 PM",
                                desc: "Growing deeper in Scripture",
                            },
                            {
                                title: "Youth Fellowship",
                                time: "Friday • 6:30 PM",
                                desc: "Ages 12–18",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white rounded-2xl p-10 shadow-sm border border-border
                hover:shadow-xl transition-all duration-500 text-center"
                            >
                                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-secondary font-semibold mb-2">
                                    {service.time}
                                </p>
                                <p className="text-secondary">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-primary py-24">
                <div className="max-w-5xl mx-auto px-6 text-center text-white">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            Be Part of the Family
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Whether you are new to faith or looking for a church to call home,
                            Grace Glory Ministries is a place where you belong.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link to="/about">
                                <button className="px-8 py-4 bg-accent text-white
                rounded-xl font-semibold text-lg shadow-lg hover:scale-[1.05]
                transition-transform">
                                    Learn More
                                </button>
                            </Link>

                            <Link to="/contact">
                                <button className="px-8 py-4 border-2 border-white text-white
                rounded-xl font-semibold text-lg hover:bg-white hover:text-primary
                transition-all">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

export default Home;
