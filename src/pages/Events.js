import React from "react";
import { motion } from "framer-motion";

function Events() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    const events = [
        {
            title: "Worship Night",
            month: "AUG",
            day: "15",
            time: "7:00 PM – 9:00 PM",
            location: "Main Sanctuary",
            desc: "Join us for an extended evening of worship and prayer. Come with expectation as we seek God together."
        },
        {
            title: "Community Picnic",
            month: "AUG",
            day: "22",
            time: "12:00 PM – 3:00 PM",
            location: "Central Park",
            desc: "A fun-filled afternoon for the whole family with food, games, and fellowship. Everyone is welcome."
        },
        {
            title: "Back to School Bash",
            month: "SEP",
            day: "05",
            time: "6:00 PM – 8:30 PM",
            location: "Youth Center",
            desc: "Celebrating a new school year with our youth. Games, pizza, music, and giveaways!"
        }
    ];

    return (
        <div className="flex flex-col">

            {/* PAGE HEADER */}
            <section className="relative h-[55vh] flex items-center justify-center bg-primary overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                    alt="Church events"
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
                        Upcoming Events
                    </h1>
                    <p className="text-lg md:text-2xl text-primary font-medium">
                        Stay connected. Join what God is doing.
                    </p>
                </motion.div>
            </section>

            {/* EVENTS LIST */}
            <section className="bg-surface py-24">
                <div className="max-w-5xl mx-auto px-6">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                            What’s Coming Up
                        </h2>
                        <p className="text-lg text-secondary max-w-2xl mx-auto">
                            From worship gatherings to community events, there’s always something happening.
                        </p>
                    </motion.div>

                    <div className="space-y-10">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row overflow-hidden"
                            >
                                {/* DATE */}
                                <div className="bg-primary text-white flex flex-row sm:flex-col items-center justify-center px-6 py-6 sm:py-10 min-w-[110px]">
                                    <span className="text-sm tracking-widest">
                                        {event.month}
                                    </span>
                                    <span className="text-4xl font-bold text-accent">
                                        {event.day}
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <div className="p-8 flex-1">
                                    <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                                        {event.title}
                                    </h3>

                                    <div className="text-sm text-secondary mb-4 flex flex-wrap gap-4">
                                        <span>{event.time}</span>
                                        <span className="opacity-40">|</span>
                                        <span>{event.location}</span>
                                    </div>

                                    <p className="text-secondary leading-relaxed">
                                        {event.desc}
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
                            Join Us at an Event
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                            Events are a great way to connect, grow in faith, and build meaningful relationships.
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

export default Events;
