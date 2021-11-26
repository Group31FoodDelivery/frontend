import React from 'react';
import MenuHeader from './HeaderParallax';
import styles from './MenuPage.module.css';
import MenuItems from './MenuItems';
import DropDown from './DropDown';
import { useParams } from 'react-router';

export default function MenuPage(props) {

    const menuTestData = [  {
        id: 1,
        name: 'hugo carrot pie',
        description: 'yummy carrot pie',
        price: 2
      },
      {
        id: 1,
        name: 'hugo cucumber pie',
        description: 'yummy cucumber pie',
        price: 4.50
      },
      {
        id: 2,
        name: 'Luckiefun chocolate pie',
        description: 'yummy chocolate pie',
        price: 3
      },
      {
        id: 3,
        name: 'Friends meat pie',
        description: 'yummy meat pie',
        price: 12
      },
      {
        id: 4,
        name: 'M6 buttorchothot pie',
        description: 'yummy b-pie',
        price: 20
      }
      ]

    const {restaurantId} = useParams();

    
    return (
        <div>
            {/* <div className={styles.header}> */}
            <MenuHeader/>
            <div className={styles.header}>
        <div className={styles.name}>{
        props.restaurants.filter(f => f.restaurantId == restaurantId).map(r => <div>{r.Name}</div>)
        }</div>
        <div className={styles.description}>{
        props.restaurants.filter(f => f.restaurantId == restaurantId).map(r => <div>{r.Description}</div>)
        }</div>

       <div className={styles.restaurantInfo}>
           <div className={styles.address}>{
        props.restaurants.filter(f => f.restaurantId == restaurantId).map(r => <div>{r.Address}</div>)
        }
       </div>
        <div className={styles.type}>{
        props.restaurants.filter(f => f.restaurantId == restaurantId).map(r => <div>{r.Type}</div>)
        }
    </div>
        <div className={styles.rating}>{
        props.restaurants.filter(f => f.restaurantId == restaurantId).map(r => <div>{r.Rating}</div>)
        }</div>
</div>
      </div>

{/* DropDown */}

<div className={styles.dropdown}>
    <DropDown/>

</div>

      <div className={styles.menuContainer}>
         {menuTestData.filter(f => f.id == restaurantId).map(menu => <MenuItems key = {menu.id} {...menu}/>)}
        </div>

      </div>  
       
    )}
