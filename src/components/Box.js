import React from 'react';
import '../styles/Box.css';
import { BsFillArrowDownCircleFill, BsFillDiamondFill } from 'react-icons/bs';
import Education from '../assets/education.png';
import Skill from '../assets/skill.png';
import Hobby from '../assets/hobby.png';

const Box = (props) => {

    let icon;
    if (props.icon === "education") {
        icon = <img src={Education} alt='education' className='box-icon' />
    } else if (props.icon === "skill") {
        icon = <img src={Skill} alt='skills' className='box-icon' />
    } else {
        icon = <img src={Hobby} alt='hobby' className='box-icon' />
    }

    return (
        <div className='box-item'>
            <div className='box-inner'>
                { }
                {/* <img src={Education} alt="" /> */}
                {icon}
                <h1 className='box-heading'>{props.heading}</h1>
                <p><BsFillDiamondFill className='list-icon' /> {props.listone}</p>
                <p><BsFillDiamondFill className='list-icon' /> {props.listtwo}</p>
                <p><BsFillDiamondFill className='list-icon' /> {props.listthree}</p>
                <p>{props.listfour && <BsFillDiamondFill className='list-icon' />} {props.listfour}</p>
                <p>{props.listfive}</p>
                <p>{props.listsix}</p>
                <p>{props.listseven}</p>
                <p>{props.listeight}</p>
                <p>{props.listnine}</p>
                {props.listnine && <BsFillArrowDownCircleFill className='box-scroll-icon' />}
            </div>
        </div>
    )
}

export default Box