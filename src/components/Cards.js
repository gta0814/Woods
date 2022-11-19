import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  console.log('asdf');
  return (
    <div className='cards'>
      {/* <h1>Check out the works!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/Freedom.jpg'}
              text='Freedom Mobile中文介绍-客服电话，点击查看各门店中文销售专员'
              label='详情'
              path='/Freedom/FreedomPage'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/fido.jpg'}
              text='Fido中文介绍, 中文销售和客服电话，中文门店华人销售专员联系方式'
              label='详情'
              path='/services'
            />
            {/*<CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='大群1'
              label='458人'
              path='/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='大群2'
              label='458人'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='小群'
              label='256人'
              path='/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='啥群'
              label='187人'
              path='/products'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='Holdon买车'
              label='199人'
              path='/sign-up'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='Holdon买车'
              label='199人'
              path='/sign-up'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='Holdon买车'
              label='199人'
              path='/sign-up' 
            />*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
