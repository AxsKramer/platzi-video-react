import React, { useState, useEffect, Fragment } from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const getData = async () => {
  const response = await fetch('http://localhost:3000/initialState');
  const data = await response.json();
  return data;
};

const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const result = await getData();
    setVideos(result);
  }, []);

  return (
    <Fragment>
      <Search />
      {
        !videos.mylist ?
          (
            <Categories title='My list'>
              <Carousel>
                {
                  videos.mylist && videos.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
                }
              </Carousel>
            </Categories>
          ) : <Categories title='' />
      }
      <Categories title='Trends'>
        <Carousel>
          {
            videos.trends && videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {
            videos.originals && videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </Fragment>
  );
};

export default Home;