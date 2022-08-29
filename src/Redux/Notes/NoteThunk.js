import { useDispatch } from "react-redux"
import {UpdateNoteFail, UpdateNoteRequest, CreateNoteFail, CreateNoteSuccess, CreateNoteRequest, NoteFail, NoteRequest, NoteSuccess, UpdateNoteSuccess,DELETENoteRequest,DELETENoteSuccess,DELETENoteFail, NoteListFail, NoteListSuccess, NoteListRequest} from "./NoteActionCreator"

import axios from "axios"
import { NoteListReducer } from "./NotesReducer"
export const NoteListThunk = () => async(dispatch,getState) =>{
        dispatch(NoteRequest())
    const {Login} = getState();
  ;
try{

    const config = {
        headers: {
          Authorization: `Bearer ${Login.data.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/notes`, config)
      
      dispatch(  NoteSuccess(data))
    }catch(erorr){
        dispatch(NoteFail(erorr.response.data.message));
}
}

export const CreateNoteThunk = (title, content, category) => async(dispatch,getState) =>{
    dispatch(CreateNoteRequest())
const {Login} = getState();
console.log(Login.data.token, "state");
try{
const NoteData = {
    title, content, category
}
const config = {
    headers: {
        "Content-Type": "application/json",
       Authorization: `Bearer ${Login.data.token}`,
    },
  };
  const { data } = await axios.post(`/api/v1/notes/create`,NoteData, config)
  console.log(data,"data")
  dispatch( CreateNoteSuccess(data))
}catch(erorr){
    dispatch(CreateNoteFail(erorr.response.data.message))
console.log(erorr.response.data.message,"erorr err")
}
}


export const UpdateNoteThunk = (id, title, content, category) => async(dispatch,getState) =>{
    dispatch(UpdateNoteRequest())
const {Login} = getState();
console.log(Login.data.token, "state");
try{
const NoteData = {
    title, content, category
}
const config = {
    headers: {
        "Content-Type": "application/json",
      Authorization: `Bearer ${Login.data.token}`,
    },
  };
  const { data } = await axios.get(`/api/v1/notes/update/${id}`,NoteData, config)
  console.log(data,"data")
  dispatch(  UpdateNoteSuccess(data))
}catch(erorr){
    dispatch(UpdateNoteFail(erorr.response.data.message))
console.log(erorr.response.data.message,"erorr")
}
}


export const DeleteNoteThunk = (id, title, content, category) => async(dispatch,getState) =>{
    dispatch(DELETENoteRequest())
const {Login} = getState();
console.log(Login.data.token, "state");
try{
const NoteData = {
    title, content, category
}
const config = {
    headers: {
        "Content-Type": "application/json",
      Authorization: `Bearer ${Login.data.token}`,
    },
  };
  const { data } = await axios.get(`/api/v1/notes/update/${id}`,NoteData, config)
  console.log(data,"data")
  dispatch(  DELETENoteSuccess(data))
}catch(erorr){
    dispatch(DELETENoteFail(erorr.response.data.message))
console.log(erorr.response.data.message,"erorr")
}
}

export const  SingleNoteThunk = (id) => async (dispatch,getState) => {
      dispatch(NoteListRequest())
      try{
        const {Login} = getState();
        const config = {
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Login.data.token}`
          }
         
        } 
const {data} = await axios.get( `/api/v1/notes/single/${id}`  , config)
          dispatch(NoteListSuccess(data))
          console.log(data, 'success')
      }
      catch(err){
          dispatch(NoteListFail(err.response.data.message))
          console.log(err.response.data.message , 'fail')
      }
}