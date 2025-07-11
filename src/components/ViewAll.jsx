import React, { useState } from 'react'
import Navbar from './Navbar'


const ViewAll = () => {
  const [bookData, changeBookData] = useState(
    [
      { "bookname": "harry potter", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWzRq6Yk9T4AvPNyJGK_a73YmULMtMDRJ_w&s" },
      { "bookname": "aladhin", "image": "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg" },
      { "bookname": "alice in wonderland", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaj-Cno4PCwYg6WG9HopqIxCVtELGIVXh2pQ&s" },
      { "bookname": "sherlock homles", "image": "https://m.media-amazon.com/images/I/91dDv9WOcFL._UF1000,1000_QL80_.jpg" },
      { "bookname": "tom swayer", "image": "https://m.media-amazon.com/images/I/A1Wad8LO08L._UF1000,1000_QL80_.jpg" },
      

    ]

  )
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {bookData.map(
                (value, index) => {
                  return (

                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                      <div class="card  h-100" >
                        <img src={value.image} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">{value.bookname}</h5>
                          <p class="card-text"></p>
                          <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                      </div>

                    </div>



                  )
                }
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll