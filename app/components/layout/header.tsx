import Image from "next/image"
import Wrapper from '../../components/shared/Wrapper';
import Link from "next/link";
const Header = () => {
  return (
    <header className="sticky top-0 z-0 bg-white">
      <Wrapper>
        <div className="flex justify-between max-w-screen-xl  py-4  items-center mx-20">

          {/* Container jahan image aur heading ek line mein hain */}
          <div>
            {/*<h2 className="text-xl font-bold text-black">
          Panaverse DAO
        </h2>*/}
            <Image src="/logo.png" alt="" height={150} width={150} />
          </div>

          {/* Navigation */}
          <ul className='flex space-x-8 font-medium'>
            <Link href={"/"}>
              <li className="tex-semibold">
                Home
              </li>
            </Link>
            <Link href={"/courses"}>
              <li className="tex-semibold">Courses</li>
            </Link>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
