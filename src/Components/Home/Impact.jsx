import React from 'react';
import { BookOpen, Droplet, Apple, Heart, Users, Sparkles, Trophy } from 'lucide-react';

const ImpactSection = () => {
    const impactAreas = [
        {
            title: "Kids Education",
            description: "Empowering young minds through quality education and learning resources",
            icon: BookOpen,
            bgColor: "bg-blue-50",
            iconColor: "text-blue-500",
            stats: "12,450",
            statsLabel: "Children Educated",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            title: "Pure Water",
            description: "Providing clean water access to communities in need worldwide",
            icon: Droplet,
            bgColor: "bg-cyan-50",
            iconColor: "text-cyan-500",
            stats: "8,750",
            statsLabel: "People Helped",
            gradient: "from-cyan-500 to-cyan-600"
        },
        {
            title: "Healthy Food",
            description: "Delivering nutritious meals to combat hunger and malnutrition",
            icon: Apple,
            bgColor: "bg-green-50",
            iconColor: "text-green-500",
            stats: "45,000",
            statsLabel: "Meals Served",
            gradient: "from-green-500 to-green-600"
        },
        {
            title: "Medical Care",
            description: "Supporting healthcare access and medical treatment for all",
            icon: Heart,
            bgColor: "bg-rose-50",
            iconColor: "text-rose-500",
            stats: "5,280",
            statsLabel: "Patients Treated",
            gradient: "from-rose-500 to-rose-600"
        }
    ];

    const achievements = [
        {
            icon: Users,
            label: "Trusted by 2M+ donors",
            color: "text-blue-500"
        },
        {
            icon: Sparkles,
            label: "15+ years of impact",
            color: "text-amber-500"
        },
        {
            icon: Trophy,
            label: "Award winning NGO",
            color: "text-emerald-500"
        }
    ];

    return (
        <section className="relative bg-gray-50 py-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">What We Do</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Your Donation Means Another Smile
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Join us in making a lasting impact through our key focus areas.
                        Every contribution helps create positive change in communities worldwide.
                    </p>

                    {/* Achievement Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="flex items-center px-4 py-2 bg-white rounded-full shadow-md"
                            >
                                <achievement.icon className={`w-4 h-4 mr-2 ${achievement.color}`} />
                                <span className="text-sm font-medium text-gray-700">{achievement.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactAreas.map((area, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Icon Header */}
                            <div className={`${area.bgColor} rounded-2xl p-4 mb-6 transform group-hover:scale-105 transition-transform duration-300`}>
                                <div className={`${area.iconColor} w-12 h-12 mx-auto`}>
                                    <area.icon size={48} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-4">
                                <h3 className="text-xl font-bold">{area.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {area.description}
                                </p>

                                {/* Stats */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className={`text-2xl font-bold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}>
                                        {area.stats}
                                    </div>
                                    <div className="text-sm text-gray-500">{area.statsLabel}</div>
                                </div>

                                {/* Action Button
                                <button className="w-full mt-4 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-700 font-medium flex items-center justify-center group">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA
                <div className="text-center mt-16">
                    <button className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-300/50">
                        See All Our Impact Areas
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default ImpactSection;