import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="big">See you at<br />the <span>tropics.</span> 🌴</div>
          <div className="foot-links">
            <div>
              <h5>Explore</h5>
              <Link to="/about">About Us</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/contact">Visit Us</Link>
            </div>
            <div>
              <h5>Connect</h5>
              <a href="https://www.facebook.com/p/The_tropical-cafe-100095531888080/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
              <a href="https://maps.google.com/?q=The+Tropical+Cafe+Brahmagiri+Udupi" target="_blank" rel="noreferrer">Google Maps</a>
            </div>
            <div>
              <h5>Order</h5>
              <a href="https://www.zomato.com/manipal/the-tropical-cafe-brahmagiri-udupi" target="_blank" rel="noreferrer">Zomato</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Swiggy</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 The Tropical Cafe, Udupi</span>
          <span>Crafted by METRIKA</span>
        </div>
      </div>
    </footer>
  )
}
