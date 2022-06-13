import { useEffect, useState } from "react"
import styles from "../styles/card.module.css"
export default function Card({ books }) {
    const [pressed, setPressed] = useState(false)
    const [index, setIndex] = useState(0)
    const Books = books
    const [BeakBooks, setBeakBooks] = useState([])
    const [wantedBooks, setWantedBooks] = useState([])

    useEffect(() => {
        const Add = async () => {
            const res = await fetch('/api/acceptedbooks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Books[index])
            })
        }



        const handleClick = (ev) => {
            if ((ev.key === "a" || ev.key === "ArrowLeft") && !pressed && index < Books.length) {
                //setWantedBooks(prev => prev.filter(e => e.id !== Books[index].id))
                setIndex(prev => prev + 1)
            }
            if ((ev.key === "d" || ev.key === "ArrowRight") && !pressed && index < Books.length) {
                if (!wantedBooks.some((e) => e.id === Books[index].id)) {
                    Add()
                    Get()
                    setWantedBooks([...wantedBooks, Books[index]])
                }

                setIndex(prev => prev + 1)
            }
            setPressed(true)
        }
        const removeClick = () => {
            setPressed(false)
        }


        document.addEventListener("keydown", handleClick)
        document.addEventListener("keyup", removeClick)
        return () => {
            document.removeEventListener("keydown", handleClick)
            document.removeEventListener("keyup", removeClick)
        }
    }, [pressed])

    const Get = async () => {
        const res = await fetch('/api/acceptedbooks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        setWantedBooks(await res.json())
        wantedBooks[Symbol.iterator] = function* () { };
        setBeakBooks([...wantedBooks])
        console.log(BeakBooks);
    }
    return (
        <div>
            {
                index <= Books.length - 1 ?
                    <div className={[styles.card].join(" ")}>
                        <h1>{Books[index].title}</h1>
                        <h2>{Books[index].id}</h2>
                        <h3>{Books[index].distance}</h3>
                        <h3>{Books[index].state}</h3>
                        <p>{Books[index].description}</p>
                    </div> :
                    <div>
                        <h1>Congratulations!!</h1>
                        <h3>You've seen all the books people have to offer!<br />Please wait for more people to add their books to the site ;)</h3>
                    </div>
            }
            <button disabled={index <= 0} onClick={() => setIndex(prev => prev - 1)}>Undo</button>
            <button onClick={() => console.log(wantedBooks, index)}>Check Books</button>
            <button onClick={() => Get()}>CheckBackEnd</button>
            {BeakBooks.map((e) => {
                return (
                    <div key={e.id}>
                        <p>{e.title}</p>
                    </div>
                )
            })}
        </div>
    )
}