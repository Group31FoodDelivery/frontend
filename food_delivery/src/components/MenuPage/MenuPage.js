import React from 'react';
import HeaderParallax from './HeaderParallax';
import styles from './MenuPage.module.css';
import MenuItems from './MenuItems';
import DropDown from './DropDown';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {getMenuItems} from '../../redux/Shopping/shopping-actions';

function MenuPage(props) {

    const {menuItems} = props; //redux menuItem state, harcoded, doesn't have api calls yet. props.restaurantId must be passed to redux somehow
    const {getMenuItems} = props;
    const {token} = props;
    const [categorySearch, setCategorySearch] = useState('')
    //const [menuData, setMenuData] = React.useState([]);

    const {restaurantId} = useParams(); //Takes the id which is in the url /menupages/:restaurantId (App.js)

    
    useEffect(() => {

        getMenuItems(restaurantId)
        console.log(getMenuItems)
        
       
    }, [])
    
    const onSearchChange = (event) => {   
        let searchResult = event.target.value;                         
        setCategorySearch(searchResult.toLowerCase());   
        console.log(categorySearch);
        }
        

    return (

        //Gets restaurants from app.js as normal props
        <div>
            {/* <div className={styles.header}> */}
            <HeaderParallax/>
        <div className={styles.header}>
        <div className={styles.name}>
          {props.restaurantData.filter(info => info.restaurantId === restaurantId).map(info => <div>{info.Name} {info.Rating}/5</div>)}  
    </div>
    <div className = {styles.container}>
        <div className={styles.description}>
        {props.restaurantData.filter(info => info.restaurantId === restaurantId).map(info => <div>{info.Description}</div>)}
        </div>
</div><div>
       <div className={styles.restaurantInfo}>
           <div className={styles.address}>
           {props.restaurantData.filter(info => info.restaurantId === restaurantId).map(info => <div>Address: {info.Address}</div>)}     
       </div>
       <div>
        {props.restaurantData.filter(info => info.restaurantId === restaurantId).map(info => <div>Open: {info.OperatingHours}</div>)}
        </div>
        <div>
        {props.restaurantData.filter(info => info.restaurantId === restaurantId).map(info => <div>{info.Type}</div>)}
        </div>
        
        </div>
    </div>
      </div>
      <div className={styles.searchBox}>
      <input type="text" placeholder="Search categories..." className={styles.searchBar} onChange={onSearchChange} value={categorySearch}/>

    <div className={styles.dropdown}>
   {/*<DropDown/>*/}

    </div>
      <div className={styles.menuContainer}>
      {menuItems.filter(items => items.Category.toLowerCase().includes(categorySearch)).map(menu=> <MenuItems key = {menu.itemId} {...menu} token = {token}/>)}
        </div>

      </div>  
       
    )}


   
const mapStateToProps = state => {

    return{
        menuItems: state.shop.menuItems
    };
    
}

const mapDispatchToProps = dispatch => {

    return{
        getMenuItems: (restaurantId) => dispatch(getMenuItems(restaurantId))
    };
    
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);


