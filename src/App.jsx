import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  )
}

function Header() {
  return (
    <header id="header">
      <img src="res.png" alt="Little Lemon Restaurant Logo" />
      Header
    </header>
  )
}

function HomePage() {
  return (
    <>
      <p>Home</p>
    </>
  )
}