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
              src= {process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='CarPool群'
              label='500人'
              path='/services'
            />
            <CardItem
              src= {process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='大群'
              label='458人'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='小群'
              label='256人'
              path='/services'
            />
            <CardItem
              src= {process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='啥群'
              label='187人'
              path='/products'
            />
            <CardItem
              src= {process.env.PUBLIC_URL + '/images/QR.jpg'}
              text='Holdon买车'
              label='199人'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
