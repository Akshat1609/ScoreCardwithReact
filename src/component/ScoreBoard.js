
import React, { Component } from 'react'

function Player(props){
    return (
        <div className="Players">
            <h1 className="name">{props.name}</h1>
            
           
            <div className="foo">
            <button className="btn1" onClick={()=>props.decrementScore(props.id)}>-</button>
            <p className="score">{props.score}</p>
            <button className="btn2" onClick={() => props.incrementScore(props.id)}>+</button>
            </div>
        </div>
    )
}



class ScoreBoard extends Component {
    state = {
        players: [
            { id: 1, name: "Henry", score: 0 },
            { id: 2, name: "David", score: 0 },
            { id: 3, name: "Reven", score: 0 },
            { id: 4, name: "Seyla", score: 0}
        ]
    }
    
   
    
    // callback prop
    // define in parent
    incrementScore = (playerId) => {
       
        const updatedPlayers = this.state.players
            .map(player => {
                // player got clicked -> update score
                if(player.id === playerId){
                    return { ...player, score: player.score + 1 }
                }
                return player
            })
        
        this.setState({ players: updatedPlayers }) 
    }
    
    decrementScore = (playerId) => {
        const updatedPlayers=this.state.players.map(player =>{
            
            if(player.id=== playerId){
                return{...player, score :player.score -1}
            }
            return player
            
        })
        this.setState({players : updatedPlayers})
    }
    
    render(){
       
        return <div className="counter">
           
            
            { this.state.players
                .sort((a, b) => b.score - a.score)
                .map(player => 
                <Player 
                    key={player.id}
                    id={player.id} 
                    name={player.name} 
                    score={player.score}
                    
                    decrementScore={this.decrementScore}
                    incrementScore={this.incrementScore}
                />
            )}
        </div>
    }
}

export default ScoreBoard