import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <article className="content">
                <h2>Employee List:</h2>
                {
                    this.props.employees.map(employee =>
                        <section key={employee.id}>
                            {employee.name}
                        </section>
                    )
                }
            </article>
        )
    }
}
