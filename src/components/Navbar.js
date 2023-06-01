import React, {useState} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import { CgMenuGridO } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5'


const Navbar = () => {

    const brand = "<Oladepo Majid />"

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='nav'>
            <div className='nav-content'>
                <div className='nav-left'>
                    <h1>{brand}</h1>
                </div>
                <div className='nav-right'>

                    {!isOpen ? <CgMenuGridO className='menu-icon' onClick={handleClick} /> : <IoClose className='menu-icon' onClick={handleClick} />}

                    {isOpen &&
                        <div className='side-menu'>
                            <ul className='side-menu-items'>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="Home"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="About"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        About Me
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="Projects"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="Contact"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Contact Me
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="Blog"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }

                    <ul className='nav-items'>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Contact Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="Blog"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar