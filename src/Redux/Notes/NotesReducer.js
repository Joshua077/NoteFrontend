import { NOTES_UPDATE_REQUEST , NOTES_UPDATE_FAIL, NOTES_UPDATE_SUCCESS , NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS, NOTE_LIST_FAIL, NOTES_CREATE_SUCCESS, NOTES_CREATE_FAIL,NOTES_CREATE_REQUEST,NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "./NotesAcrtion"


const initialState =  {
    loading: false,
    data: [],
    error: false,
    success: false,
}
export const NoteListReducer = (state = initialState, action) => {
        switch (action.type) {
            case NOTES_LIST_REQUEST:
                return{
                    ...state,
                    loading: true,
                }
                case NOTES_LIST_SUCCESS:
                return{
                    loading: false,
        data: action.payload,
        error: false,
        success: true
                }
                case NOTES_LIST_FAIL:
                return{
                    ...state,
                    data: [],
        error: action.payload,
        success: false
                }
                
               
        
            default:
               return state
        }
}
export const CreateNoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTES_CREATE_REQUEST:
            return{
                ...state,
                loading: true,
            }
            case NOTES_CREATE_SUCCESS:
            return{
                loading: false,
    data: action.payload,
    error: false,
    success: true
            }
            case NOTES_CREATE_FAIL:
            return{
                loading: false,
                data: [],
    error: action.payload,
    success: false
            }
            
           
    
        default:
           return state
    }
}


export const SingleNoteListReducer = (state= initialState ,action) =>{
     switch(action.type){
            case NOTE_LIST_REQUEST :
                return{
                        ...state ,
                        loading : true
                }

            case NOTE_LIST_SUCCESS : return{
                        ...state ,
                loading: false,
                data: action.payload,
                success: true,

            }
            case NOTE_LIST_FAIL : return{
                loading: false,
                data: [],
                error: action.payload,
                success: false,
            }

default:
    return state
     }

}

export const EditNoteReducer = (state= initialState ,action) =>{
    switch(action.type){
           case NOTES_UPDATE_REQUEST :
               return{
                       ...state ,
                       loading : true
               }

           case NOTES_UPDATE_SUCCESS : return{
                       ...state ,
               loading: false,
               data: action.payload,
               success: true,

           }
           case NOTES_UPDATE_FAIL : return{
               loading: false,
               data: [],
               error: action.payload,
               success: false,
           }

default:
   return state
    }

}