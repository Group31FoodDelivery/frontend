import React from 'react'
import styles from './CustomerInfoPage.module.css'

export default function CustomerInfoPage() {
    return (
        <div>
        <div className = {styles.topBar}>
            Your account
        </div>
        
        <div className = {styles.container}>
            <div className = {styles.column}>
            <div className = {styles.info} style = {{marginTop: '20px', fontSize: '20px', marginBottom: '20px'}}>User Information
            </div>
            <div className = {styles.info}>Name:
            </div>
            <div className =  {styles.info}>Email:
            </div>
            <div className =  {styles.info}>Address:
            </div>
            </div>
            <div className = {styles.column}>
            <div className =  {styles.info} style = {{marginTop: '90px'}}>Hessu Hopo
            </div>
            <div className =  {styles.info}>Hessu.Hopo@gmail.com
            </div>
            <div className =  {styles.info}>Dog street 2, Dog town
            </div>
             </div>
        </div>
        <div className = {styles.editInfo}>
            <div className = {styles.info} style = {{marginTop: '20px', fontSize: '20px', marginBottom: '20px'}}>Edit Account</div>
            
            <input placeholder = "Name" className = {styles.inputs}></input>
            <input placeholder = "Email" className = {styles.inputs}></input>
            <input placeholder = "Address" className = {styles.inputs}></input>
            <button className = {styles.submitButton}>Save</button>
           
        </div>
        </div>
    )
}
