import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '../../components/shared/Wrapper';
const Header = () => {
  return (
     <Wrapper>
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      
      {/* Container jahan image aur heading ek line mein hain */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Panaverse Logo"
          width={50}
          height={50}
          priority
          className="inline-block"
        />
        <Link href="/" className="text-2xl font-bold text-black">
          Panaverse DAO
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link href="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
      </nav>
    </header>
    </Wrapper>
  );
};

export default Header;
