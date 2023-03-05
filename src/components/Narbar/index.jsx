import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import image from "./src/Logo_Chucherys.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div>
            <img src={image}  className={styles.logo} />
        </div>
        <nav className={styles.nav} >
            <p className={styles.navItem}>Inicio</p>
            <p className={styles.navItem}>Nuestro Productos</p>
            <p className={styles.navItem}>Contacto</p>
        </nav>
        <div className={styles.cart}>
            <AiOutlineShoppingCart size={30} />
            <p className={styles.cartItem}>3</p>
        </div>
    </div>
  )
}

export default Navbar