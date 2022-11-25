import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { deleteEmployeeList, getEmployeeList, EditEmployee } from '../services/dataservice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LikeEmp, NotifyDelete, PaySlip } from '../redux/action';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MiniDrawer from './drawer';

import { Paper } from '@mui/material';
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
  mainone: {
    width: "95.50vw",
    height: "91vh",
    // border: "1px solid Black",
    position: "absolute",
    left: "145px",
    top: "66px",
  },
  row: {
    width: '75%',
    height: '8%',
    // border:'1px solid black',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px',
    marginLeft: '100px'
  },
  field1: {
    height: '100%',
    width: '20%',
    // border:'1px solid red' ,
    marginTop: '15px'
  },
  field2: {
    height: '100%',
    width: '20%',
    // border:'1px solid red' ,
    marginTop: '15px'
  },
  rowone: {
    width: '75%',
    height: '8%',
    // border:'1px solid black',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    marginLeft: '100px'
  },
  column1: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
    marginTop: '15px'
  },
  column3: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
    marginTop: '15px'
  },
  column4: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
    marginTop: '15px'
  },
  column5: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
    marginTop: '15px'
  },
  column6: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
    marginTop: '15px'
  },
  column7: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
    marginTop: '15px'
  },
  column2: {
    height: '100%',
    width: '20%',
    // border:'1px solid red',
  },
  icon: {
    height: '70%',
    width: '80%',
    // border:'1px solid black',
    marginLeft: '10px',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'row'
  },
  icon1: {
    height: '100%',
    width: '40%',
    //border:'1px solid blue'
  },

  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    mainone: {
      width: "140vw",
      height: "145vh",
      // border: "2px solid Black",
      position: "absolute",
      left: "65px",
      top: "66px",

    },
    row: {
      width: '95%',
      height: '8%',
      // border:'1px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginLeft: '10px'
    },
    field1: {
      height: '100%',
      width: '20%',
      // width:'280px',
      // border:'1px solid red' ,
      marginTop: '15px'
    },
    field2: {
      height: '100%',
      width: '20%',
      // border:'1px solid red' ,
      marginTop: '15px'
      // visibility:'hidden'
    },
    rowone: {
      width: '95%',
      height: '8%',
      // border:'1px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginLeft: '10px'
    },
    column1: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
      marginTop: '15px'
    },
    column5: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
      marginTop: '15px'
      // visibility:'hidden'
    },
    column6: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
      marginTop: '15px'
      // visibility:'hidden'
    },
    column7: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
      marginTop: '15px'
      // visibility:'hidden'
    },
    column2: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
    },
    icon: {
      height: '70%',
      width: '80%',
      // border:'1px solid black',
      marginLeft: '10px',
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'row'
    },
    icon1: {
      height: '100%',
      width: '40%',
      // border:'1px solid blue'
    },


  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    mainone: {
      width: "85vw",
      height: "90vh",
      // border: "2px solid Black",
      position: "absolute",
      left: "65px",
      top: "66px",
      overflowY: 'scroll'

    },
    row: {
      width: '95%',
      height: '8%',
      // border:'1px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginLeft: '10px'
    },
    field1: {
      height: '100%',
      width: '20%',
      // border:'1px solid red' ,
      marginTop: '15px'
    },
    rowone: {
      width: '95%',
      height: '8%',
      // border:'1px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginLeft: '10px'
    },
    column1: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
      marginTop: '15px'
    },
    column2: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
    },
    icon: {
      height: '70%',
      width: '80%',
      // border:'1px solid black',
      marginLeft: '10px',
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'row'
    },
    icon1: {
      height: '100%',
      width: '40%',
      // border:'1px solid blue'
    },
  },
  ["@media only screen and (min-width:770px) and (max-width:1024px)"]: {
    mainone: {
      width: "90vw",
      height: "90vh",
      // border: "2px solid Black",
      position: "absolute",
      left: "65px",
      top: "66px",
      overflowY: 'scroll'

    },
    row: {
      width: '96%',
      height: '8%',
      // border:'1px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '40px',
      marginLeft: '10px'
    },
    field1: {
      height: '100%',
      width: '20%',
      // border:'1px solid red' ,
      marginTop: '15px'
    },
    rowone: {
      width: '96%',
      height: '8%',
      // border:'1px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      marginLeft: '10px'
    },
    column1: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
      marginTop: '15px'
    },
    column2: {
      height: '100%',
      width: '20%',
      // border:'1px solid red',
    },
    editicon: {
      height: '70%',
      width: '80%',
      // border:'1px solid black',
      marginLeft: '10px',
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'row'
    },
    icon1: {
      height: '100%',
      width: '40%',
      // border:'1px solid blue'
    },
  },
})
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  height: 550,
  bgcolor: 'background.paper',
  border: '0px solid white',
  boxShadow: 24,
  p: 4,
};

