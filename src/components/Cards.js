import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  console.log('asdf');
  return (
    <div className='cards'>
      <h1>Check out the works!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Recently got a place and didn’t know what to do with my 100 pairs of shoes. Right from the start my experience with Royal Woods Engineering Inc. was great.'
              label='LivingRoom'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='We decided to do a little upgrade to our pantry. After & Before pictures by @royalwoodsinc. '
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Kenneth was a pleasure to work with and was extremely professional. He listened to my needs for the project, and was very honest and reasonable with his estimate. He worked efficiently and was trustworthy in my home. Kenneth paid great attention to detail and finished the job properly.  I would recommend him for any project and am looking forward to hiring him for more work in my house!'
              label='Kitchen'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Kenneth is so amazing at what he does! He built us a custom closet which was always my dream and I couldn’t be more happy and thankful with the results!'
              label='BedRoom'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text=''
              label='Dining'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
