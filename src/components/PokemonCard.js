import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: props.name,
      id: props.id,
      image: props.front,
      hp: props.hp
    }
  }

  flip=()=>{
    this.state.image === this.props.front ? this.setState({image: this.props.back}) : this.setState({image: this.props.front})
  }

  render() {
    return (
      <Card onClick={this.flip}>
        <div>
          <div className="image">
            <img src={this.state.image}  alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.state.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.state.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
