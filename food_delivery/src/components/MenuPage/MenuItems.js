import React from 'react';
import Restaurants from '../Restaurants/Restaurants';
import styles from './MenuItems.module.css'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

function MenuItems(props) {
//   const menuData = map.retaurants((restaurants))

    const {addToCart} = props;

    return (
        <div className={styles.container}>
            <div><img className = {styles.image}  src = {`./images/${props.image}`} alt=""></img></div>
      <div className ={styles.name}>{props.ItemName}</div>
      <div className={styles.description}>{props.Description}
      </div>
      <div className={styles.bottom}>
      <div className={styles.price}> {props.Price} €</div>
      <button className={styles.card} onClick={() => addToCart(props.itemId)}>+</button>
      </div>
        </div>
    )}

    const mapDispatchToProps = dispatch =>
    {

        return{

            addToCart: (itemId) => dispatch(addToCart(itemId))

        };

    }

    export default connect(null, mapDispatchToProps)(MenuItems)