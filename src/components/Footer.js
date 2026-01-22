import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-surface text-text mt-auto border-t border-border">

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid gap-14
        sm:grid-cols-2 lg:grid-cols-4">

                {/* BRAND */}
                <div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                        Grace Glory Ministries
                    </h3>
                    <p className="text-secondary leading-relaxed max-w-sm">
                        A Christ-centered community dedicated to worship, spiritual growth,
                        and sharing God’s love with all.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="font-heading text-lg font-semibold text-primary mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/about" },
                            { name: "Services", path: "/services" },
                            { name: "Events", path: "/events" },
                            { name: "Contact", path: "/contact" }
                        ].map(link => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="text-secondary hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="font-heading text-lg font-semibold text-primary mb-6">
                        Contact
                    </h4>
                    <ul className="space-y-4 text-secondary">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-primary" />
                            <span>Ambedkar Nagar Inkollu </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-primary" />
                            <span>99517517411</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-primary" />
                            <span>info@graceglory.example</span>
                        </li>
                    </ul>
                </div>

                {/* SOCIAL + CTA */}
                <div>
                    <h4 className="font-heading text-lg font-semibold text-primary mb-6">
                        Connect With Us
                    </h4>

                    <div className="flex gap-4 mb-8">
                        {[
                            { icon: <FaFacebookF />, url: "https://facebook.com" },
                            { icon: <FaInstagram />, url: "https://instagram.com" },
                            { icon: <FaYoutube />, url: "https://youtube.com" },
                            { icon: <FaTwitter />, url: "https://twitter.com" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 flex items-center justify-center
                rounded-full bg-white border border-border text-secondary hover:bg-primary hover:text-white hover:border-primary
                transition-all text-lg"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link to="/services">
                        <button className="w-full px-6 py-3 bg-primary text-white
              rounded-xl font-semibold shadow-lg hover:scale-[1.03]
              transition-transform">
                            Join a Service
                        </button>
                    </Link>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-secondary">
                    © {new Date().getFullYear()} Grace Glory Ministries. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
