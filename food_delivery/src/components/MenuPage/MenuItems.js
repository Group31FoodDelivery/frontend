import React from 'react';
import Restaurants from '../Restaurants/Restaurants';
import styles from './MenuItems.module.css'
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';
import { useEffect } from 'react';
import jwt from 'jwt-decode';

function MenuItems(props) {
//   const menuData = map.retaurants((restaurants))

    const {addToCart} = props;
    const {token} = props;

    useEffect(() => {

        console.log(token)
    }, [])

    const ShowItems = () => {

        if(token) {
            const user = jwt(token);
            if(user.hasOwnProperty("manager")) {
           
                return (
                    <div className={styles.container}>
                        <div><img className = {styles.image}  src = {`./images/${props.image}`} alt=""></img></div>
                  <div className ={styles.name}>{props.ItemName}</div>
                  <div className={styles.category}> {props.Category}</div>
                  <div className={styles.description}>{props.Description}
                  </div>
                  <div className={styles.bottom}>
                  <div className={styles.price} style = {{marginLeft: "40px"}}> {props.Price} €</div>
                  </div>
                    </div>
                )
            
            } else if(user.hasOwnProperty("customer")) {
                return (
                    <div className={styles.container}>
                        <div><img className = {styles.image}  src = {`./images/${props.image}`} alt=""></img></div>
                  <div className ={styles.name}>{props.ItemName}</div>
                  <div className={styles.category}> {props.Category}</div>
                  <div className={styles.description}>{props.Description}
                  </div>
                  <div className={styles.bottom}>
                  <div className={styles.price}> {props.Price} €</div>
                  <button className={styles.cart} onClick={() => addToCart(props.itemId)}>+</button>
                  </div>
                  </div>
                )
            }

        } else {
            return (
                <div className={styles.container}>
                        <div><img className = {styles.image}  src = {`./images/${props.image}`} alt=""></img></div>
                  <div className ={styles.name}>{props.ItemName}</div>
                  <div className={styles.category}> {props.Category}</div>
                  <div className={styles.description}>{props.Description}
                  </div>
                  <div className={styles.bottom}>
                  <div className={styles.price}> {props.Price} €</div>
                  </div>
                    </div>
            )
        }
    }

        return(
            <div>
                <ShowItems/>
            </div>
        )
 
    }

    const mapDispatchToProps = dispatch =>
    {

        return{

            addToCart: (itemId) => dispatch(addToCart(itemId))

        };

    }

    export default connect(null, mapDispatchToProps)(MenuItems)