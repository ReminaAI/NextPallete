import Card from "../../Components/Card";
import styles from "../../styles/card.module.css"
import Link from "next/link"
export default function CardPage({ books }) {
    return (
        <div className={styles.container}>
            <Link href="/"><h1>Fuck GO back!</h1></Link>
            <Card books={books} />
        </div>
    )
}