function Employees() {
  const navigate = useNavigate();

  const classes = useStyle();
  // const [empId, setEmpId] = useState([]);
  const [empList, setEmpList] = useState([])
  const [open, setOpen] = React.useState(false);
  const [submitEmp, setSubmitEmp] = useState({
    name: '', address: '', Contact: '', salary: '',
    allowance: '', tds: '', epf: ''
  })

  const openPaySlip = () => {
    navigate('/payslip')
  }

  const handleOpen = (emp) => {
    setOpen(true);
    setSubmitEmp({
     id: emp['id'],
      name: emp['name'],
      address: emp['address'],
      Contact: emp['Contact'],
      salary: emp['salary'],
      allowance: emp['allowance'],
      epf: emp['epf'],
      tds: emp['tds'],
    })
  }

  const handleClose = () => setOpen(false);

  const [wish, setWish] = useState(false)
  const [searchWord, setSearchWord] = React.useState('')
  const searchBook = (event: React.MouseEvent<HTMLElement>) => {
  //  setSearchWord(event.currentTarget)
    console.log(event.currentTarget)
  }

  console.log(searchWord, "searching..")

  const dispatch = useDispatch()

  const deleteEmp = (id) => {
    let obj = { id: id };
    console.log(obj, "deleted")
    deleteEmployeeList(obj).then((response) => {
      console.log(response.data.id, "Emp deleted")
    }).catch((error) => console.log(error))
  };

  const takeName = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSubmitEmp(previousState => ({
      ...previousState,
      name: event.target.value
    }))
    console.log(event.target.value)
  }
  const takeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSubmitEmp(previousState => ({
      ...previousState,
      address: event.target.value
    }))
    console.log(event.target.value)
  }

  const takeContact = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSubmitEmp(previousState => ({
      ...previousState,
      Contact: event.target.value
    }))
    console.log(event.target.value)
  }

  const takeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSubmitEmp(previousState => ({
      ...previousState,
      salary: event.target.value
    }))
    console.log(event.target.value)
  }

  const takeAllowance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitEmp(previousState => ({
      ...previousState,
      allowance: event.target.value
    }))
    console.log(event.target.value)
  }

  const takeEpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitEmp(previousState => ({
      ...previousState,
      epf: event.target.value
    }))
    console.log(event.target.value)
  }
  const takeTds = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitEmp(previousState => ({
      ...previousState,
      tds: event.target.value
    }))
    console.log(event.target.value)
  }

  const handleSubmit = () => {
    EditEmployee(submitEmp).then((response) => {
      console.log(response, "Emp edited");
      setSubmitEmp(response.data)
    }).catch((error) => console.log(error))
    handleClose();
  }

  useEffect(() => {
    getEmployeeList().then((response) => {
      console.log(response)
      setEmpList(response.data)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <MiniDrawer searchBook={searchBook} searchWord={searchWord} />


      <div className={classes.mainone}>
        <Paper className={classes.row}>
          <div className={classes.field1}>EmpID</div>
          <div className={classes.field1}>Name</div>
          <div className={classes.field1}>Address</div>
          <div className={classes.field1}>Contact</div>
          <div className={classes.field1}>Salary</div>
          <div className={classes.field2}>Funds</div>
          <div className={classes.field2}>EPF</div>
          <div className={classes.field2}>TDS</div>
          <div className={classes.field1}>Edit</div>
        </Paper>

        {empList.map((emp) => (

          <Paper className={classes.rowone}>
            <div className={classes.column1}>{emp['id']}</div>
            <div className={classes.column1} onClick={() => { dispatch(PaySlip(emp)); openPaySlip() }} >{emp['name']}
            </div>
            <div className={classes.column1} onClick={() => { dispatch(PaySlip(emp)); openPaySlip() }} >{emp['address']}</div>
            <div className={classes.column3} onClick={() => { dispatch(PaySlip(emp)); openPaySlip() }} >{emp['Contact']}</div>
            <div className={classes.column4}>{emp['salary']}</div>
            <div className={classes.column5}>{emp['allowance']}</div>
            <div className={classes.column6}>{emp['epf']}</div>
            <div className={classes.column7}>{emp['tds']}</div>
            <div className={classes.column2}>
              <div className={classes.icon}>
                <div className={classes.icon1}>

                  <CreateIcon onClick={() => handleOpen(emp)} />
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className={classes.addempcontainer}>

                        <div className={classes.addempcontainerform}>
                          <Box >
                            <Box  >
                              <h3>Add Employee</h3>

                            </Box>
                            <div style={{ width: "100%", height: "51%", border: "0px solid red", display: "flex", flexDirection: "row" }}>
                              <div style={{ height: "100%", width: "40%", border: "0px solid black" }}>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '10px' }}>Name:</div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '40px' }}>Address:</div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '60px' }}>Contact:</div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '88px' }}>Salary:</div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '108px' }}>Funds:</div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '128px' }}>EPF:</div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '145px' }}>TDS:</div>
                              </div>

                              <div  style={{ height: "100%", width: "60%", border: "0px solid blue", }}>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black' }}>
                                  <TextField id="standard-basic3" label=" name" size="small" variant="standard"
                                    onChange={takeName}
                                    defaultValue={submitEmp.name}
                                  /></div>

                                <div style={{ height: '23%', width: '100%', border: '0px solid black', position: 'relative', top: '10px' }}>
                                  <TextField id="standard-basic3" label="address" size="small" variant="standard"
                                    onChange={takeAddress}
                                    defaultValue={submitEmp.address}
                                  /></div>

                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '20px' }}>
                                  <TextField id="standard-basic3" label="contact" size="small" variant="standard"
                                    onChange={takeContact}
                                    defaultValue={submitEmp.Contact}
                                  /></div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '20px' }}>
                                  <TextField id="standard-basic3" label="salary" size="small" variant="standard"
                                    onChange={takeSalary}
                                    defaultValue={submitEmp.salary}
                                  /></div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '20px' }}>
                                  <TextField id="standard-basic3" label="funds" size="small" variant="standard"
                                    onChange={takeAllowance}
                                    defaultValue={submitEmp.allowance}
                                  /></div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '20px' }}>
                                  <TextField id="standard-basic3" label="epf" size="small" variant="standard"
                                    onChange={takeEpf}
                                    defaultValue={submitEmp.epf}
                                  /></div>
                                <div style={{ height: '33%', width: '100%', border: '0px solid black', position: 'relative', top: '20px' }}>
                                  <TextField id="standard-basic3" label="tds" size="small" variant="standard"
                                    onChange={takeTds}
                                    defaultValue={submitEmp.tds}
                                  /></div>

                              </div>
                            </div>
                            <Box  sx={{ width:'10%',height:'5%',position: 'relative', left: '250px', top: '30px' }}>

                              <Button variant="contained"
                                onClick={handleSubmit}
                              >Submit</Button>
                            </Box>
                          </Box>
                        </div>
                      </div >
                    </Box>
                  </Modal>


                </div>
                <div className={classes.icon1}>
                  {
                    emp['id'] === 0 ? <FavoriteIcon sx={{ color: 'red' }} />
                      :
                      <FavoriteBorderIcon onClick={() => { dispatch(LikeEmp(emp['like'])); setWish(emp['id']) }} />
                  }
                </div>
                <div className={classes.icon1}>
                  <DeleteOutlineIcon onClick={() => { dispatch(NotifyDelete(emp['like'])); deleteEmp(emp['id']) }} />
                </div>
              </div>
            </div>

          </Paper>

        ))}
      </div>

    </div>

  )

}
export default Employees