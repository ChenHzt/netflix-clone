import React from 'react';
import { connect } from 'react-redux';
import { currentProfile, mostPopularMovies, moviesByGenresAction,fetchCurrentProfileStartedWatching} from '../actions';
import '../App.css';
import CardStripe from '../components/cardsStripe';
import { auth,firestore } from "../firebase";
import ProfilePage from './profiles/profiles';

class MainPage extends React.Component {
    componentDidMount = async () => {
        await this.props.currentProfile(JSON.parse(sessionStorage.getItem('currentProfile')));
        await this.props.mostPopularMovies();
        await this.props.moviesByGenresAction();
        await this.props.fetchCurrentProfileStartedWatching(this.props.user.uid,this.props.profile.id);
    }

    render() {
        return (
            <div className="mainPage">
                {
                    this.props.profile &&
                    <div className="">
                        
                        {this.props.startedWatching.length ? <CardStripe caruselType='slide' movies={this.props.startedWatching} title="continue watching"></CardStripe>:null}
                        
                        <CardStripe caruselType='loop' movies={this.props.popularMovies} title="popular movies"></CardStripe>

                        {
                            this.props.moviesByGenres
                                .sort(() => 0.5 - Math.random())
                                .map((movies) => {
                                    return <CardStripe caruselType='loop' movies={movies.movies} title={`${movies.genre.name} movies`}></CardStripe>
                                })
                        }
        
                    </div>
                }
                {!this.props.profile && <ProfilePage />}

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.currentUser,
        profile: state.currentProfile,
        popularMovies: state.popularMovies,
        moviesByGenres: state.moviesByGenres,
        startedWatching: state.startedWatching
    };
};

export default connect(mapStateToProps, { mostPopularMovies, moviesByGenresAction,currentProfile,fetchCurrentProfileStartedWatching})(MainPage);
