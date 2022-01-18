import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';


import CustomerAdd from './components/CustomerAdd';


import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { withStyles } from '@mui/material/styles';



import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"

  },
  table: {
    minWidth : 1080
  },

  progress: {
    margin: theme.spacing.unit * 2
  }
})





class App extends Component{

  /*
    state = {
      customers: "",
      completed: 0
    }
*/
    constructor(props) {
      super(props);
      this.state = {
        customers: '',
        completed: 0
      }
    }

    stateRefresh = () => {
      this.setState({
        customers: '',
        completed: 0
      });
      this.callApi()
      .then(res=>this.setState({customers: res}))
      .catch(err=>console.log(err));

    }


    componentDidMount() {
      this.timer = setInterval(this.progress, 20);
      this.callApi()
        .then(res=>this.setState({customers: res}))
        .catch(err=>console.log(err));

    }
    callApi = async () => {
      const response = await fetch('/api/customers');
      const body = await response.json();
      return body;
    }

    progress = () => {
      const { completed } = this.state;
      this.setState({ completed: completed >= 100 ? 0 : completed + 1});
    }


    render(){
    const { classes } = this.props;


    return (
      <div>
      <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                      <TableCell>번호</TableCell>
                      <TableCell>이미지</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>생년월일</TableCell>
                      <TableCell>성별</TableCell>
                      <TableCell>직업</TableCell>
                      <TableCell>설정</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.customers ? this.state.customers.map(c=>{return ( 
                      <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
                    }): 
                    
                    <Stack spacing={2} direction="row">
                    <CircularProgress variant="determinate" value={25} />
                    <CircularProgress variant="determinate" value={50} />
                    <CircularProgress variant="determinate" value={75} />
                    <CircularProgress variant="determinate" value={100} />
                    <CircularProgress variant="determinate" value={this.state.completed} />
                    </Stack>
                    
                    }
        
                </TableBody>
              </Table>
      </Paper>

      <CustomerAdd stateRefresh={this.stateRefresh}/>


      </div>
    );
  }
}

export default App;
