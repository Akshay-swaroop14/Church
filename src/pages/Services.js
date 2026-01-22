import React from "react";
import { motion } from "framer-motion";

function Services() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    const services = [
        {
            title: "Sunday Worship",
            time: "Sundays • 10:00 AM",
            desc: "Our main weekly gathering with worship, prayer, and a message from God’s Word. Children’s ministry is available.",
            img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3"
        },
        {
            title: "Bible Study",
            time: "Wednesdays • 7:00 PM",
            desc: "A midweek opportunity to grow deeper in Scripture through teaching, discussion, and prayer.",
            img: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6"
        },
        {
            title: "Youth Ministry",
            time: "Fridays • 6:30 PM",
            desc: "A safe and engaging space for teens to grow in faith, build friendships, and discover purpose.",
            img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18"
        },
        {
            title: "Community Outreach",
            time: "Monthly",
            desc: "Serving our city through outreach projects, food drives, and support for those in need.",
            img: "https://images.unsplash.com/photo-1593113598332-cd288d649433"
        }
    ];

    return (
        <div className="flex flex-col">

            {/* PAGE HEADER */}
            <section className="relative h-[55vh] flex items-center justify-center bg-primary overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1445633814773-e687a5de6baa"
                    alt="Church service"
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
                        Our Services
                    </h1>
                    <p className="text-lg md:text-2xl text-primary font-medium">
                        Come worship, grow, and serve with us
                    </p>
                </motion.div>
            </section>

            {/* SERVICES LIST */}
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
                            Weekly & Community Gatherings
                        </h2>
                        <p className="text-lg text-secondary max-w-2xl mx-auto">
                            No matter where you are in your faith journey, there’s a place for you.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-56 object-cover"
                                />

                                <div className="p-8">
                                    <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-accent/10 text-accent">
                                        {service.time}
                                    </span>

                                    <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-secondary leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-24">
                <div className="max-w-5xl mx-auto px-6 text-center text-white">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            We’d Love to See You
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Whether you’re visiting for the first time or looking for a church
                            to call home, you are always welcome at Grace Glory Ministries.
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

export default Services;
