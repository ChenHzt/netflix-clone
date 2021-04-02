import '../App.css';
import React, { useState } from 'react';
import axios from '../api/axios-tmdb';
import { connect } from 'react-redux';
import { auth, signInWithGoogle } from "../firebase";
import ProfilePage from './profiles'
import CardStripe from '../components/cardsStripe'
import { mostPopularMovies } from '../actions';

class MainPage extends React.Component {
    componentDidMount = async () => {
        const response = await axios.get('/discover/movie?api_key=2fccd7c26288d8a6ba121a000c6df8ec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        this.props.mostPopularMovies(response.data.results);
    }
    render() {
        // console.log(this.props.popularMovies);
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
        popularMovies: state.popularMovies
    };
};

export default connect(mapStateToProps, { mostPopularMovies })(MainPage);
