import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const CountdownBanner = () => {
    const endDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate.getTime() - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full px-4 mx-auto">
            <div className="bg-orange-500 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
                {/* Timer Header */}
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-white mb-3 sm:mb-4">
                    <Timer className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium">Lottery Ends In</span>
                </div>

                {/* Countdown Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-4">
                    {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hours' },
                        { value: timeLeft.minutes, label: 'Min' },
                        { value: timeLeft.seconds, label: 'Sec' }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-orange-400/50 backdrop-blur-sm rounded-md sm:rounded-lg p-1 sm:p-2 md:p-3 text-center"
                        >
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                                {String(item.value).padStart(2, '0')}
                            </div>
                            <div className="text-xs sm:text-sm text-white/90">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white text-orange-500 rounded-full text-sm sm:text-base font-semibold hover:bg-orange-50 transition-colors">
                        Enter Now
                    </button>
                    <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-orange-400/50 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-orange-400/70 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountdownBanner;