import React, { useState } from 'react'
import tickImg from '../assets/icon/blue_tick.svg';
import circleImg from '../assets/icon/thin_donut.svg';
import contacts from '../assets/icon/contacts.svg';
import rightimg from '../assets/icon/rightimg.png';
import data from '../data.json'
import Filterdata from '../components/Filterdata';

const Home = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [jsonData, setJsonData] = useState(data);
    console.log(jsonData)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className='home_page'>
                <header className='header'>
                    <div className='leftheader'>
                        <img src={contacts} alt='' />
                        <h2>Contacts</h2>
                        <span>/</span>
                        <span className='single'>Single</span>
                        <h4>import Contacts</h4>
                    </div>
                    <div className='rigthheader'>
                        <div class="dropdown">
                            <div>
                                <span className='payoutbutton'>+ PAYOUT <span className='bar'>|</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#7fb2f9" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></span>
                                <div class="dropdown-content">
                                    <a href="#">Bulk Payout</a>
                                    <a href="#">Upload Invoice</a>
                                    <a href="#">Add Contact</a>
                                    <a href="#">Team Member</a>
                                </div>
                            </div>
                        </div>
                        <img src={rightimg} alt='' />
                    </div>
                </header>
                <section className=' filters'>
                    <div className="tabs">
                        <div className='leftfilter'>
                            <span>Quick Filters:</span>
                            <button
                                className={activeTab === 'all' ? 'tab-btn active' : 'tab-btn'}
                                style={{ background: activeTab === 'all' ? 'rgba(42,134,243,.1)' : 'rgba(42,134,243,.05)' }}
                                onClick={() => handleTabClick('all')}
                            >
                                {activeTab === 'all' ? <img src={tickImg} alt="tick" /> : <img src={circleImg} alt="circle" />}
                                All Contacts
                            </button>

                            <button
                                className={activeTab === 'vendors' ? 'tab-btn active' : 'tab-btn'}
                                style={{ background: activeTab === 'vendors' ? 'rgba(42,134,243,.1)' : 'rgba(42,134,243,.05)' }}
                                onClick={() => handleTabClick('vendors')}
                            >
                                {activeTab === 'vendors' ? <img src={tickImg} alt="tick" /> : <img src={circleImg} alt="circle" />}
                                Vendors
                            </button>

                            <button
                                className={activeTab === 'employees' ? 'tab-btn active' : 'tab-btn'}
                                style={{ background: activeTab === 'employees' ? 'rgba(42,134,243,.1)' : 'rgba(42,134,243,.05)' }}
                                onClick={() => handleTabClick('employees')}
                            >
                                {activeTab === 'employees' ? <img src={tickImg} alt="tick" /> : <img src={circleImg} alt="circle" />}
                                Employees
                            </button>

                            <button
                                className={activeTab === 'customers' ? 'tab-btn active' : 'tab-btn'}
                                style={{ background: activeTab === 'customers' ? 'rgba(42,134,243,.1)' : 'rgba(42,134,243,.05)' }}
                                onClick={() => handleTabClick('customers')}
                            >
                                {activeTab === 'customers' ? <img src={tickImg} alt="tick" /> : <img src={circleImg} alt="circle" />}
                                Customers
                            </button>

                        </div>
                        <div className='dropbutton'>
                            <button ><span class="Button-content">View More Filters</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#7fb2f9" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></button>
                        </div>
                    </div>
                    <div className="tab-content" style={{ display: activeTab === 'all' ? 'block' : 'none' }}>
                        <Filterdata data={jsonData} />
                    </div>
                    <div className="tab-content" style={{ display: activeTab === 'vendors' ? 'block' : 'none' }}>
                        <Filterdata data={jsonData.filter(item => item.type === 'Vendor')} />
                    </div>
                    <div className="tab-content" style={{ display: activeTab === 'employees' ? 'block' : 'none' }}>
                    <Filterdata data={jsonData.filter(item => item.type === 'Employee')} />
                    </div>
                    <div className="tab-content" style={{ display: activeTab === 'customers' ? 'block' : 'none' }}>
                    <Filterdata data={jsonData.filter(item => item.type === 'Customer')} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home