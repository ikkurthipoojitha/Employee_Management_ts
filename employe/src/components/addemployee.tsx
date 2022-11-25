import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {postEmployee} from '../services/dataservice';
import { useState } from 'react';
import MiniDrawer from './drawer';

const useStyle = makeStyles({
    addempcontainer: {
        width: '50vw',
        height: '82vh',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'center',
        border: '0px solid blue',
        position: 'relative',
        top: '0px',
        left: '270px',
    },
    addempcontainerform: {
        width: '41vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'center',
        border: '0px solid green',
        // position:'relative',
        // top:'10px',
        // left:'250px',
    },
    insidebox:{
        width: '80%', height: '90%', border: '0px solid red', position: 'relative', top: '10px', display: 'flex',
                            flexDirection: 'column', alignContent: 'flex-start'
    },
    addemployeebox:{
        display: 'flex',
                                flexDirection: 'row', justifyContent: 'center',
                                position: 'relative', top: '0px', marginLeft: '0px'

    },
    ['@media only screen and (min-width :481px) and (max-width :720px)']: {
        addempcontainer:{
            width:'60vw',
            height:'95vh',
            border:'0px solid blue',
            position:'relative',
            fontSize:'small',
            margintop:'10px',
            left:'90px'
        },
        addempcontainerform :{
            width:'50vw',
            height:'95%',
            border:'0px solid blue',
            position:'relative',
            fontSize:'small',
            top:'0px',
           
        },
        insidebox:{
            width: '95%', height: '90%', border: '0px solid red', position: 'relative', 
            top: '10px', display: 'flex',
                                flexDirection: 'column', alignContent: 'flex-start'
        },
    },
    ['@media only screen and (min-width :720px) and (max-width :1024px)']: {
        addempcontainer:{
            width:'70vw',
            height:'95vh',
            border:'0px solid blue',
            position:'relative',
            fontSize:'small',
            // margintop:'10px',
            // left:'90px'
        },
        addempcontainerform :{
            width:'50vw',
            height:'95%',
            border:'0px solid blue',
            // position:'relative',
            fontSize:'small',
            // top:'0px',
           
        },
        insidebox:{
            width: '95%', height: '90%', border: '0px solid red', position: 'relative', 
            top: '10px', display: 'flex',
                                flexDirection: 'column', alignContent: 'flex-start',
        },
    },
   

})

function AddEmployee() {
    const classes = useStyle();
    
    const [submit, setSubmit] = useState({ name: '', address: '', Contact: '',salary: '',
    allowance: '', tds: '', epf: '' })
    const takeName = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(prevState => ({
            ...prevState,
            name: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(prevState => ({
            ...prevState,
            address: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeContact = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(prevState => ({
            ...prevState,
            Contact: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(previousState => ({
            ...previousState,
            salary: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeAllowance = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(previousState => ({
            ...previousState,
            allowance: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeEpf = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(previousState => ({
            ...previousState,
            epf: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeTds = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSubmit(previousState => ({
            ...previousState,
            tds: event.target.value
        }))
        console.log(event.target.value)
    }
    
    const submitCreate = () =>{
        postEmployee(submit).then((response) => {
            console.log(response, "Emp added")
            setSubmit(response.data)

        }).catch((error) => console.log(error))
    }


    return (
        <div>
            {/* <MiniDrawer /> */}
            <div className={classes.addempcontainer}>
                <Card>
                    <div className={classes.addempcontainerform}>
                        <Box className={classes.insidebox}>
                            <Box className={classes.addemployeebox}>

                                <h4>Add Employee</h4>

                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around'
                            }}>
                                <label>Name: </label>
                                <TextField
                                onChange={takeName}
                                    id="standard-search"
                                    label="name"
                                    type="search"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around',
                                position: 'relative', top: '15px',
                            }}>
                                <label>Address: </label>
                                <TextField
                                    onChange={takeAddress}
                                    id="standard-search"
                                    label="address"
                                    type="search"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around',
                                position: 'relative', top: '30px',

                            }}>
                                <label>Contact: </label>
                                <TextField
                                onChange={takeContact}
                                    id="standard-search"
                                    label="contact"
                                    type="text"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around',
                                position: 'relative', top: '30px',

                            }}>
                                <label>Salary: </label>
                                <TextField
                                onChange={takeSalary}
                                    id="standard-search"
                                    label="salary"
                                    type="text"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around',
                                position: 'relative', top: '30px',

                            }}>
                                <label>Allowance: </label>
                                <TextField
                                onChange={takeAllowance}
                                    id="standard-search"
                                    label="allowance"
                                    type="text"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around',
                                position: 'relative', top: '30px',

                            }}>
                                <label>EPF: </label>
                                <TextField
                                onChange={takeEpf}
                                    id="standard-search"
                                    label="epf"
                                    type="text"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-around',
                                position: 'relative', top: '30px',

                            }}>
                                <label>TDS: </label>
                                <TextField
                                onChange={takeTds}
                                    id="standard-search"
                                    label="tds"
                                    type="text"
                                    variant="standard"
                                />
                            </Box>
                            
                            
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row', justifyContent: 'center',
                                position: 'relative', top: '50px', marginLeft: '100px'

                            }}>
                                <Button variant="contained" onClick = {submitCreate}>Submit</Button>
                            </Box>
                        </Box>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default AddEmployee