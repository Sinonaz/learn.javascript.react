import Link from "next/link"
import styles from "./homePageLink.module.css"

export const HomePage = () => (
  <Link href={"/restaurants"} className={styles.homePageLink}>
    Restaurant list
  </Link>
)
