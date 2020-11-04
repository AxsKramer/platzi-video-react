import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const getData = async () => {
  const response = await fetch('http://localhost:3000/initialState');
  const data = await response.json();
  return data;
};

const App = () => {

  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const result = await getData();
    setVideos(result);
  }, []);

  return (
    <div className='App'>
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;
