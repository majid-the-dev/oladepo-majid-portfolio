import React, {useState} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import { CgMenuGridO } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import 'animate.css';


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
                        <div className='side-menu animate__animated animate__pulse'>
                            <ul className='side-menu-items'>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        className='nav-link'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        className='nav-link'
                                    >
                                        About Me
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className='nav-link'
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        className='nav-link'
                                    >
                                        Contact Me
                                    </Link>
                                </li>
                                <li className='side-menu-item'>
                                    <Link
                                        activeClass="active"
                                        to="blog"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                        className='nav-link'
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
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-item-link"
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav-item-link"
                            >
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav-item-link"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav-item-link"
                            >
                                Contact Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav-item-link"
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