import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Beers extends React.Component {
    
        state = {
            beers: [],
            loaded: false
        };
    

     componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data)
        this.setState({ Beers: response.data})
      })

    }
    render() {
        const displaybeers = this.state.beers.map(beer => {
            return(
                <div key={beer._id}>
                <div className="d-flex mb-3">
                    <div className="beerImg-container">
                        <img className="beer-img" src={beer.image_url} />
                    </div>
                    <div className="ml-1 text-left d-flex flex-column justify-content-center">
                        <Link to={`/beers/${beer._id}`}><h4 className="m-0 pb-3">{beer.name}</h4></Link>
                        <h5 className="m-0 text-muted font-weight-normal pb-1">{beer.tagline}</h5>
                        
                    </div>
                </div>
                <hr/>
                </div>
            )
        })
        return(
            <div>
                <div>
                    {displaybeers}
                </div>
            </div>
        )
    }
}

export default Beers;