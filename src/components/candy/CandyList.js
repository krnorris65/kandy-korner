import React, { Component } from 'react'

export default class CandyList extends Component {
    render() {
        return (
            <article>
                <h2>Candy List:</h2>
                {
                    this.props.candies.map(candy =>
                        <section key={candy.id}>
                            {candy.name}
                        </section>
                    )
                }
            </article>
        )
    }
}
