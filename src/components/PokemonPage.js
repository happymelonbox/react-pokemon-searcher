import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: []
    }
  }

  fetchPokemon = (config) => {
    const pokeURL = 'http://localhost:3000/pokemon'
    fetch(pokeURL, config)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({pokemon: data})
    })
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    const pokeURL = 'http://localhost:3000/pokemon'
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: '',
        name: event.target.name.value,
        hp: event.target.hp.value,
        sprites: {
          front: event.target.frontUrl.value,
          back: event.target.backUrl.value
        }
      })
    }
    fetch(pokeURL, config)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState([...this.state.pokemon, data])
      console.log('...Success!')
      window.location.reload()
    })
    
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit = {this.handleSubmit}/>
        <br />
        <Search />
        <br />
        <PokemonCollection data={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
