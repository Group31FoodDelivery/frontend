import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';

class Header extends React.Component {
    render ()
    {
        return (
            <div className={styles.Header}>

            <div>YammyGo</div>
            <input type="text" placeholder="Restaurants" className={styles.searchBar}/>
            <button className={styles.searchButton}> search </button>
            <div>log in</div>
            <div>Register</div>
            
            <button className={styles.button}>Orders</button>
            
           

        </div>
        );
    }
        
}

export default Header;
