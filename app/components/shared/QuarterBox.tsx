import { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
  haveBorder?:boolean;
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder =true }) => {
  return (
      <div className="border rounded-md  w-4/12 relative flex-1 flex flex-col justify-center px-8 py-12">
        <h4 className="font-bold text-lg">{header}</h4>
        <p className="mt-2 text-slate-600 z-0">{description}</p>
        <div className="absolute -top-8 right-10 text-[170px] text-gray-200 font-bold -z-10">{number}</div>
      </div>

  );
};

export default QuarterBox;
