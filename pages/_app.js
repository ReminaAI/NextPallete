import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Books = [
    {
      title: "ManDog",
      id: 35,
      distance: 4,
      state: "New",
      description: "Lorem Ipsum Color"
    },
    {
      title: "ManDog 2 Electric Boogaloo",
      id: 47,
      distance: 8,
      state: "Used",
      description: "Man Dog The squeekwell"
    },
    {
      title: "ManDog 3, Just Too many",
      id: 78,
      distance: 1,
      state: "Very Used",
      description: "Jesus Christ there are just too many!"
    },
    {
      title: "ManDog 4, The end",
      id: 3,
      distance: 12,
      state: "Ruined",
      description: "The last and most hated book in the series ;)"
    }
  ]










  return <Component books={Books} {...pageProps} />
}

export default MyApp
