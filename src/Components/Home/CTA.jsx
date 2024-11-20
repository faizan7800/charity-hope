import React from 'react';
import { Heart } from 'lucide-react';

const SimpleDonationCTA = () => {
    return (
        <section className="bg-emerald-700 py-16 px-4 text-center relative">
            {/* Orange Heart Icon Circle */}
            <div className="inline-flex items-center justify-center bg-orange-500 rounded-full p-3 mb-4">
                <Heart className="w-5 h-5 text-white" />
            </div>

            {/* Help Text */}
            <p className="text-orange-400 text-sm font-medium mb-6">
                Help us raise them up.
            </p>

            {/* Main Headings */}
            <div className="max-w-2xl mx-auto space-y-2 mb-8">
                <h1 className="text-white text-4xl font-bold">
                    Your donation means a lot to them.
                </h1>
                <h2 className="text-white text-4xl font-bold">
                    Donate what you can.
                </h2>
            </div>

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Start Donating Them
            </button>
        </section>
    );
};

export default SimpleDonationCTA;