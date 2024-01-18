import React from 'react';
import { Link } from 'react-router-dom';
import { MainButton } from '../../styled/Style';
import { ContentStyle } from './ContentStyle';

const Content3 = () => {
    return (
        <div className='inner'>
        <ContentStyle style={{marginTop:'100px'}}>
        <div className='text-box'>
            <div className='inner-box'>
                <h2>Experience the lightsaber that was once only seen in movies</h2>
                <span>The lightsaber from the Star Wars movies is now available for sale on our product page, and it's selling like hotcakes!</span>
                <MainButton className='go-shop'><Link>Go Shopping</Link></MainButton>
         </div>
        </div>
        <div className='img-box'>
        <img src="./images/MainVis_2.jpg" alt="" />
        </div>
        </ContentStyle>
        </div>
    );
};

export default Content3;