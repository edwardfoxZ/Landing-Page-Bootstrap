import './Pages.css'
import '../components/Navbar/responsiveAll.css'
import { useINputValues } from '../components/Navbar/useState'


const Page1 = () => {

    const [inputVal, setInputVal] = useINputValues()

    function handleValues(event) {
        setInputVal(event.target.value)
    }

    return(
        <div className='page1'>
            <div className='page1 d-flex flex-column p-5'>
                <div style={{width:'50%'}} className='d-flex mx-auto'>
                    <h1 className='d-flex p-4 text-center' style={{marginTop:'150px' ,fontWeight:'500' ,color:'white',fontSize:'3rem' ,lineHeight:'1.1',fontFamily:'fantasy'}}>Generate more leads with a professional landing page!</h1>
                </div>

                <form className="w-100 h-100 form d-flex mx-auto mt-5 d-flex" style={{marginBottom:'60px'}}>
                    <div className='input-size d-flex mx-auto flex-row gap-4'>
                        <div className='w-100 col-dm-10 fs-2 d-flex mx-auto'>
                            <input onChange={handleValues} type="email" className='w-100 h-100 d-flex mx-auto form-input-email form-control p-3 fs-5' id='inputEmail' placeholder='EmailAddress' />
                        </div>
                        <div className='w-25 d-flex'>
                            <a href="#" className={`d-flex btn btn-primary p-4 fw-bold responsive_submit_bu ${inputVal ? 'enable' : 'disabled'}`} tabindex="-1" role="button" aria-disabled="true" >Submit</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Page1