import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="grain-overlay min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 pt-20 lg:pt-24">{children}</main>
      <Footer />
    </div>
  )
}
