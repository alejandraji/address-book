import React, { useState } from 'react';

import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'

export default function Card({children, address}) {
  let [editState, setEditState] = useState(false);
  let [saveState, setSaveState] = useState(true);

  const editHandleClick = () => {
    setEditState(true);
    renderEditForm();
  }

  const saveHandleClick = () => {
    console.log('save');
    setSaveState(true);
  }

  const createHandleClick = () => {
    console.log("create");
  }
  
  const deleteHandleClick = () => {
    console.log('delete')
  }
  
  const renderEditForm = () => {
    return (
      <div className={`border-2 border-purple p-8 mt-8 w-full md:w-1/2 ${editState ? styles['card__edit--visible']: styles['card__edit']}`}>
        <Input></Input>
        <Input></Input>
        <Button onClick={saveHandleClick} variant="primary">Save</Button>
      </div>
    )
  }

  return (
  <div className={styles.card}>
    <div className={`flex flex-wrap justify-between items-center`}>
      <div className="mb-4 md:mb-0">
        {children}
      </div>
      <div >
        {!address ? 
          <Button onClick={createHandleClick} variant="secondary">Add Address</Button>
        : 
          <>
            <Button onClick={editHandleClick} variant="secondary">Edit</Button>
            <Button onClick={deleteHandleClick} variant="error">Delete</Button>        
          </>
        }
      </div>
    </div>
    {renderEditForm()}
  </div>
  )
}