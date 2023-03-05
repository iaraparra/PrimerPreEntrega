import styles from "./itemList.module.css";

const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.container}>{greeting}</div>
  )
}

export default ItemListContainer
