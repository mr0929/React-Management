import React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class Customer extends React.Component{
    render(){
        return(
        
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile" style={{width:64, height:64}}/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>
        
        )
    }
}


/*
class CustomerProfile extends React.Component{
    render(){
        return (
         <div>
             <img src={this.props.image} alt="profilee"/>
             <h2>{this.props.name}({this.props.id})</h2>
         </div>   
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
         <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>            
         </div>   
        )
    }



}

*/
export default Customer;