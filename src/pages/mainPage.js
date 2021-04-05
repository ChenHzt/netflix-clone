import React from 'react';
import { connect } from 'react-redux';
import { currentProfile, mostPopularMovies, moviesByGenresAction } from '../actions';
import '../App.css';
import CardStripe from '../components/cardsStripe';
import { auth,firestore } from "../firebase";
import ProfilePage from './profiles';
class MainPage extends React.Component {
    componentDidMount = async () => {
        console.log(`I'm in main page`);
        this.props.currentProfile(JSON.parse(sessionStorage.getItem('currentProfile')));
        this.props.mostPopularMovies();
        this.props.moviesByGenresAction();
    }

    addMovieToProfileList = async (Movie) =>{
        const userDocument = await firestore.doc(`users/${this.props.user.uid}`).set();
    }

    render() {
        return (
            <div className="mainPage">
                {
                    this.props.profile &&
                    <div className="">
                        
                        <CardStripe movies={this.props.popularMovies} title="popular movies"></CardStripe>

                        {
                            this.props.moviesByGenres
                                .sort(() => 0.5 - Math.random())
                                .map((movies) => {
                                    return <CardStripe movies={movies.movies} title={`${movies.genre.name} movies`}></CardStripe>
                                })
                        }
        
                        {/* <button onClick={() => { auth.signOut(); sessionStorage.removeItem(currentProfile); }}>SignOut</button> */}
                    </div>
                }
                {!this.props.profile && <ProfilePage />}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // user: state.currentUser,
        profile: state.currentProfile,
        popularMovies: state.popularMovies,
        moviesByGenres: state.moviesByGenres
    };
};

export default connect(mapStateToProps, { mostPopularMovies, moviesByGenresAction,currentProfile })(MainPage);
