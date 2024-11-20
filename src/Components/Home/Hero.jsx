import React from 'react';
import { Play, Users, Heart, DollarSign } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">

            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 max-w-2xl">
                        <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full">
                            <Heart className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Give them a chance</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Believe in The Better Future of Others.
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Join us in making a difference. Every donation, no matter how small,
                            contributes to creating lasting positive change in someone's life.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-300/50">
                                Donate Now
                            </button>

                        </div>


                        {/* Campaign Preview Card */}
                        <div className="bg-white shadow-xl rounded-2xl p-6 ">
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Image and Play Button */}
                                <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                    <img
                                        src="/picOne.jpeg"
                                        alt="Campaign preview"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    {/* Status and Time */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full whitespace-nowrap">
                                            Live Campaign
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            Starting in 2 days
                                        </span>
                                    </div>

                                    {/* Title and Description */}
                                    <h3 className="font-bold text-xl">Join Our Upcoming Campaign</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Make an impact by joining our clothing donation drive.
                                        Every piece of clothing brings warmth to those in need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Main circular images */}
                        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl">
                            <img
                                src="/picOne.jpeg"
                                alt="Happy children"
                                className="object-cover w-full h-full transform hover:scale-110 transition-all duration-500"
                            />
                        </div>

                        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl">
                            <img
                                src="/picTwo.png"
                                alt="Child portrait"
                                className="object-cover w-full h-full transform hover:scale-110 transition-all duration-500"
                            />
                        </div>


                        {/* Floating stats cards */}
                        <div className="absolute left-20 top-20 bg-white rounded-2xl p-6 shadow-xl backdrop-blur-sm bg-white/90 transform hover:scale-105 transition-all">
                            <div className="text-center space-y-2">
                                <h3 className="text-4xl font-bold text-orange-500">120+</h3>
                                <p className="text-gray-600">Happy Volunteers</p>
                                <div className="flex justify-center -space-x-3 mt-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg flex justify-center items-center">
                                           { i%2 == 0 ? <img
                                                src={`https://picsum.photos/1920/1080`}
                                                alt={`Volunteer ${i}`}
                                                className="w-full h-full object-cover"
                                            /> : 
                                            < div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg flex justify-center items-center bg-white font-bold"><span className='text-orange-500'>A</span>
                                            <span className='text-orange-500'>S</span></div>
                                        }
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-medium">
                                        +8
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional floating elements */}
                        <div className="absolute right-20 bottom-20 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-all">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Total Raised</p>
                                    <p className="text-lg font-bold">$284,500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white shadow-xl rounded-2xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Become a volunteer</h3>
                                <p className="text-gray-600">Join our community of change-makers</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-2xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <Heart className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Quick fundraising</h3>
                                <p className="text-gray-600">Start your campaign in minutes</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-2xl p-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-green-100 rounded-xl">
                                <DollarSign className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Start donating</h3>
                                <p className="text-gray-600">Make a difference today</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;