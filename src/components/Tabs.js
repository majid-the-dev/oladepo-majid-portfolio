import React, { useState } from 'react';
import '../styles/Tabs.css';
import { tabData } from './tabData';
import { projectData } from './projectData';
import { FiExternalLink } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { ImSad2 } from 'react-icons/im';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const renderTabs = () => {
        return tabData.map((tab) => (
            <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={tab.id === activeTab ? 'active' : ''}
            >
                {tab.title}
            </button>
        ));
    };

    const renderCards = () => {

        const filteredCards = projectData.filter((card) => card.tabIds.includes(activeTab));

        if (filteredCards.length === 0) {
            return (
                <div className='no-projects text-center'>
                    <ImSad2 className='emoji' />
                    <h6>Ooops! No project uploaded for this category yet. Kindly check back later.</h6>
                </div>
            )
        }

        return filteredCards.map((card) => (
            <div className='project-card'>
                <img src={card.icon} alt="" />
                <h1>{card.title}</h1>
                <a href={card.url}>{card.url}<FiExternalLink className='external-link-icon' /></a>
                <br />
                <p>{card.description}</p>
                <a href="https://www.google.com" className='repo-btn'>View Repository <BsArrowRight className='repo-icon' /></a>
            </div>
        ));
    };

    return (
        <div className='tab-section'>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='tab-group'>
                                {renderTabs()}
                            </div>
                            <div className='outlet'>
                                {renderCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs