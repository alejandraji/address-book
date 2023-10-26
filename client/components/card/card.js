import React, {useState, useEffect} from 'react';

import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'
import deleteById from '../../addressesApi/deleteById';
import create from '../../addressesApi/create';
import update from '../../addressesApi/update';
const emptyAddress = { line1:'', city:'', state:'', zip: '', id:null }

export default function Card({initialAddress = emptyAddress, prependAddress, removeAddress, replaceAddress }) {
  const [editState, setEditState] = useState(false);
  const [address, setAddress] = useState(initialAddress)

  const formHandleClick = () => {
    setEditState(true);
    renderEditForm(address);
  }

  //open the form to create a new address
  const createHandleClick = () => {
    setEditState(true);
  }

  //delete address card
  const deleteHandleClick = () => {
    deleteById(address.id)
    .then(()=> removeAddress(address))
  }

  const renderEditForm = (address) => {
    const handleChange = (event) => {
      const updatedAddress = {
        ...address,
        [event.target.name]: event.target.value,
      }
      setAddress(updatedAddress);
    }
    // update address
    const saveHandleClick = () => {
      setEditState(false);
      if (!address.id) {
        create(address)
         .then(createdAddress => prependAddress(createdAddress))
  
      } else { 
        update(address)
         .then(updatedAddress => { 
          console.log(updatedAddress)
          replaceAddress(updatedAddress)
        })
      }
    }
    // close form
    const cancelHandleClick = () => {
      setEditState(false);
    }
    
    return (
      <div className={`border-2 border-purple p-8 mt-8 w-full md:w-1/2 ${editState ? styles['card__edit--visible']: styles['card__edit']}`}>
        <Input onChange={handleChange} label="Address Line 1" name="line1" placeholder="Address" value={address.line1}></Input>
        <Input onChange={handleChange} label="City" name="city" placeholder="City" value={address.city}></Input>
        <Input onChange={handleChange} label="State" name="state" placeholder="State" value={address.state}></Input>
        <Input onChange={handleChange} label="Zipcode" name="zip" placeholder="Zipcode" value={address.zip}></Input>
        <Button onClick={saveHandleClick} variant="primary">Save</Button>
        <Button onClick={cancelHandleClick} variant="primary">Cancel</Button> 
      </div>
    )
  }

  return (
  <div className={styles.card}>
    <div className={`flex flex-wrap justify-between items-center`}>
      <div className="mb-4 md:mb-0">
        {!editState && !address.id  && <p className="text-lg">Add a new user's address</p>}
        { address.id && <p>{address.line1}, {address.city}, {address.state} {address.zip}</p>}
      </div>
      <div >
        {!address.id ? 
          <Button onClick={createHandleClick} variant="secondary">Add Address</Button>
        : 
          <>
            <Button onClick={formHandleClick} variant="secondary">Edit</Button>
            <Button onClick={deleteHandleClick} variant="error">Delete</Button>   
          </>
        }
      </div>
    </div>
    {renderEditForm(address)}
  </div>
  )
}