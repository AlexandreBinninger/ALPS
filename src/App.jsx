import Hero from './components/Hero.jsx'
import Teaser from './components/Teaser.jsx'
import Video from './components/Video.jsx'
import Abstract from './components/Abstract.jsx'
import Method from './components/Method.jsx'
import Results from './components/Results.jsx'
import Comparisons from './components/Comparisons.jsx'
import BibTeX from './components/BibTeX.jsx'
import Acknowledgments from './components/Acknowledgments.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-900">
      <main className="mx-auto max-w-4xl px-6 pt-6 pb-12 md:px-8 md:pt-8 md:pb-16">
        <Hero />
        <Teaser />
        <Video />
        <Abstract />
        <Method />
        <Results />
        <Comparisons />
        <BibTeX />
        <Acknowledgments />
      </main>
      <Footer />
    </div>
  )
}
