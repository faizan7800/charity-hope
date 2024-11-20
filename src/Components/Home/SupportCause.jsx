import React from 'react';
import { Star, Clock, HeartHandshake, ArrowRight } from 'lucide-react';

const SomaliWomenSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-orange-50">
            {/* Main Content Container */}
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-6">
                        <HeartHandshake className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Supporting Somali Women</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Empowering{' '}
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                            Somali Women
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Join us in our mission to support and empower Somali women through education,
                        healthcare, and economic opportunities.
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Large Feature Image */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://picsum.photos/1920/1080"
                                alt="Somali women community gathering"
                                className="w-full h-[400px] object-cover transform hover:scale-105 transition-duration-500"
                            />
                        </div>
                        
                        {/* Floating Stats Card */}
                        <div className="absolute -right-6 -bottom-6 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                            <div className="flex items-center space-x-2 mb-2">
                                <Star className="w-5 h-5 text-orange-500" />
                                <span className="text-lg font-bold">2,500+</span>
                            </div>
                            <p className="text-gray-600 text-sm">Women supported through our programs</p>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        {/* Impact Areas */}
                        <div className="grid gap-6">
                            {/* Education Program */}
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-100 rounded-xl">
                                        <Star className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Educational Support</h3>
                                        <p className="text-gray-600">Providing access to quality education and skill development programs.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Healthcare Initiative */}
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-green-100 rounded-xl">
                                        <HeartHandshake className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Healthcare Access</h3>
                                        <p className="text-gray-600">Ensuring access to essential healthcare services and support.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Economic Empowerment */}
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-purple-100 rounded-xl">
                                        <Clock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Economic Empowerment</h3>
                                        <p className="text-gray-600">Creating opportunities for financial independence and growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-300/50 flex items-center justify-center group">
                            Support Our Cause
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Success Stories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={`https://picsum.photos/1920/1080`}
                                    alt={`Success story ${index}`}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Success Story {index}</h3>
                                <p className="text-gray-600 mb-4">
                                    Transforming lives through education and community support.
                                </p>
                                <button className="text-orange-500 font-medium flex items-center group">
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SomaliWomenSection;