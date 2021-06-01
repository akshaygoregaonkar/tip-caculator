import React from 'react';

export default class Output extends React.Component {
    constructor(props) {
        super(props)
       
    }
    
        render() {
            return (
                <div style={{border:"2px solid red"}}>
                    {/* <p>{this.state.Tips}</p> */}
                    <h3> List of Customer</h3>

                    {this.props.ListOfCustomer.map((item) => { return <li>{item.Name} Offering a tip of  {item.Rating * this.props.bill} </li> })}

                    


                    
                </div>
            )
        }
    }