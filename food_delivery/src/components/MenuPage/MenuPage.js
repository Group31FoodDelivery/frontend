import React from 'react';
import MenuHeader from './HeaderParallax';
import styles from './MenuPage.module.css';
import MenuItems from './MenuItems';
import { useParams } from 'react-router-dom';

export default function MenuPage(props) {

    var result = useParams();

    const menu = props.menus.find(menu => menu.menuId === result.menuId);
    if(menu == null) {
        return <div>No matching contact</div>
      }

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

      <div className={styles.menuContainer}>
           {menu.map(restaurants => <MenuItems key={menu.menuId.menus} {...menu}/>)} {/*go through the json array and send ONE new array per component*/}
        </div>

      </div>  
       
    )}
