import React, { useState } from 'react';
import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={` ${darkMode ? 'dark' : ''}`}>
            <Navbar className={`border-b-2 ${darkMode ? 'dark' : ''}`}>
                <Link to="/" className={`self-center whitespace-nowrap text-sm sm:text-xl font-semibold ${darkMode ? 'dark:text-white' : ''}`}>
                    <span className={`px-2 py-1 ${darkMode ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'} rounded-xl text-white`}>Model</span>blog
                </Link>
                <form className="hidden lg:block">
                    <TextInput
                        type="text"
                        placeholder="Search..."
                        rightIcon={AiOutlineSearch}
                        className="hidden lg:inline"
                    />
                </form>
                <Button className="w-12 h-10 lg:hidden" color="grey" pill>
                    <AiOutlineSearch />
                </Button>
                <div className="flex gap-2 md:order-2">
                    {darkMode ? (
                        <Button className="w-12 h-10 hidden sm:inline dark:text-white" color="grey" pill onClick={toggleDarkMode}>
                            <FaSun />
                        </Button>
                    ) : (
                        <Button className="w-12 h-10 hidden sm:inline" color="grey" pill onClick={toggleDarkMode}>
                            <FaMoon />
                        </Button>
                    )}
                    <Link to="/signin">
                        <Button gradientDuoTone="purpleToBlue">Sign In</Button>
                    </Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={path === '/'} as={'div'}>
                        <Link to="/" className={`${path === '/' ? 'glow' : ''}`}>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        <Link to="/about" className={`${path === '/about' ? 'glow' : ''}`}>About</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/projects'} as={'div'}>
                        <Link to="/projects" className={`${path === '/projects' ? 'glow' : ''}`}>Projects</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
