import React from 'react'
import Wrapper from '../../components/shared/Wrapper';
import Image from 'next/image';
export default function Hero() {
    return (
        <section>
            <Wrapper>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                    {/* Left Side: Text */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <p className="text-teal-700 font-semibold text-lg mt-4">  Panaverse DAO aik mission-driven community hai jo web3, AI.
                        </p>
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            Certified Web 3.0 And Metaverse Developer
                        </h1>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Panaverse DAO aik mission-driven community hai jo web3, AI, aur metaverse technologies par focus karti hai.
                            Yahan aapko latest tools aur frameworks seekhne ko milte hain.
                            Yeh program students ko modern tech stack sikhata hai jo real-world projects pe based hota hai.
                            Har course carefully design kiya gaya hai to make you job-ready.
                            Future tech mein expert banne ke liye Panaverse se behtar koi jagah nahi.
                        </p>


                        <a className="inline-block bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700 transition">
                            Learn More
                        </a>


                    </div>
                    {/* Right Side: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/hero.jpeg" // ✅ Put your image in public/hero.png
                            alt="Hero Illustration"
                            width={300}
                            height={100}
                            className="rounded-lg shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
