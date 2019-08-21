import React, { Component } from 'react'
import axios from 'axios'

export class Movie extends Component {
  state = {
    movieArray: []
  }

  makeApiCall = async movieDatabase => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=777aea70df4e4c6df6c5d0195ce2d746`
    )
    this.setState({
      movieArray: resp.data.results
    })
    console.log(resp)
  }

  async componentDidMount() {
    console.log('mounting')
    this.makeApiCall()
  }

  render() {
    return (
      <main>
        <div className="movie-box">
          <section>
            {this.state.movieArray.map(results => {
              return (
                <div key={results.id}>
                  <h1>{results.title}</h1>
                  <img
                    src={
                      ['https://image.tmdb.org/t/p/w185_and_h278_bestv2'] +
                      results['poster_path']
                    }
                    alt="movie poster"
                  />
                  <p>{results.overview}</p>
                </div>
              )
            })}
          </section>
        </div>
      </main>
    )
  }
}

export default Movie
