import '../App.css';
import React, { useState } from 'react';
import axios from '../api/axios-tmdb';
import { connect } from 'react-redux';
import { auth } from "../firebase";
import ProfilePage from './profiles'
import CardStripe from '../components/cardsStripe'
import { mostPopularMovies } from '../actions';
import { moviesByGenresAction } from '../actions';
import tmbdGenres from '../staticData/homePageSections.json'

class MainPage extends React.Component {
    componentDidMount = async () => {
        this.props.mostPopularMovies();
        this.props.moviesByGenresAction();
    }
    render() {
        console.log(this.props.moviesByGenres);
        return (
            <div className="mainPage">
                <div className="navbar__mainPage">
                    <ul>
                        <li>
                            <button>Movies</button>
                            <button>TV Shows</button>
                        </li>
                    </ul>
                </div>
                <CardStripe movies={this.props.popularMovies} title="popular movies"></CardStripe>
                <CardStripe movies={this.props.popularMovies} title="popular movies"></CardStripe>
                <CardStripe movies={this.props.popularMovies} title="popular movies"></CardStripe>

                <button onClick={() => { auth.signOut() }}>SignOut</button>
                {!this.props.profile && <ProfilePage />}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        profile: state.currentProfile,
        popularMovies: state.popularMovies,
        moviesByGenres:state.moviesByGenres
    };
};

export default connect(mapStateToProps, { mostPopularMovies,moviesByGenresAction })(MainPage);
