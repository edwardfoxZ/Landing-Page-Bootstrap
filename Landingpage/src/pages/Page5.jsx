import { useINputValues } from '../components/Navbar/useState'

const Page5 = () => {

    const [inputVal, setInputVal] = useINputValues('');

    function handleINputValues (event) {
        setInputVal(event.target.value)
    }
    return(
        <>
            <div className="Ready_to_get_started d-flex p-5">
                <div className="res_Ready_to_get_started d-flex flex-column mx-auto p-5">
                    <h2 className="text-white fw-bold d-flex mx-auto p-5">
                        Ready to get started? Sign up now!
                    </h2>
                    <form className="w-100 h-100 form d-flex d-flex">
                        <div className='input-size d-flex mx-auto flex-row gap-4'>
                            <div className='w-100 col-dm-10 fs-2 d-flex mx-auto'>
                                <input onChange={handleINputValues} type="email" className='w-100 h-100 d-flex mx-auto form-input-email form-control p-3 fs-5 res_input_page5' id='inputEmail' placeholder='EmailAddress' />
                            </div>
                            <div className='w-50 d-flex mx-auto'>
                                <a href="#" className={`d-flex btn btn-primary p-4 fw-bold responsive_submit_bu ${inputVal ? 'enable' : 'disabled'}`} tabindex="-1" role="button" aria-disabled="true" >Submit</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page5