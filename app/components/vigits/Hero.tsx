import React from 'react'
import Wrapper from '../../components/shared/Wrapper';
import Image from 'next/image';
import Button from "../../components/shared/Button";
export default function Hero() {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Side: Text */}
                    <div className="flex-1 ">
                        <h4 className="text-teal-800 font-semibold text-lg mt-4"> Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                        </h4>
                        <h1 className="text-4xl sm:text-5xl font-semibold ">
                            Certified Web 3.0 And Metaverse Developer
                        </h1>
                        <p className="mt-5 text-xl text-slate-600">
                           A One and Quarter Years Panaverse DAO Earn as you Learn Program<br/> Getting
                            Ready for the Next Generation of the Internet.
                        </p>
                        <p className="mt-2 text-lg text-slate-600">
                           Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), 
                           Cloud, Edge, Computing/IoT, Network Automation, and Bioinformatics Technologies


                        </p>

                         <div className='mt-4'>
                        <Button text={"Enroll now"} />
                        </div>
                    </div>
                    {/* Right Side: Image */}
                    <div >
                        <Image
                            src="/hero.png" // ✅ Put your image in public/hero.png
                            alt="Hero Illustration"
                            width={450}
                            height={500}
                            className="rounded-lg shadow-lg "
                            priority
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

