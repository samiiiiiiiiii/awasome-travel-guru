import React from 'react';
import Header from '../Header/Header';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
import place from '../../FakeData/Place';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner_area">
            <div className="menu_area">
                <Header></Header>
            </div>
            <div className="banner_wrapper">
                    <div className='container'>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4">
                                <div className='banner_info'>
                                    <h1>Cox's bazar</h1>
                                    <p>But, over the years Cox's Bazar has been transformed into a busy tourist city. It has more international visitors now than ever. The availability of more recreational facilities is attracting more tourists every year</p>
                                    <button className='btn menu_btn'>Booking <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                            
                            <div className="col-md-8 d-flex ">
                                {
                                    place.map(place => 
                                    <div className='banner_content'>
                                        <div className='banner_img'>
                                               <Link to={`/booking/${place.id}`}><img src={place.img} alt=""/></Link> 
                                            <div className='banner-text'>
                                            <h2>{place.name}</h2>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;