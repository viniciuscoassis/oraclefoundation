// components/Footer.js
'use client'
import { useState } from 'react';
import { FiTwitter, FiCopy, FiEye } from 'react-icons/fi';
import { FaDiscord, FaMedium } from 'react-icons/fa';
import { SiFantom } from 'react-icons/si';

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: any) => {
        if (!text.includes('Coming Soon')) {
            navigator.clipboard.writeText(text).then(
                () => setCopied(true),
                (err) => console.error('Failed to copy', err)
            );
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        }
    };

    const contracts = [
        { name: 'Oracle', address: '0x89...3b79', isComingSoon: false },
        { name: 'Future Project', address: 'Coming Soon', isComingSoon: true }
    ];

    return (
        <footer className="bg-slate-800 text-white p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Oracle Section */}
                <div>
                    <h2 className="text-xl font-bold mb-2">Oracle</h2>
                    <p className="mb-4">100 AI-generated oracles with embedded value</p>
                    {/* Community Links */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:opacity-80"><FaDiscord /></a>
                        <a href="#" className="hover:opacity-80"><FiTwitter /></a>
                        <a href="#" className="hover:opacity-80 relative">
                            <FaMedium />
                            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2 py-1 translate-x-1/2 -translate-y-1/2">Soon</span>
                        </a>
                    </div>
                </div>

                {/* Contracts Section */}
                <div className="bg-blue-850 p-4 rounded-lg">
                    <h3 className="text-xl font-bold
mb-2 text-white">Contracts</h3>
                    {contracts.map((contract, index) => (
                        <div key={index} className="flex items-center justify-between mb-4">
                            <div className="relative group">
                                <p className={contract.isComingSoon ? 'text-gray-500' : 'text-white'}>
                                    {contract.address}
                                </p>
                                {!contract.isComingSoon && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                        <span className="bg-black text-xs rounded px-2 py-1">Copy</span>
                                    </div>
                                )}
                            </div>
                            {!contract.isComingSoon ? (
                                <>
                                    <button onClick={() => copyToClipboard(contract.address)} className="text-white p-1 rounded-full bg-blue-500 hover:bg-blue-600">
                                        <FiCopy className="text-xl" />
                                    </button>
                                    <a href={`https://ftmscan.com/address/${contract.address}`} target="_blank" rel="noopener noreferrer" className="text-white p-1 rounded-full bg-blue-500 hover:bg-blue-600 ml-2">
                                        <FiEye className="text-xl" />
                                        <span className="sr-only">View on FTMScan</span>
                                    </a>
                                </>
                            ) : (
                                <div className="text-gray-500 p-1 rounded-full bg-gray-400 cursor-not-allowed">
                                    <FiEye className="text-xl" />
                                </div>
                            )}
                        </div>
                    ))}
                    {copied && <p className="text-green-500 mt-1">Copied!</p>}
                </div>

                {/* Site Section */}
                <div className=''>
                    <h3 className="text-xl font-bold mb-2">Site</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                        <li className="mb-2 relative hover:underline">
                            <a href="#">Wallet (Oracles, Explorers)</a>
                            <span className="absolute -top-3 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">Coming Soon</span>
                        </li>
                        <li className="mb-2 relative hover:underline">
                            <a href="#">Market (Oracles, Explorers)</a>
                            <span className="absolute -top-3 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">Coming Soon</span>
                        </li>
                    </ul>
                </div>
            </div >

            {/* Footer Bottom Section */}
            < div className="text-center text-gray-400 mt-8 " >
                <p>© 2024 Oracle Foundation</p>
                <p>Powered by <span className=" justify-center items-center gap-1 text-blue-400 inline-block"> <SiFantom width={50} height={50}></SiFantom> </span></p>
            </div >
        </footer >
    );
}
