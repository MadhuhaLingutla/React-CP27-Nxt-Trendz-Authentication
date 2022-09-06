// Write your JS code here

import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-website-logo"
    />
    <ul className="nav-container">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products</li>
      <li className="nav-item">Cart</li>
      <li>
        <button className="logout-button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </div>
)

export default Header
