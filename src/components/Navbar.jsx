import React from 'react';
import logo from "../assets/nuriCanLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"


function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full shadow-sm flex items-center justify-between px-8 py-6 z-10'>
            <a href='' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <div className='flex items-center'>
                    <img className='w-10' src={logo} alt="logo" />
                </div>
            </a>

            <div className='flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/nuri-can-birdemir-91a8551a3/" target="_blank"><FaLinkedin className='text-blue-600 m-0 p-0 hover:border hover:border-blue-600 hover:rounded-sm' /></a>
                <a href="https://github.com/nuricanbrdmr" target="_blank"><FaGithub className='text-gray-800 m-0 p-0 hover:border-2 hover:border-gray-700 hover:rounded-xl' /></a>
                <a href="https://www.instagram.com/nuricanbrdmr/" target="_blank"><FaInstagram className='text-pink-600 m-0 p-0 hover:border hover:border-pink-900 hover:rounded-lg' /></a>
                <a href="https://x.com/nurican_brdmr" target="_blank"><FaSquareXTwitter className='text-blue-400 hover:border hover:border-blue-400 hover:rounded-md' /></a>
            </div>
        </nav>
    );
}

export default Navbar;
