import React, { Component } from 'react'

export default class StoreList extends Component {
  render() {
    return (
      <article className="content">
          <h2>Store List:</h2>
        {
            this.props.stores.map(store =>
                <section key={store.id}>
                    {store.name}
                </section>
                )
        }
      </article>
    )
  }
}
