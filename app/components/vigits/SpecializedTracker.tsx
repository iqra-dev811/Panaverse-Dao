'use client';
import React, { useState } from 'react';
import Wrapper from '../../components/shared/Wrapper';
import QuarterBox from '../../components/shared/QuarterBox';
import Image from 'next/image';

// 🛠 Sample programData with quarters included
const programData = [
    {
        slug: 'ai',
        title: 'AI Specialization',
        quarters: [
            {
                header: "Quarter V",
                description: "AI fundamentals and tools.",
                number: 5
            },
            {
                header: "Quarter VI",
                description: "Deep learning and deployment.",
                number: 6
            }
        ]
    },
    {
        slug: 'Web 3.0 (Blockchain) and Metaverse Specialization',
        title: 'Panaverse DAO aik mission-driven community hai jo web3, AI, aur metaverse technologies par focus karti ha',
        quarters: [
            {
                header: "Quarter V",
                description: "Metaverse development and Web 3.0 basics.",
                number: 5
            },
            {
                header: "Quarter VI",
                description: "Advanced Blockchain concepts and practicals.",
                number: 6
            }
        ]
    },
];

const aiTopics = [
    {
        slug: 'ai',
        img: '/AAA.png',
        text: 'Artificial Intelligence is transforming the world with machine learning.'
    },
    {
        slug: 'Web 3.0 (Blockchain) and Metaverse Specialization',
        img: '/AI.png',
        text: 'Panaverse DAO aik mission-driven community hai jo web3, AI,.'
    },
    {
        slug: 'ai',
        img: '/AIE.png',
        text: 'Machine learning allows systems to learn and improve over time.'
    },
    {
        slug: 'ai',
        img: '/AIG.png',
        text: 'Natural Language Processing powers chatbots and voice assistants.'
    },
    {
        slug: 'ai',
        img: '/Ang.png',
        text: 'Computer vision enables AI to recognize and process images.'
    },
    {
        slug: 'ai',
        img: '/IA.png',
        text: 'AI is revolutionizing healthcare, education, and many industries.'
    },
];

const SpecializedTracker = () => {
    const [selectedItem, setSelectedItem] = useState("Web 3.0 (Blockchain) and Metaverse Specialization");

    const selectedItemData = programData.find((item) => item.slug === selectedItem);

    return (
        <section>
            <Wrapper>
                <div className="w-full text-left pl-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Specialized Tracks</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        After completing the first three quarters, content to introduce.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Aap isko Tailwind CSS ki help se style kar rahi hain.
                    </p>
                </div>

                <div className="py-10 px-10 bg-gray-50 flex flex-col lg:flex-row lg:items-stretch gap-0">
                    {/* Left Box */}
                    <div className="bg-white rounded-xl self-start sticky-top-0 shadow-md border p-6 w-full lg:w-7/12 flex flex-col">
                        <h4 className="text-teal-700 font-semibold text-lg mt-4">
                            Specialized Program
                        </h4>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                            {selectedItemData?.slug}
                        </h3>
                        <p className="text-base text-gray-800 mb-4 leading-relaxed">
                            {selectedItemData?.title}
                        </p>

                        <a
                            href="#"
                            className="text-teal-600 font-semibold hover:text-teal-800 transition duration-300 mb-8 border-b-2 border-teal-600 inline-block"
                        >
                            Learn More <span className="inline">{'>'}</span>
                        </a>

                        <div className="mt-6 flex flex-col md:flex-row gap-6">
                            {
                                selectedItemData?.quarters.map((quarter, index) => (
                                    <QuarterBox
                                        key={index}
                                        header={quarter.header}
                                        description={quarter.description}
                                        number={quarter.number}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="bg-white rounded-xl shadow-md border p-6 w-full lg:w-5/12 flex flex-col justify-between">
                        <div className="flex flex-col gap-8">
                            {aiTopics.map((topic, idx) => (
                                <div
                                    onClick={() => setSelectedItem(topic.slug)}
                                    key={idx}
                                    className="flex items-start gap-4 cursor-pointer"
                                >
                                    <Image
                                        src={topic.img}
                                        alt={`AI Icon ${idx + 1}`}
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                    <div className="flex flex-col">
                                        <h4 className="text-teal-700 font-semibold text-lg mb-1">
                                            Specialized Program
                                        </h4>
                                        <p className="text-sm text-gray-700 leading-snug">
                                            {topic.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default SpecializedTracker;
