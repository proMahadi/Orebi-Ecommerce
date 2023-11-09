import React from 'react'
import Banner from '../../components/Banner/Banner'
import Info from '../../components/Info/Info'
import Advertisement from '../../components/Advertisement/Advertisement'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Bestseller from '../../components/Bestseller/Bestseller'
import Sponsor from '../../components/Sponsor/Sponsor'
import Specialoffer from '../../components/Specialoffers/Specialoffer'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Info></Info>
      <Advertisement></Advertisement>
      <NewArrivals></NewArrivals>
      <Bestseller></Bestseller>
      <Sponsor></Sponsor>
      <Specialoffer></Specialoffer>
    </>
  )
}

export default Home