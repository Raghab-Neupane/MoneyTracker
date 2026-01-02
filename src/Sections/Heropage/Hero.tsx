import Heroimg from '../../assets/Hero-img.svg';
import './Her.css'

const Hero = () => {
  return (
    <div className='heropage'>
      <img src={Heroimg} alt="Hero" />
      <div className='overlay'></div>
      <h3>MERO FINANCE</h3>
      <p>Streamline loan applications, automate approval workflows, and enhance customer experience.Orion Finance CRM is trusted by leading financial institutions for reliability, speed, and security.</p>
    </div>
  )
}

export default Hero