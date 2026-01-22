import React from "react";
import { motion } from "framer-motion";

function About() {
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
            <section className="relative h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1548625361-ec880bb2be73"
                    alt="Church community"
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
                        About Us
                    </h1>
                    <p className="text-lg md:text-2xl text-primary font-medium">
                        Knowing God • Making Him Known
                    </p>
                </motion.div>
            </section>

            {/* OUR STORY */}
            <section className="bg-white py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                            Our Story
                        </h2>

                        <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
                            Grace Glory Ministries began with a small group of believers
                            committed to prayer, worship, and serving our community. What
                            started as a simple gathering has grown into a vibrant family of
                            faith dedicated to discipleship, outreach, and sharing the Gospel.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2">
                    {[
                        {
                            title: "Our Mission",
                            text: "To glorify God by making disciples, loving people, and transforming lives through the power of the Gospel."
                        },
                        {
                            title: "Our Vision",
                            text: "To be a Christ-centered church impacting our city and beyond with faith, hope, and love."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-10 shadow-md"
                        >
                            <h3 className="font-heading text-3xl font-semibold text-primary mb-4">
                                {item.title}
                            </h3>
                            <p className="text-secondary text-lg leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* LEADERSHIP TEAM */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                            Our Leadership
                        </h2>
                        <p className="text-lg text-secondary max-w-2xl mx-auto">
                            Meet the people God has called to lead and serve our church family.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "John Doe",
                                role: "Senior Pastor",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                                desc: "Pastor John has faithfully led Grace Glory Ministries for over a decade with a heart for teaching and discipleship."
                            },
                            {
                                name: "Jane Smith",
                                role: "Worship Director",
                                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                                desc: "Jane leads worship with passion, helping people encounter God through music and praise."
                            },
                            {
                                name: "Mike Johnson",
                                role: "Youth Pastor",
                                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                                desc: "Mike is passionate about mentoring the next generation and helping young people grow in faith."
                            }
                        ].map((leader, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-background rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="w-36 h-36 mx-auto rounded-full object-cover mb-6 border-4 border-secondary"
                                />
                                <h3 className="font-heading text-2xl font-semibold text-primary mb-1">
                                    {leader.name}
                                </h3>
                                <p className="text-accent font-semibold mb-4">
                                    {leader.role}
                                </p>
                                <p className="text-secondary">
                                    {leader.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
