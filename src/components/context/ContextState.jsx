import React, { useState } from 'react'
import Context from './Context';

const ContextState = (props) => {
    const [Sports,setSports]=useState();
  return (
    <Context.Provider value={{Sports,setSports}} >
        {props.children}
    </Context.Provider>
  )
}

export default ContextState
