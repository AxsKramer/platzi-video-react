import React, { useState, useEffect, Fragment } from 'react';
import {connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({myList, trends, originals}) => {

  return (
    <Fragment>
      <Search />
      {
        myList &&
          (
            <Categories title='My list'>
              <Carousel>
                {
                  myList.map((item) => <CarouselItem key={item.id} {...item} isList/>)
                }
              </Carousel>
            </Categories>
          ) 
      }
      <Categories title='Trends'>
        <Carousel>
          {
            trends && trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {
            originals && originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps)(Home);