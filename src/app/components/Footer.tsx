// components/Footer.js
'use client'
import { useState } from 'react';
import { FiTwitter, FiCopy, FiEye } from 'react-icons/fi';
import { FaDiscord, FaMedium } from 'react-icons/fa';
import { SiFantom } from 'react-icons/si';

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        if (!text.includes('0x00...0000')) {
            navigator.clipboard.writeText(text).then(
                () => setCopied(true),
                (err) => console.error('Failed to copy', err)
            );
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        }
    };
    interface IContract {
        name: string;
        address: string;
        isComingSoon: boolean;
    }

    const contracts: IContract[] = [
        { name: 'Oracle', address: '0x4d5ea4d0a31965531146e81689c224f2929ae3e2', isComingSoon: false },
        { name: 'Coming soon', address: '0x00...0000', isComingSoon: true }
    ];

    function shortenAddress(address: string) {
        const firstCharacters = address.substring(0, 4); // Pega os primeiros 4 caracteres
        const lastCharacters = address.substring(address.length - 4); // Pega os últimos 4 caracteres
        return `${firstCharacters}...${lastCharacters}`; // Combina-os com reticências no meio
    }

    return (
        <footer className="bg-slate-800 text-white p-8">
            <div className="max-w-6xl flex mt-20 md:space-x-96 mx-auto">
                <div className="h-72 w-2/6 flex flex-col justify-between">
                    {/* Oracle Section */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-bold">Oracles</h2>
                        <p>100 AI-generated oracles with embedded value</p>
                        <div className="flex space-x-4">
                            <a href="https://discord.gg/nUagbg9U" className=" hover:text-blue-300"><FaDiscord height={30} /></a>
                            <a href="https://twitter.com/OracleFantom" className="hover:text-blue-300"><FiTwitter /></a>
                            <a href="#" className="hover:text-blue-300">
                                <FaMedium />
                                {/* <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2 py-1 -translate-x-1/2 -translate-y-1/2">Soon</span> */}
                            </a>
                        </div>
                    </div>

                    {/* Contracts Section */}
                    <div className="min-w-full mt-10 w-screen md:max-w-5 rounded-lg relative">
                        <h3 className="text-xl font-bold mb-2">Contracts</h3>
                        {contracts.map((contract, index) => (
                            <div key={index} className="flex items-center justify-between mb-4">
                            <p className="flex-1 ">{contract.name}</p>
                            <p className={`flex-1text-center ${contract.isComingSoon ? 'text-gray-500' : 'text-white'}`}>
                                {shortenAddress(contract.address)}
                            </p>
                            {!contract.isComingSoon ? (
                                <div className="flex-1 flex justify-center space-x-2">
                                    <button onClick={() => copyToClipboard(contract.address)} className="p-1 rounded-full bg-charcoal-hex hover:brightness-75">
                                        <FiCopy className="text-xl" />
                                    </button>
                                    <a href={`https://ftmscan.com/address/${contract.address}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full bg-charcoal-hex hover:brightness-75">
                                        <FiEye className="text-xl" />
                                    </a>
                                </div>
                            ) : (
                                <div className="flex-1 flex justify-center">
                                    <FiEye className="text-xl text-gray-500" />
                                </div>
                            )}
                        {copied && <div className="text-green-500 absolute right-10 md:right-4 top-4">Copied!</div>}
                        </div>
                        ))}
                    </div>
                </div>

                {/* Site Section */}
                <div className=''>
                    <h3 className="text-xl font-bold mb-2">Site</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                        <li className="mb-2 relative hover:underline">
                            <a href="#" className='text-slate-50'>Wallet</a>
                        </li>
                        <li className="mb-2 relative hover:underline">
                            <a href="#">Market</a>
                        </li>
                    </ul>
                </div>

            </div>
            {/* Footer Bottom Section */}
            < div className="text-center text-gray-400 mt-24 " >
                <p>© 2024 Oracle Foundation</p>
                <p>Powered by <span className=" justify-center items-center gap-1 text-blue-400 inline-block"> <SiFantom width={50} height={50}></SiFantom> </span></p>
            </div >
        </footer>
    );
}