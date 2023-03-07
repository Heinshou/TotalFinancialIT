import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nombre: '',
    email: '',
    telefono: '',
    proyecto: '',
    acerca: '',
    descripcion: '',
    financiamiento: '',
    comentarios: ''
}

const informationSlice = createSlice({
    name: 'information',
    initialState, 
    reducers: {
        setInformation:(state, action) => {return{...state, nombre: action.payload}}
    }
})

export const {setInformation} = informationSlice.actions; 

// :(
export default informationSlice.reducer