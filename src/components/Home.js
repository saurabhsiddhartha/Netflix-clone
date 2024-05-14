
import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { ImSearch } from 'react-icons/im'; // Correct import for ImSearch icon
import './home.css'
import axios from 'axios';

// Api fetching const 

const api_key = 'c7d7630c06dd03a71d8966d402b01910'
const url = 'https://api.themoviedb.org/3/movie'
const img_url = 'https://image.tmdb.org/t/p/w500'
const popular = 'popular'
const upcoming = 'upcoming'
const topRatedMovies = 'top_rated'
const nowPlaying = 'now_playing'
const genre = 'genre'


 
const Card = ({ img }) => {
    return (
        <img className="card" src={img} alt="cover" />
    );
};




const Row = ({ title, arr = [{}] }) => {
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="card-img">
                {
                    arr.map((item, index) => (
                        <Card key={index} img={`${img_url}/${item.poster_path}`} />
                    ))
                }
            </div>
        </div>
    );
};


const Home = () => {

    const [upComingMovies, setUpcomingMoives] = useState([])
    const [popularMovies, setpopularMovies] = useState([])
    const [topRated, setTopRated] = useState([])
    const [nowPlayingMovies, setNowPlaying] = useState([])
    const [genreAll, setGenreAll] = useState([])

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const { data } = await axios.get(`${url}/${upcoming}?api_key=${api_key}&page=2`);
                setUpcomingMoives(data.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchUpcoming();


        const fetchPopular = async () => {
            try {
                const { data } = await axios.get(`${url}/${popular}?api_key=${api_key}&page=2`);
                setpopularMovies(data.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchPopular();

        const fetchtopRated = async () => {
            try {
                const { data } = await axios.get(`${url}/${topRatedMovies}?api_key=${api_key}&page=2`);
                setTopRated(data.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchtopRated();

        const fetchLatest = async () => {
            try {
                const { data } = await axios.get(`${url}/${nowPlaying}?api_key=${api_key}`);
                setNowPlaying(data.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchLatest();

        const fetchGenre = async () => {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`);
                console.log(data.genres);
                setGenreAll(data.genres); // Corrected key to 'genres'
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGenre();


    }, []);


    return (
        <section className="home">
            <div
                className="banner"
                style={{
                    backgroundImage: popularMovies[0] ? `url(${img_url}/${popularMovies[1].poster_path})` : "none"
                }} 
            >
                <h1>{popularMovies[0] && popularMovies[1].original_title}</h1>
                <p> {popularMovies[0] && popularMovies[0].overview}</p>

            </div>


            <Row title={"Popular On Netflix"} arr={popularMovies} />
            <Row title={"Upcoming Moives"} arr={upComingMovies} />
            <Row title={"Top Rated"} arr={topRated} />
            <Row title={"Now Playing"} arr={nowPlayingMovies} />

            <div className='genreBox'>
                {genreAll.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                ))}
            </div>


        </section >
    );
};

export default Home;
