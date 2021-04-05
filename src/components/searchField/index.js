import {StyledSearchBtn,StyledSearchField,StyledSearchInput} from './style'
import {searchTerm} from '../../actions'
import { connect } from 'react-redux';

function SearchField(props) {
    const searchTermChange = (event) =>{
        props.searchTermAction(event.target.value);
        props.onSearchChange();
    }
    return (
        <StyledSearchField>
	        <StyledSearchInput value={props.value} onChange={searchTermChange} type="search" name="search"  required/>
	        <StyledSearchBtn className="search-btn" type="submit">
		        Search
	        </StyledSearchBtn>
        </StyledSearchField>
    )
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps,{searchTermAction:searchTerm})(SearchField);
