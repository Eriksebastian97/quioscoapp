import { useContext } from "react";
import quioscoContext from 'react'

const useQuiosco = ()=>{
    return useContext(quioscoContext)
}

export default useQuiosco