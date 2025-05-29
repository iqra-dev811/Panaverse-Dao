'use client';
import React from 'react';
import Wrapper from '../../components/shared/Wrapper';
import QuarterBox from '../shared/QuarterBox';

const quarterData = [
  {
    title: 'Quarter I',
    description: 'CS-101: Object-oriented programming using TypeScript.'
  },
  {
    title: 'Quarter II',
    description: 'Success is not final, failure is not fatal.\nSuccess is not final, failure is not fatal.'
  },
  {
    title: 'Quarter III',
    description: 'Every day is a new chance\nto grow and shine.'
  }
];

export default function CoreTrack() {
  return (
    <section>
      <Wrapper>
        <div className=" py-10 flex items-start justify-start px-10 bg-gray-50">
          <div className="max-w-md">
            <h4 className="text-teal-700 font-semibold text-lg mt-4">Program in studies</h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-0">Core Courses</h2>
            <h2 className="text-3xl font-bold text-gray-800 mt-0">(Common in all Specialization)</h2>
            <p className="text-base text-gray-800 mb-4 leading-relaxed">
              Ye aik chhoti si paragraph hai jo teen lines mein likhi gayi hai.
              Iska maksad sirf design aur alignment ko test karna hai.
              Hum isay Tailwind CSS aur TypeScript ke zariye Next.js mein bana rahe hain.
            </p>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Quarter Boxes using map */}
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-6 max-w-7xl mx-auto gap-6">
          {quarterData.map((item, index) => (
            <QuarterBox
              key={index}
              header={item.title}
              description={item.description}
              number={index + 1}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
