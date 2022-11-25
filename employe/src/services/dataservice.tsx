import axios from "axios";

export const getEmployeeList = () =>{
    let response = 
    axios.get("http://localhost:3100/employee")
    return response
}
export const deleteEmployeeList = (obj) =>{
    let response = 
    axios.delete(`http://localhost:3100/employee/${obj.id}`)
    return response
}
export const postEmployee = (obj) =>{
    let response = 
    axios.post(`http://localhost:3100/employee`,obj)
    return response
}
export const EditEmployee = (obj) =>{
    let response = 
    axios.put(`http://localhost:3100/employee/${obj.id}`,obj)
    return response
}