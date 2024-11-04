import Link from "next/link"
import styles from "./restaurantTab.module.css"

export const RestaurantTab = ({ id, name }) => {
  return (
    <Link className={styles.restaurantTab} href={`/restaurants/${id}`}>
      {name}
    </Link>
  )
}
