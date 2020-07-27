import React, { useEffect } from "react";
import { Grid, TextField,withStyles, Button } from "@material-ui/core";
import UseForm from "./useForm";
import {connect} from "react-redux";
import * as actions from "../Actions/ingredient";


const styles= theme=>({
      root:{  '& .MuiTextField-root':{
            margin:theme.spacing(2),
            minWidth:230
        }},
        smMargin:{
            margin:theme.spacing(2)
        }
    })

const initialFieldValues = {
    title:'',
    description:''
}



const  IngredientFrom = ({classes, ...props}) => {
    const validate =()=>{
        let temp={}
        temp.title=values.title !=""?"":"This field is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x=>x=="")
    }

    const{values,setValues,errors,setErrors,handInputChange}=UseForm(initialFieldValues)
    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        {
            if(props.currentId ==0)
             props.createIngredient(values,()=>{window.alert('inserted.')})
             else
             props.UpdateIngredient(props.currentId,values,()=>{window.alert('updated.')})

        }
    }

    useEffect(()=>{
        if(props.currentId !=0){
            setValues({...props.ingredientList.find(x=>x.id==props.currentId)})
        ,[props.currentId])
        
        }
    }
    return (
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={6}>
                <TextField name="title" error={true} helperText={errors.title} 
                {...(errors.title) && {error:true,helperText:errors.title}}
                variant="outlined" label="Title" value={values.title} onChange={handInputChange}></TextField>
                <TextField name="descrition" variant="outlined" label="Description" value={values.description} onChange={handInputChange}></TextField>
                <div>
                   <Button variant="contained" color="primary" type="Submit" className={classes.smMargin}>Submit</Button>
                   <Button variant="contained"  className={classes.smMargin}>Reset</Button>
               </div>
            </Grid>
            
        </Grid>

    </form>
        );
}
 

const mapStateToProps =state=>{
    return {
        ingredientList:state.ingredient.list  
    }
}

const mapActionToProps={
    createIngredient: actions.create,
    createIngredient:actions.update

}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(IngredientFrom));