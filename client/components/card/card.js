import React, {useState, useEffect} from 'react';

import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'
import postAddressRequest from '../../modules/postAddressRequest';

export default function Card({children, address, setAddress}) {
  const [editState, setEditState] = useState(false);
  const [addState, setAddState] = useState(false);

  const editHandleClick = () => {
    setEditState(true);
    //edit the form and save
    renderEditForm();
  }

  const createHandleClick = () => {
    //post address to db
    //createAddress open form to write new address
    setEditState(true);
    console.log("create");
  }
  
  const deleteHandleClick = () => {
    //delete module delete id from the db
    console.log('delete')
  }

  
  const renderEditForm = (address) => {
    const handleChange = (event) => {
      const updatedAddress = {
        ...address,
        [event.target.name]: event.target.value,
      }
      setAddress(updatedAddress);
    }
    const editAddressOnClick = () => {
      setEditState(false);
      postAddressRequest(setAddress)
      //post address on same id
    }
   
    return (
      <div className={`border-2 border-purple p-8 mt-8 w-full md:w-1/2 ${editState ? styles['card__edit--visible']: styles['card__edit']}`}>
        <Input onChange={handleChange} label="Address Line 1" name="line1" placeholder="Address" value={address?.line1}></Input>
        <Input onChange={handleChange} label="City" name="city" placeholder="City" value={address?.city}></Input>
        <Input onChange={handleChange} label="State" name="state" placeholder="State" value={address?.state}></Input>
        <Input onChange={handleChange} label="Zipcode" name="zipcode" placeholder="Zipcode" value={address?.zipcode}></Input>
        <Button onClick={editAddressOnClick}variant="primary">Save</Button>
      </div>
    )
  }

  useEffect(() => {
    console.log(setAddress)
   },[])
 

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
    {renderEditForm(address)}
  </div>
  )
}