import React from 'react';
import styles from './DropDown.css'

export default function DropDown(){
  return (
<div className="dropdown">
  <button className="dropbtn">Categories</button>
  <div className="dropdown-content">
    <a href="#">Drink</a>
    <a href="#">Main dish</a>
    <a href="#">Extra</a>
  </div>
</div>
  )
}
// class DropDown extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       showMenu: false,
//     };
    
//     this.showMenu = this.showMenu.bind(this);
//     this.closeMenu = this.closeMenu.bind(this);
//   }
  
//   showMenu(event) {
//     event.preventDefault();
    
//     this.setState({ showMenu: true }, () => {
//       document.addEventListener('click', this.closeMenu);
//     });
//   }
  
//   closeMenu(event) {
    
//     if (!this.dropdownMenu.contains(event.target)) {
      
//       this.setState({ showMenu: false }, () => {
//         document.removeEventListener('click', this.closeMenu);
//       });  
      
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.showMenu}>
//           Show menu
//         </button>
        
//         {
//           this.state.showMenu
//             ? (
//               <div
//                 className="menu"
//                 ref={(element) => {
//                   this.dropdownMenu = element;
//                 }}
//               >
//                 <button> Menu item 1 </button>
//                 <button> Menu item 2 </button>
//                 <button> Menu item 3 </button>
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//     );
//   }
// }

