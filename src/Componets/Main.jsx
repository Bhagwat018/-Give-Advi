import React from 'react'
import './Main.css'
import Main3 from './Main3'
const Main = () => {
  return (
    <div>
      <div className="contanier">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className='same'  id='rama'> Welcome </h4>
                        <h1 className='same' id='rama1'>Create must‑click Your pages</h1>
                        <p className='same'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                    <div className="col-lg-6">
                        <img id='imggg' src="https://laracasts.com/images/signup-banner-main-illustration@2x.png" alt="server problem" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                         <Main3/>
                    </div>
                    </div>
            </div>
  </div>
    </div>
  )
}

export default Main
