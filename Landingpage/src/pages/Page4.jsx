
const Page4 = () => {
    return(
        <div className="page4 pt-5">
            <div className="d-flex mx-auto p-5">
                <h2 style={{fontWeight:'700'}} className="d-flex mx-auto">What people are saying...</h2>
            </div>

            <div className="Container_page4 d-flex flex-row p-4">
                <div className="d-flex mx-auto p-5 mb-5 res_page4">
                    <div className="d-flex flex-column">
                        <div className="IMage_1 d-flex">
                            <img className="Img1_page4 d-flex mx-auto rounded-circle shadow-lg border-bottom border-3 " src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="" />
                        </div>
                        <div className="d-flex flex-column w-100 mx-auto">
                            <h5 className="d-flex mx-auto" style={{fontWeight:'700'}}>Margaret E.</h5>
                            <p style={{fontWeight:'500'}}>"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="IMage_1 d-flex">
                            <img className="Img1_page4 d-flex mx-auto rounded-circle shadow-lg border-bottom border-3" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="" />
                        </div>
                        <div className="d-flex flex-column w-50 mx-auto">
                            <h5 className="d-flex mx-auto" style={{fontWeight:'700'}}>Fred S.</h5>
                            <p style={{fontWeight:'500', textAlign:'center'}}>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="IMage_1 d-flex">
                            <img className="Img1_page4 d-flex mx-auto rounded-circle shadow-lg border-bottom border-3" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="" />
                        </div>
                        <div className="d-flex flex-column w-50 mx-auto">
                            <h5 className="d-flex mx-auto" style={{fontWeight:'700'}}>Sarah W.</h5>
                            <p style={{fontWeight:'500', textAlign:'center'}}>"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
} 

export default Page4