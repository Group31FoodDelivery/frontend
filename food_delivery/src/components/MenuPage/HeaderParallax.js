import * as React from "react";
import { useEffect, useState } from "react";
import styles from './HeaderParallax.module.css'

export default function MenuPage( ) {
 
 const [offset, setOffset] = useState(0);

useEffect(() => {
  function handleScroll() {
    setOffset(window.pageYOffset);
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [offset]);

return (
  <div className={styles.parallax}>
    <section className={styles.hero}>
      <img
        src="../images/hugo.jpeg"
        alt="test"
        style={{
          filter: `brightness(50%)`,
          transform: `translateY(${offset * 0.5}px)`,
          width: `100%`,
        }}
      />
    </section>
  </div>
)
}
            
       