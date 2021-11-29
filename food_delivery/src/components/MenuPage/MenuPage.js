import React from 'react';
import MenuHeader from './HeaderParallax';
import styles from './MenuPage.module.css';
import MenuItems from './MenuItems';
import DropDown from './DropDown';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';


export default function MenuPage(props) {

    const [menuData, setMenuData] = React.useState([]);

    const {restaurantId} = useParams(); //Takes the id which is in the url /menupages/:restaurantId (App.js)
    
    useEffect(() => {
       
        try {
        
            axios.get('/restaurants/menuitem/'+ restaurantId, //sends a request and waits til the response is fetched
            
            ).then(response => {
              //console.log(response.data);
              setMenuData(response.data);
              console.log(props);
 
            })
            //sets the promise response object to restaurantData
      
            console.log(restaurantId);
            
            
          } catch(err) {
            console.log(err);
          } 
    }, [])
    

    
    return (
        <div>
            {/* <div className={styles.header}> */}
            <MenuHeader/>
        <div className={styles.header}>
        <div className={styles.name}>
          {props.restaurantData.filter(info => info.restaurantId == restaurantId).map(info => <div>{info.Name}</div>)}  
    </div>
    <div className = {styles.container}>
        <div className={styles.description}>
        {props.restaurantData.filter(info => info.restaurantId == restaurantId).map(info => <div>{info.Description}</div>)}
        </div>

       <div className={styles.restaurantInfo}>
           <div className={styles.address}>
           {props.restaurantData.filter(info => info.restaurantId == restaurantId).map(info => <div>{info.Address}</div>)}     
       </div>
        <div className={styles.type}>
        {props.restaurantData.filter(info => info.restaurantId == restaurantId).map(info => <div>{info.Type}</div>)}
        </div>
        <div className={styles.rating}>
        {props.restaurantData.filter(info => info.restaurantId == restaurantId).map(info => <div>{info.Rating}</div>)}
        </div>
        </div>
    </div>
      </div>

{/* DropDown */}

<div className={styles.dropdown}>
    <DropDown/>

</div>

      <div className={styles.menuContainer}>
      {menuData.map(menu=> <MenuItems key = {menu.id} {...menu}/>)}
        {/* {menuTestData.filter(f => f.id == restaurantId).map(menu => <MenuItems key = {menu.id} {...menu}/>)}*/}
        </div>

      </div>  
       
    )}


   