/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { currentProfile,fetchCurrentProfileWatchList, fetchCastomizedMoviesList, fetchCurrentProfileStartedWatching, mostPopularMovies, moviesByGenresAction } from '../actions';
import '../App.css';
import CardStripe from '../components/cardsStripe';
import ProfilePage from './profiles/profiles';

function MainPage(props) {
    const getCustomProfileMoviesData = async () => {
        if (props.profile) {
            await props.fetchCastomizedMoviesList(props.user.uid, props.profile.id);
            await props.fetchCurrentProfileStartedWatching(props.user.uid, props.profile.id);
            await props.fetchCurrentProfileWatchList(props.user.uid, props.profile.id);
        }
    }

    const initializeData = async () => {
        await props.currentProfile(JSON.parse(sessionStorage.getItem('currentProfile')));
        props.popularMovies.length >0 ? null: await props.mostPopularMovies();
        props.moviesByGenres.length >0? null: await props.moviesByGenresAction();
        await getCustomProfileMoviesData()
    }

    useEffect(() => {
        initializeData();
    }, []);


    useEffect(() => {
        getCustomProfileMoviesData()
    }, [props.profile])


    return (
        <div className="mainPage">
            {
                props.profile &&
                <div className="">

                    {props.startedWatching.length ? <CardStripe caruselType='slide' movies={props.startedWatching} title="continue watching"></CardStripe> : null}

                    <CardStripe caruselType='loop' movies={props.popularMovies} title="popular movies"></CardStripe>

                    {
                        props.castomizedMoviesLists
                            .map((moviesList) => {
                                return <CardStripe caruselType='loop' movies={moviesList.moviesList} title={`${moviesList.title} movies`}></CardStripe>
                            })
                    }
                    {
                        props.moviesByGenres
                            .map((movies) => {
                                return <CardStripe caruselType='loop' movies={movies.movies} title={`${movies.genre.name} movies`}></CardStripe>
                            })
                    }

                </div>
            }
            {!props.profile && <ProfilePage />}

        </div>
    )

}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        profile: state.currentProfile,
        popularMovies: state.popularMovies,
        moviesByGenres: state.moviesByGenres,
        startedWatching: state.startedWatching,
        castomizedMoviesLists: state.castomizedMoviesLists,
        watchList:state.watchList
    };
};

export default connect(mapStateToProps, { fetchCurrentProfileWatchList,fetchCastomizedMoviesList, mostPopularMovies, moviesByGenresAction, currentProfile, fetchCurrentProfileStartedWatching })(MainPage);
