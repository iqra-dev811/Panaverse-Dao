'use client';
import React from 'react';
import Wrapper from '../../components/shared/Wrapper';
import Button from '../../components/shared/Button';
import QuarterBox from '../../components/shared/QuarterBox';

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1
  },
  {
    header: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2
  },
  {
    header: "Quarter III",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3
  },
];

const CoreTrack = () => {
  const paragraph = "Core Courses \n(Common in all Specializations)";
  
  return (
    <section className='mt-16 lg:mt-28'>
      <Wrapper>
        {/* Content Section */}
        <div className="max-w-screen-md">
          <h4 className="text-teal-700 font-semibold text-lg mt-4">Program in Studies</h4>
          <h2 className="text-4xl font-semibold whitespace-pre-line">{paragraph}</h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the following three core courses.
          </p>
          <div className='mt-4'>
            <Button text="Learn More" />
          </div>
        </div>

        {/* Boxes Section */}
        <div className='my-20 flex flex-col md:flex-row gap-x-4 gap-y-8 ${haveBorder && "border"}'>
          {CoreTrackData.map((item, i) => (
            <QuarterBox 
            key={i}
             header={item.header}
              description={item.description}
              number={i + 1}
              haveBorder={false}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
