import {NOTES_UPDATE_REQUEST,NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS,NOTE_LIST_FAIL, NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS,NOTES_DELETE_FAIL,NOTES_UPDATE_FAIL,NOTES_UPDATE_SUCCESS, NOTES_CREATE_REQUEST, NOTES_CREATE_FAIL,NOTES_CREATE_SUCCESS,NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "./NotesAcrtion"


export const NoteRequest = () =>{
    return{
        type :NOTES_LIST_REQUEST
    }
}

export const NoteSuccess = (data) =>{
    return{
        type :NOTES_LIST_SUCCESS,
        payload :data
    }
}

export const NoteFail  = (error) =>{
    return{
        type :NOTES_LIST_FAIL,
        payload :error
    }
}

export const CreateNoteRequest = () =>{
    return{
        type :NOTES_CREATE_REQUEST
    }
}

export const    CreateNoteSuccess = (data) =>{
    return{
        type :NOTES_CREATE_SUCCESS,
        payload :data
    }
}

export const CreateNoteFail  = (error) =>{
    return{
        type :NOTES_CREATE_FAIL,
        payload :error
    }
}

export const UpdateNoteRequest = () =>{
    return{
        type :NOTES_UPDATE_REQUEST,
    }
}

export const UpdateNoteSuccess = (success) =>{
    return{
        type: NOTES_UPDATE_SUCCESS,
        payload :success,
    }
}

export const UpdateNoteFail = (error) =>{
    return{
        type: NOTES_UPDATE_FAIL,
        payload :error
    }
}


export const DELETENoteRequest = () =>{
    return{
        type :NOTES_DELETE_REQUEST,
    }
}

export const DELETENoteSuccess = (success) =>{
    return{
        type: NOTES_DELETE_SUCCESS,
        payload :success,
    }
}

export const DELETENoteFail = (error) =>{
    return{
        type: NOTES_DELETE_FAIL,
        payload :error
    }
}

export const NoteListRequest = () =>{
    return{
        type: NOTE_LIST_REQUEST
    }
}

export const NoteListSuccess = (data) =>{
    return{
        type: NOTE_LIST_SUCCESS,
        payload: data
    }
}

export const NoteListFail = (data) =>{
    return{
        type: NOTE_LIST_FAIL,
        payload: data
    }
}

