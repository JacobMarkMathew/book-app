import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>
         <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                      <label htmlFor="" className="form-label">BOOK title</label>
                      <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colg-xxl-12">
                            <label htmlFor="" className="form-label">description</label>

                          <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                            <label htmlFor="" className="from-label">prize</label>
                            <input type="text" className="from-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                        <label htmlFor="" className="form-label">category</label>
                        <select name="" id="" className="form-control">
                            <option value="Thriller">thriller</option>
                            <option value="romance">romance</option>
                            <option value="horror">horror</option>
                            
                        </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                        <label htmlFor="" className="form-label">cover</label>
                        <input type="file" name="" id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                            <label htmlFor="" className="form-label">publisher name</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 colg-xxl-6">

                        <button className="btn btn-danger">submitt</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook