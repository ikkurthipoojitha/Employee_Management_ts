import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { connect, useSelector } from 'react-redux';

 import { PaySlipReducer } from '../redux/reducer';
import { Badge } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import RouterTwo from '../router/routertwo';
import Dashboard from './dashboard';
import MiniDrawer from './drawer';
import { rootState } from '../redux/store';

const useStyle = makeStyles({
    mainboxone: {
        width: '80vw',
        height: '65vh',
        border: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        left: '150px',
        top: '40px',
    },
    mainbox: {
        width: '80vw',
        height: '70%',
        border: '0px solid pink',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'relative',
        //     left:'150px',
        //     top:'10px',
    },
    row1: {
        width: '45%',
        height: '90%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        position: 'relative',
        top:'10px',
    },
    subrowbox: {
        width: '60%',
        height: '60%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignContent:'flex-start',
        alignItems:'flex-start',
        position: 'relative',
        left: '60px',
    },
    ["@media only screen and (min-width:360px) and (max-width:480px)"]: {
        mainboxone: {
            width: '70vw',
            height: '60vh',
            border: '1px solid grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize:'small',
            position: 'relative',
            left: '100px',
            top: '40px',
        },
        mainbox: {
            width: '70vw',
            height: '60%',
            border: '0px solid pink',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent:'space-around',
            position: 'relative',
            //     left:'150px',
            //     top:'10px',
        },
        row1: {
            width: '85%',
            height: '90%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-evenly',
            alignContent: 'flex-start',
            alignItems:'space-around',
            position: 'relative',
            // top:'10px',
            left:'20px',
            marginBottom:'10px',
        },
        subrowbox: {
            width: '60%',
            height: '70%',
            border: '0px solid blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // alignContent:'flex-start',
            alignItems:'flex-start',
            position: 'relative',
            left: '10px',
        },  
    },
    ["@media only screen and (min-width:481px) and (max-width:720px)"]: {
        mainboxone: {
            width: '70vw',
            height: '60vh',
            border: '1px solid grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            left: '150px',
            top: '40px',
        },
        mainbox: {
            width: '65vw',
            height: '60%',
            border: '0px solid pink',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'relative',
            //     left:'150px',
            //     top:'10px',
        },
        row1: {
            width: '45%',
            height: '90%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            position: 'relative',
            top:'10px',
        },
        subrowbox: {
            width: '60%',
            height: '60%',
            border: '0px solid blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // alignContent:'flex-start',
            alignItems:'flex-start',
            position: 'relative',
            left: '10px',
        },
    },
    ["@media only screen and (min-width:721px) and (max-width:1024px)"]: {
        mainboxone: {
            width: '70vw',
            height: '60vh',
            border: '1px solid grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            left: '150px',
            top: '40px',
        },
        mainbox: {
            width: '70vw',
            height: '60%',
            border: '0px solid pink',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'relative',
            //     left:'150px',
            //     top:'10px',
        },
        row1: {
            width: '45%',
            height: '90%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            position: 'relative',
            top:'10px',
        },
        subrowbox: {
            width: '60%',
            height: '60%',
            border: '0px solid blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // alignContent:'flex-start',
            alignItems:'flex-start',
            position: 'relative',
            left: '10px',
        },
    },
})
function SalarySlip() {
    const navigate = useNavigate()

    const classes = useStyle();
    // const resultemp = useSelector((state) => state.PaySlipReducer)
    // console.log(resultemp)

    const slipList = useSelector((state:rootState) => state.PaySlipReducer);
    console.log(slipList, "slip list")

    const close = () =>{
        navigate('/employee')
    }


    return (
        <div>
           {/* <MiniDrawer /> */}
            <Paper className={classes.mainboxone}>

                <Box style={{
                    width: '100%', height: '10%', border: '0px solid green', display: 'flex',
                    justifyContent: 'center', alignContent: 'center', position: 'relative', top: '20px',
                }}><h4>Employee Pay Slip</h4></Box>

                <Box className={classes.mainbox}>
                    <Paper className={classes.row1}>
                        <h4>Employee Details</h4>
                        <Box className={classes.subrowbox}>
                            <Typography>Id:{slipList[0]['id']}</Typography>
                            <Typography>Name: {slipList[0]['name']}</Typography>
                            <Typography>Address:{slipList[0]['address']}</Typography>
                            <Typography>Contact:{slipList[0]['Contact']}</Typography>
                        </Box>
                    </Paper>
                    <Paper className={classes.row1}>
                        <h4>Salary Details</h4>
                        <Box className={classes.subrowbox}>
                            <Typography>Salary:{slipList[0]['salary']}</Typography>
                            <Typography> Allowance:{slipList[0]['allowance']}</Typography>
                            <Typography>EPF:{slipList[0]['epf']}</Typography>
                            <Typography>TDS:{slipList[0]['tds']}</Typography>
                            <Typography>Total Amount:{slipList[0]['salary'] - slipList[0]['epf'] }</Typography>
                        </Box>
                    </Paper>
                </Box>
                <Box style={{
                    width: '100%', height: '10%', border: '0px solid green', display: 'flex',
                    justifyContent: 'flex-end', alignContent: 'center',
                }}><Button onClick={close}>Go to Home</Button></Box>
            </Paper>
        </div>
    )
}
export default SalarySlip