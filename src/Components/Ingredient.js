import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../Actions/ingredient";
import { Grid,Paper, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, withStyles, ButtonGroup } from "@material-ui/core";
import IngredientFrom from "./IngredientForm";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"

const styles= theme=>({ 
 root:{
     "& .MuiTableCell-head":{
         fontSize:"1.25rem"
     }
 },
 
    paper:{
     margin:theme.spacing(2),
     padding:theme.spacing(2)
 }
})

const Ingredients= ({classes,...props}) => {
    const [currentId,setCurrentId] =useState(0)
    useEffect(()=>{ props.fetchALlIngredients()} ,[])
    return ( 
    
    <Paper className={classes.paper} elevation={3}>
        <Grid container>
            <Grid item xs={3}>
                <IngredientFrom {...({currentId,setCurrentId})}></IngredientFrom>
            </Grid>
            <Grid item xs={3}>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.root}>
                            <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.ingredientList.map((record,index)=>{
                                    return (<TableRow key={index} hover>
                                        <TableCell>{record.title}</TableCell>
                                        <TableCell>{record.description}</TableCell>
                                        <TableCell>
                                            <ButtonGroup variant="text">
                                                <button><EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}></EditIcon></button>
                                                <button><DeleteIcon color="primary"></DeleteIcon></button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>)
                                })

                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Paper>
    
    );
}

const mapStateToProps =state=>{
    return {
        ingredientList:state.ingredient.list  
    }
}

const mapActionToProps={
    fetchALlIngredients: actions.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Ingredients));
