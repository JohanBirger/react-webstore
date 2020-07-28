import React from 'react'
import {Link} from 'react-router-dom';
import {Button} from './Button';
import styled from 'styled-components'

export default function HomePage() {
    return (
        <div>
                    <div className="container py-5">
                            {/* title */}
    <div className="row">
          <div className="col-10 mx-auto text center text-slanted textMainBlack my-5">
            <h1>
                Home Page
            </h1>
        </div>
    </div>
                            {/* end title */}
                            {/* product info */}
    <div className="row">
                                {/* Product img*/}

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <img src={img} className="img-fluid" alt="product"/>
        </div>

       
                                {/* Product text*/}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>{/*title*/} </h2>
            <h4 className="textTitle text-capitalize text-muted mt-3 mb-2">
                Under construction <span className="text-capitalize"></span>
            </h4>
            <h4 className="textMainBlack"><strong> </strong>
            </h4>
            <p className="text-capitalize.font-weight-bold.mt-3.mb-0">
                Come back soon for feed and socialmedia display!
            </p>
            <p className="text-muted lead"></p>
            {/*buttons*/}
            <div>
                <Link to='/products'>
                    <Button>
                        Go to products
                    </Button>
                                            
                </Link>

            </div>
        </div>
                                
    </div>
</div>
        </div>
    )
}
