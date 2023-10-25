import React, {useState, useEffect} from 'react';

import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'
import deleteById from '../../addressesApi/deleteById';
import create from '../../addressesApi/create';
import update from '../../addressesApi/update';
const emptyAddress = { line1:'', city:'', state:'', zip: '', id:null }

export default function Card({children, initialAddress = emptyAddress, prependAddress }) {
  const [editState, setEditState] = useState(false);
  const [address, setAddress] = useState(initialAddress)

  const editHandleClick = () => {
    setEditState(true);
    renderEditForm(address);
  }

  //open the form to create a new address
  const createHandleClick = () => {
    setEditState(true);
    console.log("create");
  }

  //delete address card
  const handleDelete = () => {
    deleteById(address.id);
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
    //update address
    const handleSaveClick = () => {
      setEditState(false);
      if (!address.id) {
        create(address)
        .then(createdAddress => prependAddress(createdAddress))
  
      } else { 
        update(address);
      }
    }
   
    return (
      <div className={`border-2 border-purple p-8 mt-8 w-full md:w-1/2 ${editState ? styles['card__edit--visible']: styles['card__edit']}`}>
        <Input onChange={handleChange} label="Address Line 1" name="line1" placeholder="Address" value={address.line1}></Input>
        <Input onChange={handleChange} label="City" name="city" placeholder="City" value={address.city}></Input>
        <Input onChange={handleChange} label="State" name="state" placeholder="State" value={address.state}></Input>
        <Input onChange={handleChange} label="Zipcode" name="zip" placeholder="Zipcode" value={address.zip}></Input>
        <Button onClick={handleSaveClick} variant="primary">Save</Button>
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
        {!address.id ? 
          <Button onClick={createHandleClick} variant="secondary">Add Address</Button>
        : 
          <>
            <Button onClick={editHandleClick} variant="secondary">Edit</Button>
            <Button onClick={handleDelete} variant="error">Delete</Button>        
          </>
        }
      </div>
    </div>
    {renderEditForm(address)}
  </div>
  )
}