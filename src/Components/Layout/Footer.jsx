import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, label: 'Facebook', href: '#' },
        { icon: Twitter, label: 'Twitter', href: '#' },
        { icon: Instagram, label: 'Instagram', href: '#' },
        { icon: Youtube, label: 'Youtube', href: '#' }
    ];

    const legalLinks = [
        { text: 'Privacy Policy', path: '/privacyPolicy' },
        { text: 'Terms of Service', path: '/termsOfService' }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Brand and Description Section */}
                    <div className="space-y-6">
                        {/* Logo and Brand Name */}
                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                            <img
                                src="/logo.png"
                                alt="Charius Logo"
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                            <span className="text-xl sm:text-2xl font-bold text-white">
                                Charius
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-center lg:text-left text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                            Empowering communities through sustainable charitable initiatives.
                            Together, we can make a lasting difference.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-5">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="text-gray-400 hover:text-orange-400 transition-colors p-2"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Donate Section */}
                    <div className="flex justify-center lg:justify-end items-start">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 
                            text-white rounded-xl transition-all duration-300 flex items-center 
                            justify-center group shadow-lg hover:shadow-xl text-sm sm:text-base">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/50">
                <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        {/* Copyright */}
                        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} Charius. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center space-x-4 sm:space-x-6 text-gray-500">
                            {legalLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    to={link.path}
                                    className="hover:text-orange-400 transition-colors text-xs sm:text-sm"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;