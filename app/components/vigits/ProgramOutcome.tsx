import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { CiSquareCheck } from "react-icons/ci";

const outcomePoints = [
  "Product Ownership",
  "Freelancing",
  "Global Marketing by Panaverse Dao",
  "Boosting Economy",
];

export default function ProgramOutcome() {
  return (
    <section className="mt-16 md:mt-20">
      <Wrapper>
        <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
          {/* Left image */}
          <div className="flex-1 bg-white">
            <Image
              src="/girl.png"
              alt="hero"
              width={400}
              height={500}
              className="object-cover object-center rounded"
            />
          </div>

          {/* Right content */}
          <div className="flex-1">
            <h1 className="font-bold text-4xl">The Outcome for Participants of the Program</h1>
            <p className="mt-8 text-slate-600 text-lg">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
              typewriter affogato, hella selvage wolf narwhal dreamcatcher. Chillwave portland ugh,
              knausgaard fam polaroid iPhone. Man braid swag typewriter affogato.
            </p>

            {/* Outcome Points */}
            <div className=" mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 gap-y-4">
              {outcomePoints.map((item, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CiSquareCheck size={45} color="blue" className='flex-shrink-0'
                    />

                  <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Wrapper>
    </section>
  );
}
