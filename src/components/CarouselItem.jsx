import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {setFavoriteAction, deleteFavoriteAction} from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = ({ id, cover, title, year, contentRating, duration, setFavorite, deleteFavorite, isList }) => {

  const handleSetFavorite = () => setFavorite({id, cover, title, year, contentRating, duration});
  const handleDeleteFavorite = (id) => deleteFavorite(id)

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img 
              className='carousel-item__details--img' 
              src={playIcon} 
              alt='Play Icon' 
            />
          </Link>
          {
            isList 
              ? (
                <img 
                  className='carousel-item__details--img' 
                  src={removeIcon}
                  alt='Remove Icon' 
                  onClick={() => handleDeleteFavorite(id)}  
                />
              )
              : (
                <img 
                  className='carousel-item__details--img' 
                  src={plusIcon}
                  alt='Plus Icon' 
                  onClick={handleSetFavorite}  
                />
              )
          }
          
          
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} minutes`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite: setFavoriteAction,
  deleteFavorite: deleteFavoriteAction
}

export default connect(null, mapDispatchToProps)(CarouselItem);
