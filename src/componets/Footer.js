import React from 'react'

export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = { TotalTip:0 }
    }

    CalculteTip() {
        
        this.setState({ TotalTip: this.props.ListOfCustomer.map((item)=>{ return item.Rating * this.props.bill}).reduce((sum,value)=>{ return sum+value},0)})
}

    render(){
        return(  <div>
            <button style={{color:'white',backgroundColor:"green",display:"inline-block",fontSize:"16px",padding:"15px 32px",textAlign:"center"}} onClick={() => this.CalculteTip()}> calculate Tip</button>
            
            <table style={{border:"2px solid #e60965",alignContent:"center",width:"100%"}}>
                    <tr>
                    <th>Total Customer</th>
                    <th>Total Tip</th>
                    </tr>
                    <tr><td>{this.state.TotalTip}</td>
                    <td>{this.props.ListOfCustomer.length}</td>
                    </tr>
                   
                </table>
            
            <h5 style={{backgroundColor:'black',color:"white"}}> @2020 TIP-CALCULATOR</h5>
        
            
            </div>)
    }
}