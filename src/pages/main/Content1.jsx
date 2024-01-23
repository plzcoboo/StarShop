import React from 'react';
import { Link } from 'react-router-dom';
import { MainButton } from '../../styled/Style';
import { ContentStyle } from './ContentStyle';

const Content1 = () => {
    return (
    <div className='inner'>
    <ContentStyle>
     <div className='img-box'>
     <img src="./images/MainVis_5.jpeg" alt="" />
     </div>
     <div className='text-box'>
         <div className='inner-box'>
             <h2>Introducing the best product of 2023</h2>
             <span> Discover the top Star Wars merchandise of 2023 and make your purchase right now! Head over to buy it</span>
             <MainButton className='go-shop'><Link to={'/product'}>Go Shopping</Link></MainButton>
         </div>
     </div>
     </ContentStyle>
    </div>
    );
};

export default Content1;