import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { PiSealCheckFill } from "react-icons/pi";

const outcomePoints = [
  "Product Ownership",
  "Freelancing",
  "Global Marketing by Panaverse Dao",
  "Boosting Economy",
];

export default function ProgramOutcome() {
  return (
    <section className="text-gray-600 body-font">
      <Wrapper>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Left image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="/out.png"
              alt="hero"
              width={500}
              height={700}
              className="object-cover object-center rounded"
            />
          </div>

          {/* Right content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Outcome for Participants of the Program
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
              typewriter affogato, hella selvage wolf narwhal dreamcatcher. Chillwave portland ugh,
              knausgaard fam polaroid iPhone. Man braid swag typewriter affogato.
            </p>

            {/* Outcome Points */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {outcomePoints.map((item, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <PiSealCheckFill size={20} color="#3b82f6"
                    />

                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Wrapper>
    </section>
  );
}
