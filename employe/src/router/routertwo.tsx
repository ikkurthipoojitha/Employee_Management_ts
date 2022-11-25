import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddPaySlip from "../components/addPayslip";
import Dashboard from "../components/dashboard";
// import AddPaySlip from "../components/addPayslip";
import MiniDrawer from "../components/drawer";
import Employees from "../components/employees";
import SalarySlip from "../components/addPayslip";
import AddEmployee from "../components/addemployee";
function RouterTwo(){
    return (
        <div>
            <Router>
            <Routes>
                {/* <Route  path = '/' element = {<MiniDrawer />} /> */}
                <Route  path = "/" element = {<Employees />} />
                <Route  path = "/add" element = {<AddEmployee />} />

                <Route  path = "/payslip" element = {<SalarySlip />} />


                </Routes>
            </Router>
        </div>
    )
}
export default RouterTwo