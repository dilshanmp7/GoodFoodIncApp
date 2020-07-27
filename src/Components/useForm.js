import React,{useState,useEffect} from "react";



const resetForms =()=>{
    setValues({
        ...initialFieldValues
    })
    setErrors({})
}

const Useform = (initialFieldValues) => {
    const {values,setValues} = useState(initialFieldValues)
    const {errors,setErrors} = useState({})

    const handInputChange = e=>{
        const {name,value} = e.target
        setValues({...values, [name]:value})
    }
    return {values,setValues,errors,setErrors,handInputChange};
}
 
export default Useform;