import './App.css'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
// import { Tutorials } from "@/components/tutorials"
// import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

function App() {

  return (
    <>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Experience />
        {/* <Tutorials />
        <Portfolio /> */}
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
