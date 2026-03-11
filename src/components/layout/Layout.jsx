import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="grain-overlay min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 pt-[calc(5rem+env(safe-area-inset-top))] lg:pt-[calc(6rem+env(safe-area-inset-top))]">{children}</main>
      <Footer />
    </div>
  )
}
