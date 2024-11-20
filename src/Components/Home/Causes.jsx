import React from 'react';
import { Clock, Share2, ArrowRight, Users, Target, Sparkles, ChevronRight } from 'lucide-react';

const CausesSection = () => {
    const causes = [
        {
            id: 1,
            title: "Let's be Kind For Children in Need",
            description: "Support education and nutrition programs for underprivileged children, giving them a chance at a brighter future.",
            image: "/picOne.jpeg",
            raised: 65475.00,
            goal: 100000.00,
            daysLeft: 18,
            supporters: 1240,
            category: "Education",
            progressColor: "bg-orange-500",
            categoryColor: "text-orange-500",
            categoryBg: "bg-orange-50"
        },
        {
            id: 2,
            title: "Healthy Meals for Every Family",
            description: "Help us provide nutritious meals to families facing food insecurity, ensuring no one goes to bed hungry.",
            image: "/picTwo.png",
            raised: 71000.00,
            goal: 100000.00,
            daysLeft: 12,
            supporters: 890,
            category: "Food",
            progressColor: "bg-emerald-500",
            categoryColor: "text-emerald-500",
            categoryBg: "bg-emerald-50"
        },
        {
            id: 3,
            title: "Clean Water Access Initiative",
            description: "Support our mission to bring clean drinking water to communities struggling with water scarcity.",
            image: "/picTwo.png",
            raised: 70000.00,
            goal: 120000.00,
            daysLeft: 15,
            supporters: 956,
            category: "Water",
            progressColor: "bg-blue-500",
            categoryColor: "text-blue-500",
            categoryBg: "bg-blue-50"
        }
    ];

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    const calculateProgress = (raised, goal) => {
        return Math.round((raised / goal) * 100);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Featured Causes</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
                        Support Our Active Campaigns
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Choose a cause that resonates with your heart. Every contribution brings us closer to making a lasting difference in someone's life.
                    </p>
                </div>

                {/* Featured Cause */}
                <div className="mb-12">
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden ">
                        <div className="md:flex">
                            <div className="md:w-1/2 relative">
                                <img
                                    src={causes[0].image}
                                    alt={causes[0].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`px-4 py-2 rounded-full ${causes[0].categoryBg} ${causes[0].categoryColor} text-sm font-medium`}>
                                        {causes[0].category}
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium">
                                        <Clock className="w-4 h-4 inline mr-1" />
                                        {causes[0].daysLeft} days left
                                    </span>
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col">
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-4 hover:text-orange-500 transition-colors">
                                        {causes[0].title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {causes[0].description}
                                    </p>

                                    <div className="space-y-6">
                                        <div className="relative">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="font-medium">Progress</span>
                                                <span className="text-gray-500">{calculateProgress(causes[0].raised, causes[0].goal)}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${causes[0].progressColor} transition-all duration-500`}
                                                    style={{ width: `${calculateProgress(causes[0].raised, causes[0].goal)}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="text-2xl font-bold text-orange-500">
                                                    {formatAmount(causes[0].raised)}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    raised of {formatAmount(causes[0].goal)}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-gray-800">
                                                    {causes[0].supporters}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Supporters
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button className="flex-1 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center group">
                                        Donate Now
                                        <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Causes Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {causes.slice(1).map((cause) => (
                        <div
                            key={cause.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm"
                        >
                            <div className="relative">
                                <img
                                    src={cause.image}
                                    alt={cause.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`px-3 py-1 rounded-full ${cause.categoryBg} ${cause.categoryColor} text-sm font-medium`}>
                                        {cause.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium">
                                        <Clock className="w-4 h-4 inline mr-1" />
                                        {cause.daysLeft} days left
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                                    {cause.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {cause.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium">Progress</span>
                                            <span className="text-gray-500">{calculateProgress(cause.raised, cause.goal)}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${cause.progressColor} transition-all duration-500`}
                                                style={{ width: `${calculateProgress(cause.raised, cause.goal)}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-lg font-bold">{formatAmount(cause.raised)}</div>
                                            <div className="text-sm text-gray-500">raised of {formatAmount(cause.goal)}</div>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Users className="w-4 h-4 mr-1" />
                                            <span className="text-sm">{cause.supporters} Supporters</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <button className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center group">
                                        Support Now
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                                        <Share2 className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-colors group">
                        View All Active Campaigns
                        <Target className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CausesSection;