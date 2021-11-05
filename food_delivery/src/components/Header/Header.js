import React from 'react';
import './Header.css';
import HeaderButton from '../HeaderButton/HeaderButton';

export default function Header() {
    return (
        <div className="Header">

            <div style={{marginRight: '85%'}}>YammyGo</div>
            <span style={{display:'flex', width:'100px', height:"40px", justifyContent:'center', alignItems:'center', backgroundColor: 'crimson', borderRadius:'15px', marginRight:'20px'}}>Front page</span>

        </div>
    )
}
