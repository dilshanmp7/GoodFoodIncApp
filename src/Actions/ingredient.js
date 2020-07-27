import api from "./api"

export const ACTION_TYPES= {
CREATE:'CREATE',
UPDATE:'UPDATE',
DELETE:'DELETE',
FETCH_ALL:'FETCH_ALL'
}

export const fetchAll= ()=>{
    return dispatch=>{
        api.ingredient().fetchAll()
       .then(response=>{
           console.log(response)
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload:response.data
        })
       }).catch(err=>console.log(err))
    }
}


export const create= (data,onSucess)=> dispatch =>
{
    api.ingredient().create(data).then(res=>{
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload:res.data
        })
        onSucess()
    }).catch(err=>console.log(err))
}


export const update= (id,data,onSucess)=> dispatch =>
{
    api.ingredient().update(id,data).then(res=>{
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id,...data}
        })
        onSucess()
    }).catch(err=>console.log(err))
}

export const Update= (id,data,onSucess)=> dispatch =>
{
    api.ingredient().update(id,data).then(res=>{
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id,...data}
        })
        onSucess()
    }).catch(err=>console.log(err))
}

export const Delete= (id,onSucess)=> dispatch =>
{
    api.ingredient().delete(id).then(res=>{
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload:id
        })
        onSucess()
    }).catch(err=>console.log(err))
}
// dispatch(create({fullname:'')
