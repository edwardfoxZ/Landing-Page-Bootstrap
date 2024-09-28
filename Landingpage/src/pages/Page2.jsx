import {BsWindow ,BsLayers ,BsTerminal} from 'react-icons/bs'

const Page2 = () => {
    return(
        <>
            <div className='page2 d-flex'>
                <div className='page2-container d-flex flex-row mx-auto' style={{gap:'120px', marginTop:'120px', marginBottom:'120px'}}>
                    <div className='d-flex flex-column'>
                        <i className='d-flex mx-auto' style={{fontSize:'60px',color:'blue'}}><BsWindow/></i>
                        <h2 className='d-flex mx-auto'style={{lineHeight:'1.2'}}>Fully Responsive</h2>
                        <p className='w-50 d-flex mx-auto text-break text-center text-light-emphasis' style={{fontSize:'20px', fontWeight:'lighter'}}>This theme will look great on any device, no matter the size!</p>
                    </div>
                    <div className='d-flex flex-column '>
                        <i className='d-flex mx-auto' style={{fontSize:'60px',color:'blue'}}><BsLayers/></i>
                        <h2 className='d-flex mx-auto res_direction'style={{lineHeight:'1.2'}}>Bootstrap 5 Ready</h2>
                        <p className='w-50 d-flex mx-auto text-break text-center text-light-emphasis' style={{fontSize:'20px', fontWeight:'lighter'}}>Featuring the latest build of the new Bootstrap 5 framework!</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <i className='d-flex mx-auto' style={{fontSize:'60px',color:'blue'}}><BsTerminal/></i>
                        <h2 className='d-flex mx-auto' style={{lineHeight:'1.2'}}>Easy to Use</h2>
                        <p className='w-50 d-flex mx-auto text-break text-center text-light-emphasis' style={{fontSize:'20px', fontWeight:'lighter'}}>Ready to use with your own content, or customize the source files!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2