import Link from "next/link"
import styles from "./menuItem.module.css"

export const MenuItem = ({ id, name }) => {
  return (
    <li className={styles.menuItem}>
      <Link href={`/dish/${id}`}>{name}</Link>
    </li>
  )
}
