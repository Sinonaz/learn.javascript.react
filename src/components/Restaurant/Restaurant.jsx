import Link from "next/link"
import styles from "./restaurant.module.css"

export const Restaurant = ({ id, name }) => {
  return (
    <>
      <h2 className={styles.name}>{name}</h2>

      <div className={styles.links}>
        <Link href={`/restaurants/${id}/menu/`}>Menu</Link>

        <Link href={`/restaurants/${id}/reviews/`}>Reviews</Link>
      </div>
    </>
  )
}
