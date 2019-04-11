import React, { Component } from 'react'
import StoreList from "./store/StoreList"
import EmployeeList from "./employee/EmployeeList"
import CandyList from "./candy/CandyList"

export default class KandyKorner extends Component {

    storeArray = [
        {id:1, name: "Rocket Fizz"},
        {id:2, name: "Goo Goo Shop"},
        {id:3, name:"Dylan's Candy Bar"}
    ]
    employeeArray = [
        {id:1, name: "Bob Smith"},
        {id:2, name: "Alyssa Lee"},
        {id:3, name: "Zoe Johnson"}
    ]
    candyTypeArray = [
        {id:1, type: "chocolate"},
        {id:2, type: "sour"},
        {id:3, type: "fruity"}
    ]
    candyArray = [
        {id:1, name: "M&Ms", candyTypeId: 1},
        {id:2, name: "Air Heads", candyTypeId: 3},
        {id:3, name: "Kit Kat", candyTypeId:1}
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }
    render() {
        return (
            <div>
                <StoreList stores={this.state.stores}/>
                <EmployeeList employees={this.state.employees}/>
                <CandyList candies={this.state.candies}/>
            </div>
        )
    }
}
