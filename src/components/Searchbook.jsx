import React from 'react'
import Navbar from './Navbar'

const Searchbook = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                      <div className="row">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                         <label htmlFor="" className="form-label">BOOK TITLE</label>
                         <input type="text" className="form-control" />


                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                         <button className="btn btn-danger">submitt</button>


                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbook