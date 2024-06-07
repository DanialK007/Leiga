import { useState } from 'react';
import Fader from "./Fader";
import MenuImg from '../Image/liegeMenu.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="fixed z-50 top-0 left-0 w-full bg-white flex items-center justify-between p-4 lg:px-24">
                <div className="text-3xl font-bold">Leiga</div>
                <button className="relative" onClick={toggleMenu}>
                    <div className='absolute top-0 left-1 w-full h-full flex items-center justify-center rotate-90 font-bold text-xl'>||</div>
                    <img src={MenuImg} alt="Menu" className="w-20 h-20 animate-spinSlow" />
                </button>
            </nav>
            <ul className={`fixed top-0 right-0 w-full h-full bg-white flex items-center justify-center flex-col text-center text-5xl font-bold uppercase gap-y-10 shadow-lg p-4 z-40 transform transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <Link to="/" className={`py-2 hover:tracking-wider duration-1000 ease-out ${isMenuOpen ? 'scale-1' : 'scale-0'}`}>Home</Link>
                <Link to="/about/" className={`py-2 hover:tracking-wider duration-1000 ease-out ${isMenuOpen ? 'scale-1' : 'scale-0'}`}>About</Link>
                <Link to="/work/" className={`py-2 hover:tracking-wider duration-1000 ease-out ${isMenuOpen ? 'scale-1' : 'scale-0'}`}>Work</Link>
                <Link to="/blog/" className={`py-2 hover:tracking-wider duration-1000 ease-out ${isMenuOpen ? 'scale-1' : 'scale-0'}`}>Blogs</Link>
                <Link to="/contact/" className={`py-2 hover:tracking-wider duration-1000 ease-out ${isMenuOpen ? 'scale-1' : 'scale-0'}`}>Contact</Link>
            </ul>
        </>
    );
};

export default Navbar;
