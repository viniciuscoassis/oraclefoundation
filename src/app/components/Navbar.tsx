import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                    <Image src='/logo.png' alt="logo" width={50} height={50} />
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/home" className="py-4 px-2 text-atomic-tangerine-hex border-b-4 border-attext-atomic-tangerine-hex font-semibold ">Home
              </Link>
              <Link href="/oracles" className="py-4 px-2 text-gray-500 font-semibold hover:text-atomic-tangerine-hex transition duration-300">Oracles
              </Link>
              <Link href="/about us" className="py-4 px-2 text-gray-500 font-semibold hover:text-atomic-tangerine-hex transition duration-300">About us
              </Link>
              <Link href="/wallet" className="py-4 px-2 text-gray-500 font-semibold hover:text-atomic-tangerine-hex transition duration-300">Wallet
              </Link>
              <Link href="/market" className="py-4 px-2 text-gray-500 font-semibold hover:text-atomic-tangerine-hex transition duration-300">Market
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <a href="#" className="py-2 px-2 font-medium text-white rounded bg-atomic-tangerine-hex hover:brightness-125 hover:text-white transition duration-300">Connect Wallet</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
