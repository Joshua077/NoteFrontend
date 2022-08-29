import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userLogin, userRegistration } from "./User/userReducer";
import { loadState, saveState } from "./LocalStorage";
import { CreateNoteReducer, EditNoteReducer, NoteListReducer, SingleNoteListReducer } from "./Notes/NotesReducer";


const persistedState = loadState();

const rootReducer = combineReducers({
  Login: userLogin,
  Registration: userRegistration,
  NoteList : NoteListReducer,
  CreateNotes: CreateNoteReducer,
  SingleNote: SingleNoteListReducer,
  EditNote : EditNoteReducer

});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

store.subscribe(() => {
      saveState(store.getState());
    });