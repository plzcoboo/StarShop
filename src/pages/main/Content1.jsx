import React from 'react';
import {Content1Style} from './ContentStyle';
import { Link } from 'react-router-dom';
import { MainButton } from '../../styled/Style';

const Content1 = () => {
    return (
        <Content1Style>
        <div className='img-box'>
        <img src="./images/MainVis_5.jpeg" alt="" />
        </div>
        <div className='text-box'>
            <div className='inner-box'>
                <h2>Introducing the best product of 2023!</h2>
                <span> Discover the top Star Wars merchandise of 2023 and make your purchase right now! Head over to buy it</span>
                <MainButton className='go-shop'><Link>Go Shopping</Link></MainButton>
            </div>
        </div>
        </Content1Style>
    );
};

export default Content1;