import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';

class Header extends React.Component {
    render ()
    {
        return (
            <div className={styles.Header}>

            <div style={{marginRight: '85%'}}>YammyGo</div>
            <span style={{display:'flex', width:'100px', height:"40px", justifyContent:'center', alignItems:'center', backgroundColor: 'crimson', borderRadius:'15px', marginRight:'20px'}}>Front page</span>

        </div>
        );
    }
        
}

export default Header;
