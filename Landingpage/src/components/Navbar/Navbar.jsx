import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [changeColor, setchangeColorNav] = useState(false);

    function handleColor() {
        if (window.scrollY >= 25){
            setchangeColorNav(true, AnimationEffect)
        }else{
            setchangeColorNav(false)    
        }
    }
    window.addEventListener('scroll', handleColor)

    return(
        <div className='w-100 d-flex flex-row '>
            <nav className={`w-100 navbar d-flex  ${changeColor ? 'navbarColorChange shadow-sm' : 'navbarColor'}`} style={{height:'100px'}}>
                <div className='w-50 d-flex'>
                    <a href="startbootstrap" className={`fs-4 p-3 ${changeColor ? 'text-dark' : 'text-white'}`} style={{textDecoration:'none', color:'black' , marginLeft:'60px'}}>Start Bootstrap</a>
                </div>
                <div className='d-flex'>
                    <button style={{marginRight:'50px' , width:'120px', height:'50px'}} type="button" className="btn btn-primary SignUp">Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar