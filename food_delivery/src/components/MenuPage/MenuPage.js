import React from 'react';
import MenuHeader from './HeaderParallax';
import styles from './MenuPage.module.css';
import MenuItems from './MenuItems';
import DropDown from './DropDown';

export default function MenuPage(props) {
    return (
        <div>
            {/* <div className={styles.header}> */}
            <MenuHeader/>
            <div className={styles.header}>
        <div className={styles.name}>Luckiefun's Sushi Buffet Oulu</div>
        <div className={styles.description}>Tarjolla on erinomaista ruokaa kaudelle ominaisista aineksista, jotka saamme läheltä meitä järkevästi ja vastuullisesti.
       </div>

       <div className={styles.restaurantInfo}>
           <div className={styles.address}>Rantakatu 4, 90100 Oulu
       </div>
        <div className={styles.type}>Fine dining
    </div>
        <div className={styles.rating}>5/5</div>
</div>
      </div>

{/* DropDown */}

<div className={styles.dropdown}>
    <DropDown/>

</div>

      <div className={styles.menuContainer}>
           {props.restaurants.map(restaurants => <MenuItems key={restaurants.id.menu} {...restaurants}/>)} {/*go through the json array and send ONE new array per component*/}
        </div>

      </div>  
       
    )}
