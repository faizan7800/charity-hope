import React, { useState } from 'react';
import { Menu, X, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchModal from "../SearchModal/SearchModal";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navigationItems = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'About',
            to: '/about'
        },
        {
            name: 'Causes',
            to: '/causes'
        },
        {
            name: 'Get Involved',
            to: '/getInvolved'
        },
        {
            name: 'Contact',
            to: '/contact'
        }
    ];

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <div className="text-2xl font-bold text-orange-500">CharityHope</div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search className="w-5 h-5" />
                            </button>
                            <Link
                                to="donate"
                                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors flex items-center"
                            >
                                <Heart className="w-4 h-4 mr-2" />
                                Donate Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden p-2 text-gray-600 hover:text-orange-500 transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Search Modal */}
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Dark overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu content */}
                    <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl">
                        <div className="p-4 border-b">
                            <div className="flex items-center justify-between">
                                <Link to="/" className="text-xl font-bold text-orange-500">CharityHope</Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation Items */}
                        <div className="py-4">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="px-4">
                                    <Link
                                        to={item.to}
                                        className="block py-3 text-gray-600 hover:text-orange-500 font-medium transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
                            <Link
                                to="donate"
                                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center"
                                onClick={() => setIsOpen(false)}
                            >
                                <Heart className="w-4 h-4 mr-2" />
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Spacer for fixed header */}
            <div className="h-[72px]" />
        </>
    );
};

export default Navigation;