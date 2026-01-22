import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [open, setOpen] = useState(false);

    const location = useLocation();

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Events", path: "/events" },
        { title: "Contact", path: "/contact" },
    ];



    return (
        <>
            {/* NAVBAR */}
            <nav
                className="fixed top-0 left-0 w-full z-[1000] bg-gradient-to-r from-white to-gray-400 shadow-md py-3 transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-4">
                        <img
                            src={require("../assets/Img.png")}
                            alt="Grace Glory Ministries"
                            className="h-14 w-auto"
                        />
                        <span className="hidden sm:block font-heading text-lg md:text-xl font-bold text-primary">
                            Grace Glory Ministries
                        </span>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-10">
                        {navLinks.map((link) => {
                            const active = location.pathname === link.path;
                            return (
                                <li key={link.path} className="relative">
                                    <Link
                                        to={link.path}
                                        className={`text-lg transition-colors
                                                ? "text-primary font-bold"
                                                : "text-secondary hover:text-primary transition-colors duration-300"
                                            }`}
                                    >
                                        {link.title}
                                    </Link>

                                    {active && (
                                        <motion.span
                                            layoutId="navActive"
                                            className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent rounded-full"
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-primary text-3xl"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[2000]"
                    >
                        {/* CLOSE BUTTON */}
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-primary text-3xl"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* MENU CONTENT */}
                        <ul className="h-full flex flex-col justify-center items-center gap-10">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.path}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setOpen(false)}
                                        className={`text-2xl font-medium tracking-wide
                    ${location.pathname === link.path
                                                ? "text-accent"
                                                : "text-primary"
                                            }`}
                                    >
                                        {link.title}
                                    </Link>
                                </motion.li>
                            ))}

                            {/* DIVIDER */}
                            <div className="w-24 h-px bg-gray-200 my-6" />

                            {/* CTA */}
                            <Link to="/services" onClick={() => setOpen(false)}>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-primary text-white
                  rounded-xl font-semibold text-lg shadow-xl"
                                >
                                    Join a Service
                                </motion.button>
                            </Link>
                        </ul>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
