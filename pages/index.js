import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../Components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/CardPage"><h1>Card Swipe Test</h1></Link>
      <Link href="/DragAndDrop"><h1>Drag And Drop Test</h1></Link>
    </div>
  )
}
