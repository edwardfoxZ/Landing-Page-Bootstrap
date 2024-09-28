

const Page3 = () => {
    return(
        <>
        <div className="page3 d-flex">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row Container_page3">
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center mx-auto" style={{marginLeft:'100px', marginRight:'0'}}>
                        <h2 style={{fontWeight:'600'}}>Fully Responsive Design</h2>
                        <p style={{fontSize:'20px', fontWeight:'lighter' ,width:'60%', marginBottom:'0'}}>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                    <div className="Img1-container d-flex justify-content-center">
                        <img style={{width:'100%' , height:'250%'}} src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg" alt="" />
                    </div>
                </div>
                <div className="d-flex flex-row Container_page3">
                    <div className="Img1-container">
                        <img style={{width:'100%' , height:'250%'}} src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg" alt="" />
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center mx-auto" style={{marginLeft:'100px', marginRight:'0', minWidth:'1%'}}>
                        <h2 style={{fontWeight:'600'}}>Updated For Bootstrap 5</h2>
                        <p  style={{fontSize:'20px', fontWeight:'lighter' ,width:'60%', marginBottom:'0'}}>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="d-flex flex-row Container_page3">
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center mx-auto" style={{marginLeft:'100px', marginRight:'0'}}>
                        <h2 style={{fontWeight:'600'}}>Easy to Use & Customize</h2>
                        <p style={{fontSize:'20px', fontWeight:'lighter' ,width:'60%', marginBottom:'0'}}>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                    <div className="Img1-container d-flex justify-content-center">
                        <img style={{width:'100%' , height:'250%'}} src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Page3