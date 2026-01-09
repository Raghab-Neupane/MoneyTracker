import './NavBar.css'
import Logo from '../../assets/MEROFINANCE.svg'

const NavBar = () => {
  return (
    <>
      <nav className='navbar-content'>
        <img src={Logo} alt='logo' />
        <ul className='Links'>
          <li><a href='#Services'>Services</a></li>
          <li><a href='#aboutus'>About Us</a></li>
          <li><a href='#team'>Team</a></li>
          <button>Get Started!</button>
        </ul>
      </nav>
    </>
  )
}

export default NavBar