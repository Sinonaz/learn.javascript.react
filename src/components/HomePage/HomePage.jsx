import { Link } from "react-router-dom"
import styles from "./homePageLink.module.css"

export const HomePage = () => (
	<Link to={"/restaurants"} className={styles.homePageLink}>
		Restaurant list
	</Link>
)
