import React, { useEffect } from 'react';
import { X, Search } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl mx-4">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">Search CharityHope</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Search Input */}
                <div className="p-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for causes, programs, or articles..."
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            autoFocus
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    {/* Quick Links */}
                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                                Education Programs
                            </button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                                Volunteer Opportunities
                            </button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                                Upcoming Events
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Tips */}
                <div className="px-4 py-3 bg-gray-50 text-sm text-gray-500 rounded-b-2xl">
                    Press <kbd className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs">ESC</kbd> to close
                </div>
            </div>
        </div>
    );
};

export default SearchModal;