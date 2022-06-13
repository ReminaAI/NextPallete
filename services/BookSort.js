let Books = []

export default function BookSort(body, res) {
    if (!Books.some(e => e.id === body.id)) {
        Books.push(body)
        return res.status(200).send("Added")
    } else {
        return res.status(400).send("Book Already Exists")
    }
}
export function getBooks(res) {
    return res.status(200).send(Books)
} 