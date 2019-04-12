import React, { Component } from 'react'

export default class CandyList extends Component {
    render() {
        return (
            <article className="content">
                <h2>Candy List:</h2>
                {
                    this.props.candies.map(candy =>
                        <section key={candy.id}>
                            {`${candy.name}
                            of type `}
                            {
                                this.props.candyTypes
                                .find(candyType => candy.candyTypeId === candyType.id)
                                .name
                            }
                            
                        </section>
                    )
                }
            </article>
        )
    }
}
