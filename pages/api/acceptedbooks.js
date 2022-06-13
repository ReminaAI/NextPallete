import BookSort, { getBooks } from "../../services/BookSort"

export default async function books(req, res) {

  if (req.method === "POST") {
    const {
      title,
      id,
      distance,
      state,
      description
    } = req.body
    return BookSort(req.body, res)
  }

  if (req.method === "GET") {
    return getBooks(res)
  }
}


