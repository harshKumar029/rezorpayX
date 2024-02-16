import React from 'react'
import load from '../assets/icon/load.png';

const Filterdata = (props) => {
    const data = props.data
    console.log("filter", data)
    return (
        <>
            <div className='activecotacts'>
                <div>
                    <h4>Showing 1-{data.length} active Contacts Short by latest ctreation date</h4>
                </div>
                <div className='right_activecotacts'>
                    <img style={{ width: 60 }} src={load} alt='' />
                    <div class="dropdown">
                        <div>
                            <span className='payoutbutton export'><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.89"><title>download-file</title><path fill="#7fb2f9" d="M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z"/></svg>
                              Export </span>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div>
                            <span   style={{ backgroundColor: '#2c7deeeb', border: 'none',color:'#fff'}} className='payoutbutton'>+ CONTACT <span className='bar' style={{ color:'#12111126'}}>|</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th><svg style={{ width: 12 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#cecfd4" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg> Phone</th>
                            <th><svg style={{ width: 12 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#cecfd4" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg> Email</th>
                            <th>Contact ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.contactId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Filterdata