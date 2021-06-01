import React from 'react';
import Output from './Output'
import Header from './Header'
import Footer from './Footer'
import './Input.css';

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { billAmount: 0, CustomerNameList: [], seviceRating: 0, CustomerName: '' }
    }
    AddCustomer = () => {


        if (this.state.CustomerName !== '') { 
             this.setState({ CustomerNameList: [...this.state.CustomerNameList, { Name: this.state.CustomerName, Rating: this.state.seviceRating }], CustomerName: '' })
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className={"container"}>
                    {/* <div className={"vertical-center"}> */}
                    <div className={"textone"}>
                    Total Bill<input  id={"text1"} type="text" placeholder="Enter bill Amout" value={this.state.billAmount} onChange={(evt) => { this.setState({ billAmount: evt.target.value }) }} ></input>
                    </div>
               <br></br>

                how was the service <select value={this.state.seviceRating} onChange={(evt) => { this.setState({ seviceRating: evt.target.value }) }}>
                    <option disabled value="0">-- Choose an Option --</option>
                    <option value="0.3">Exllent-30%</option>
                    <option value="0.2">Medium-20%</option>
                    <option value="0.05">Not so Good-5%</option>
                </select>
                <input type="text" placeholder="Customer Name" value={this.state.CustomerName} onChange={(evt) => { this.setState({ CustomerName: evt.target.value }) }}></input>
                <button style={{color:'white',backgroundColor:"#1b88f5",textAlign:"center"}} onClick={() => this.AddCustomer()}> Add Customer</button>
                {/* </div> */}
                </div>
                <Output ListOfCustomer={this.state.CustomerNameList} bill={this.state.billAmount} />
                <Footer ListOfCustomer={this.state.CustomerNameList} bill={this.state.billAmount} />
            </div>
        )
    }

}