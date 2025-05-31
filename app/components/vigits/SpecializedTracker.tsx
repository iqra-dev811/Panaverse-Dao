'use client';
import Wrapper from '../../components/shared/Wrapper';
import QuarterBox from '../../components/shared/QuarterBox';
import Image from "next/image"
import { useState } from 'react';

export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        imageSrc: "/web.png",
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        imageSrc: "/ai.png",
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "cloud",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        imageSrc: "/cloud.png",
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "iot",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        imageSrc: "/ACS.png",
        quarters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },
    {
        slug: "bio",
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        imageSrc: "/GBS.png",
        quarters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },
    {
        slug: "npa",
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        imageSrc: "/NPAS.png",
        quarters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    },
];

const SpecializedTracker = () => {
    const [selectedItem, setSelectedItem] = useState("wmd");
    const selectedItemData = programsData.find((item) => item.slug === selectedItem);

    return (
        <section>
            <Wrapper>
                <div className="w-full text-left pl-4">
                    <h2 className="text-4xl font-semibold whitespace-pre-line">Specialized Tracks</h2>
                    <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
                        After completing the first three quarters the participants will select
                        specializations consisting of two courses each.
                    </p>
                </div>
                <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
                    {/* Left content */}
                    <div className="shadow-xl self-start sticky top-28 basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
                        <h4 className="text-teal-700 text-lg font-medium">Specialized Program</h4>
                        <h3 className="text-2xl font-semibold mb-2">{selectedItemData?.header}</h3>
                        <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
                        <button className='text-teal-700 text-lg mt-4 underline flex items-end'>
                            Learn More
                            <svg className="mb-.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#14b8a6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="20"
                                height="20"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <div className='flex sm:flex-row flex-col gap-4 mt-8'>
                            {
                                selectedItemData?.quarters.map((item) => (
                                    <QuarterBox
                                        key={item.number}
                                        description={item.description}
                                        header={item.header}
                                        number={item.number}
                                        haveBorder={false}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    {/* Right content */}
                    <div className='px-4 space-y-4 items-center py-6 basis-4/12 bg-slate-100 flex-1'>
                        {
                            programsData.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug || i} className='flex gap-x-4 items-center cursor-pointer'>
                                    <div className="relative w-36 h-24 flex-shrink-0">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.header}
                                            fill
                                            className="object-cover h-24 rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-teal-800 font-medium'>Specialized Program</h4>
                                        <h3 className='text-xl font-semibold'>{item.header}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default SpecializedTracker;
