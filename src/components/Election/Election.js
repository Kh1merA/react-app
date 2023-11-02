import React from 'react';

import SmilesContainer from '../SmilesContainer/SmilesContainer';

import './election.css';

class Election extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bestSmile: [],
            smiles: [
                {
                    id: 1,
                    smile: '😈',
                    counter: 0
                },
                {
                    id: 2,
                    smile: '👹',
                    counter: 0
                },
                {
                    id: 3,
                    smile: '👽',
                    counter: 0
                },
                {
                    id: 4,
                    smile: '👻',
                    counter: 0
                },
                {
                    id: 5,
                    smile: '💀',
                    counter: 0
                }
            ]
        }
        this.vote = this.vote.bind(this);
    }

    vote(smileID){
        this.setState({
           smiles: this.state.smiles.map((smile) => {
               if (smile.id === smileID) {
                   return { ...smile, counter: smile.counter + 1 };
               }
               return smile;
           })
        });
    }

    getResult(){
        //It is possible to have many winners
        let winner = [this.state.smiles[0]];
        this.state.smiles.forEach(item => {
            if(item.counter > winner[0].counter){
                winner = [];
                winner.push(item);
            }
            else if(item.counter >= winner[0].counter && item.id !== winner[0].id){
                winner.push(item);
            }
        })
        this.setState({
            bestSmile: winner
        });
    }

    render() {
        return (
            <div className='container'>
                <SmilesContainer
                    smiles = {this.state.smiles}
                    voteFunc = {this.vote}
                />
                <button className='result-button' onClick={() => this.getResult()}>Get a result</button>
                {this.state.bestSmile.length !== 0 && (
                    <div className='winner-container'>
                        <p className='smile-style'>Winners</p>
                        <div>
                            {
                                this.state.bestSmile.map(item => {
                                    return(
                                        <span className='smile-style'>{item.smile}</span>)
                                })
                            }
                        </div>
                    </div>
                )}
            </div>

        )
    }
}

export default Election;