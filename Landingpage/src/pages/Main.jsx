import Navbar from '../components/Navbar/Navbar'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page1 from './Pages'
import './pages.css'    

const Main = () => {
    return(
        <div className='page1'>
        <Navbar/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        </div>
    )
}

export default Main