import { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder = true }) => {
  return (
    <div>
      <div
        className={`w-64 h-64 bg-white shadow-md ${
          haveBorder ? 'border border-gray-300' : ''
        } rounded-xl flex flex-col justify-center items-center text-center p-4`}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-2">{header}</h3>
        <p className="text-gray-600 text-sm whitespace-pre-line">{description}</p>
        <span className="text-sm text-gray-500 mt-2">Quarter: {number}</span>
      </div>
    </div>
  );
};

export default QuarterBox;
