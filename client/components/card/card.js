import React, {useState, useEffect} from 'react';

import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'
import deleteById from '../../addressesApi/deleteById';
import create from '../../addressesApi/create';
import update from '../../addressesApi/update';
const emptyAddress = { line1:'', city:'', state:'', zip: '', id:null }

// name needs to match address object keys
const formSchema = [
  {
    label: "Address Line 1",
    name: "line1",
    placeholder: "Address",
    type:'text'

  },
  {
    label: "City",
    name: "city",
    placeholder: "City",
    type:'text'
  },
  {
    label: "State",
    name: "state",
    placeholder: "State",
    type:'text'
  },
  {
    label: "Zipcode",
    name: "zip",
    placeholder: "Zipcode",
    type:'text'
  }
]

export default function Card({initialAddress = emptyAddress, prependAddress, removeAddress, replaceAddress }) {
  const [editState, setEditState] = useState(false);
  const [address, setAddress] = useState(initialAddress)
  const [addressErrors, setAddressErrors] = useState({line1: null, zip: null, city: null, state: null})
  const setAddressError = (name, message) => setAddressErrors({...addressErrors, [name]: message})


  const formHandleClick = () => {
    setEditState(true);
    renderEditForm(address);
  }

  // Open form to create a new address
  const createHandleClick = () => {
    setEditState(true);
  }

  // Delete address
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
    // Update address
    const saveHandleClick = () => {
      if (!address.id) {
        create(address)
          .then(createdAddress => {
            setEditState(false);
            prependAddress(createdAddress)
          })
      } else { 
        update(address)
          .then(updatedAddress => {
            setEditState(false);
            replaceAddress(updatedAddress)
          })
          .catch(errors => {
            errors.forEach(({params})=> setAddressError(params.missingProperty, `${params.missingProperty} is wrong`)  )
          })
      }
    }
    // Close form
    const cancelHandleClick = () => {
      setEditState(false);
    }
    console.log('addre errors', addressErrors);
    return (
      <div className={`border-2 border-purple p-8 mt-8 w-full md:w-1/2 ${editState ? styles['card__edit--visible']: styles['card__edit']}`}>
        {formSchema.map(inputSchema => 
            <Input 
              key={inputSchema.name}
              onChange={handleChange} 
              value={address[inputSchema.name]} 
              errorMessage={addressErrors[inputSchema.name]}
              {...inputSchema}
            />
        )}
        <Button onClick={saveHandleClick} variant="primary">Save</Button>
        <Button onClick={cancelHandleClick} variant="primary">Cancel</Button> 
      </div>
    )
  }

  const initialAddressCard = <p>{initialAddress.line1}, {initialAddress.city}, {initialAddress.state} {initialAddress.zip}</p>
  const addAddressButton = <Button onClick={createHandleClick} variant="secondary">Add Address</Button>
  const editAndDeleteButtons = (
    <>
    <Button onClick={formHandleClick} variant="secondary">Edit</Button>
    <Button onClick={deleteHandleClick} variant="error">Delete</Button> 
    </>
  )

  return (
  <div className={styles.card}>
    <div className={`flex flex-wrap justify-between items-center`}>
      <div className="mb-4 md:mb-0">
        {!editState && !address.id  && <p className="text-lg">Add a new user's address</p>}
        {initialAddress.id && initialAddressCard} 
      </div>
      <div>
      {!address.id ? addAddressButton : editAndDeleteButtons}
      </div>
    </div>
    {renderEditForm(address)}
  </div>
  )
}