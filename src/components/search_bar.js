import React from 'react'



class SearchBar extends React.Component {

    state = {
        term: ''
    }


    render(){

       

        return (

        <div className="search-bar">
            <input onChange={(event=>this.setState({term: event.target.value}))} />
            <button onClick={()=>this.props.searching(this.state.term)}>search!!!</button>
        </div>

        )

    }
}

export default SearchBar