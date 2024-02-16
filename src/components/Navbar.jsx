import React from 'react';
import Payout from '../assets/icon/payout.svg';
import contacts from '../assets/icon/contacts.svg';
import iosstore from '../assets/icon/iosstore.svg';
import payoutlink from '../assets/icon/payoutlink.svg';
import playstore from '../assets/icon/playstore.svg';
import RazorpayXlogo from '../assets/icon/RazorpayXlogo.svg';
import reports from '../assets/icon/reports.svg';
import taxpayment from '../assets/icon/taxpayment.svg';
import home from '../assets/icon/home.svg';
import xlogo from '../assets/icon/xlogo.svg';
import statement from '../assets/icon/fileinvoice.svg';
import payroll from '../assets/icon/payroll.svg';
import '../style/style.css'

const Navbar = () => {
    return (
        <div className='navbar' id='nav'>
            <div>
                <div className='logo'>
                    <img className='xlogo' src={xlogo} alt='' />
                    <img className='RazorpayXlogo' src={RazorpayXlogo} alt='' />
                </div>
                <ul className='nav_sec sec1'>
                    <li>
                        <img src={home} alt='' />
                        <span>Home</span>
                    </li>
                    <li>
                        <img src={Payout} alt='' />
                        <span>Payouts</span>
                    </li>
                    <li>
                        <img src={statement} alt='' />
                        <span>Account Statement</span>
                    </li>
                    <li>
                        <img src={contacts} alt='' />
                        <span>Contacts</span>
                    </li>
                </ul>
                {/* <hr /> */}
                <ul className='nav_sec sec2'>
                    <li>
                        <img src={Payout} alt='' />
                        <span>Vendor Payments</span>
                    </li>
                    <li>
                        <img src={taxpayment} alt='' />
                        <span>TaxPayments</span>
                    </li>
                    <li>
                        <img src={payoutlink} alt='' />
                        <span>Payout Links</span>
                    </li>
                    <li>
                        <img src={payroll} alt='' />
                        <span>Payroll</span>
                    </li>
                    <li>
                        <img src={reports} alt='' />
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
            <ul className='nav_bottom sec3'>
                <li>
                    <span>Get RazorpayX mobile app</span>
                    <img src={iosstore} alt='' />
                    <img src={playstore} alt='' />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
