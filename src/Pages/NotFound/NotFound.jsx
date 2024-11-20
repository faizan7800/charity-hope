import React from 'react';

const UnderDevelopmentPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <div className="text-center space-y-8 max-w-sm sm:max-w-md md:max-w-lg">
                {/* Stylized Logo */}
                <div className="relative transition-transform hover:scale-105 duration-300">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-mono tracking-tighter">
                        <span className="absolute -left-2 sm:-left-3 top-0 text-black opacity-10">&lt;/&gt;</span>
                        <span className="absolute -left-1 sm:-left-1.5 top-0 text-black opacity-20">&lt;/&gt;</span>
                        <span className="relative text-black">&lt;/&gt;</span>
                    </div>
                </div>

                {/* Styled Message */}
                <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1 sm:space-y-2">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider text-black/80">
                            UNDER
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-black">
                            DEVELOPMENT
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                        <span className="w-8 sm:w-12 h-0.5 bg-black opacity-20"></span>
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-black animate-pulse"></span>
                        <span className="w-8 sm:w-12 h-0.5 bg-black opacity-20"></span>
                    </div>
                </div>

                {/* Coming Soon Text */}
                <p className="text-sm sm:text-base text-black/60 italic">
                    Coming soon
                </p>
            </div>
        </div>
    );
};

export default UnderDevelopmentPage;