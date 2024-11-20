import React from 'react';
import { TrendingUp, Users, Heart, Calendar, ArrowUpRight, Award, Globe, HandHeart } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        {
            value: "326",
            label: "Total Campaigns",
            sublabel: "Across 45 Countries",
            icon: Globe,
            trend: "+12% this month",
            color: "from-blue-500 to-blue-600"
        },
        {
            value: "$25M",
            label: "Total Fund",
            sublabel: "Raised & Distributed",
            icon: TrendingUp,
            trend: "+8% this month",
            color: "from-green-500 to-green-600"
        },
        {
            value: "125K",
            label: "Happy Volunteers",
            sublabel: "Worldwide Network",
            icon: Users,
            trend: "+15% this month",
            color: "from-purple-500 to-purple-600"
        },
        {
            value: "15+",
            label: "Years of Impact",
            sublabel: "Since 2009",
            icon: Calendar,
            trend: "Growing Strong",
            color: "from-orange-500 to-orange-600"
        }
    ];

    const highlights = [
        {
            icon: Award,
            text: "Most Trusted NGO 2023"
        },
        {
            icon: HandHeart,
            text: "100% Funds Reach Beneficiaries"
        },
        {
            icon: Heart,
            text: "Transparent Operations"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/90 to-orange-500/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Top Highlights */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            <highlight.icon className="w-5 h-5 text-white mr-2" />
                            <span className="text-white font-medium">{highlight.text}</span>
                        </div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Main Stats Card */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex items-center text-emerald-300 text-sm">
                                        <span>{stat.trend}</span>
                                        <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                                        {stat.value}
                                    </h3>
                                    <div className="text-white">
                                        <div className="font-semibold">{stat.label}</div>
                                        <div className="text-sm opacity-80">{stat.sublabel}</div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Content
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-white">
                            <span className="block text-sm font-medium opacity-80">Want to make a difference?</span>
                            <span className="text-lg font-semibold">Join our global community of change-makers</span>
                        </div>
                        <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-colors flex items-center group">
                            Become a Volunteer
                            <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div> */}

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/20 rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/20 rounded-full filter blur-3xl" />
            </div>
        </section>
    );
};

export default StatsSection;