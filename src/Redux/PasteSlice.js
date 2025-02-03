import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  Pastes:localStorage.getItem("Pastes")
  ? JSON.parse(localStorage.getItem ("Pastes"))
  : []
}

export const PasteSlice = createSlice({
  name: 'Paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
    const paste = action.payload;
    //add a check -> paste already exist


    state.Pastes.push(paste);

    localStorage.setItem("Pastes", JSON.stringify(state.Pastes));
    
    toast("Paste created successfully");
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>
    item._id == paste._id);
      
      if(index >=0){
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringfy(state.pastes));
        toast.success("paste update");
      }
      
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
     
    },
    removeFromPastes: (state,action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item) =>
     item._id == pasteId);

      if(index >=0){
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify
          (state.pastes)
        );
        toast.success("paste deleted");
      }

    },
  },
})

// Action creators are generated for each case reducer function
export const {addToPastes, updateToP, resetAllPastes ,removeFromPastes } = PasteSlice.actions

export default PasteSlice.reducer