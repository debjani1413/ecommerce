import React from 'react'
import Banner from '../components/banner';
import Header from '../components/header';
import Display from '../components/display';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Header text={'Featured Products'} link={"/featured"} />
      <Display showLimited={true} start={0} end={6} />
      <Header text={'Recommended Products'} link={"/recommended"} />
      <Display showLimited={true} start={8} end={14} />
    </div>
  )
}

export default Home;
