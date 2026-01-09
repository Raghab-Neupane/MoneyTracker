import { useEffect, useState } from 'react'
import './Example.css'

const Exmp = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
        <h3 className='topic'>Dashboard Section</h3>
    </div>
  )
}

export default Exmp