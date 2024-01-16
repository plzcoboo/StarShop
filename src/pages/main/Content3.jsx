import React from 'react';
import { Content3Style } from './ContentStyle';
import { Link } from 'react-router-dom';
import { MainButton } from '../../styled/Style';

const Content3 = () => {
    return (
        <Content3Style>
        <div className='text-box'>
            <div className='inner-box'>
                <h2>Introducing the best product of 2023!</h2>
                <span> Discover the top Star Wars merchandise of 2023 and make your purchase right now! Head over to buy it</span>
                <MainButton className='go-shop'><Link>Go Shopping</Link></MainButton>
         </div>
        </div>
        <div className='img-box'>
        <img src="./images/MainVis_4.jpeg" alt="" />
        </div>
        </Content3Style>
    );
};

export default Content3;