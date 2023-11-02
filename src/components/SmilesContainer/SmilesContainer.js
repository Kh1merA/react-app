import React from 'react';

import './smiles-container.css';

class SmilesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {smiles, voteFunc} = this.props;

        return (
            <div className='smile-block'>
                {
                    smiles.map(item => {
                                return (
                                    <div className='block' key={item.id}>
                                        <span className='smile-style'>{item.smile}</span>
                                        <span className='smile-style'>{item.counter}</span>
                                        <button className='vote-button' onClick={() => voteFunc(item.id)}>Vote</button>
                                    </div>

                                );
                            }
                        )
                }
            </div>
        )
    }
}

export default SmilesContainer;