
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <div className="bg-black min-h-1/2 text-white p-4 md:p-12 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
      <div className="md:flex-1 md:mx-5 mb-6 md:mb-0">
        <Image src="/explorer.jpeg" alt="Galaxy Explorer" width={500} height={500} className="rounded-lg" />
      </div>
      <div className="md:flex-1 max-w-xl xl:max-w-full mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl  mb-4 text-atomic-tangerine-hex">Welcome to Galaxy Explorers. The Cosmos Awaits!</h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-4">Coming Soon</p>
          <p className="text-gray-400">
            Join us on a journey across the stars with 1,000 unique AI-generated explorers, brimming with untold stories and potential. Your adventure into the blockchain cosmos starts here.
          </p>
        </div>
        <p className="mb-6">
          As we prepare for the public minting, these explorers await their destiny. Venture into the unknown — a narrative woven into each Explorer, promising a saga like no other.
        </p>
        <p className="italic">
          &quot;In the infinity of space, each Galaxy Explorer holds a destiny untold. Chart the uncharted.&quot;
        </p>
      </div>
    </div>
  );
}
