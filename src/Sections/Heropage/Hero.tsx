import Heroimg from '../../assets/Hero-img.svg';
import './Her.css'

const Hero = () => {
  return (
    <div className='heropage'>
      <img src={Heroimg} alt="Hero" />
      <div className='overlay'></div>
      <div className="overlay2"></div>
      <h3>MERO FINANCE</h3>
      <p>Streamline loan applications, automate approval workflows, and enhance customer experience.</p>
    </div>
  )
}

export default Hero