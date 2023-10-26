import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Input from '../components/input/input'
import Card from '../components/card/card'

import search from '../addressesApi/search';
import seedAddresses from '../addressesApi/seedAddresses'; 

export default function Home( {} ) {
  // seedAddresses()
  const [searchString, setSearchString] = useState('')
  const [addresses, setAddresses] = useState([])

  const prependAddress = address => {
    setAddresses([address,...addresses])
  }

  const removeAddress = addressToRemove => {
    setAddresses(addresses.filter(address => addressToRemove.id != address.id))
  }

  const replaceAddress = replacementAddress => {
    setAddresses(addresses.map(address => replacementAddress.id === address.id ? replacementAddress : address))
  }

  const searchHandleChange = e => setSearchString(e.target.value);
  
  const renderSearchInput = () => {
    return (
      <>
        <div className="w-full md:w-1/2">
          <Input
            value={searchString}
            onChange={searchHandleChange}
            icon="icon-search.svg"
            name="search"
          />
        </div>
      </>
    )
  }

  const cardProps = {
    prependAddress,
    removeAddress,
    replaceAddress
  }

  const renderAddressCards = () => {
    return (
      <div className="mt-10">
        <Card {...cardProps} />
        {addresses.map((address) => 
          <Card 
            key={address.id} 
            initialAddress={address} 
            {...cardProps}
          />
        )}
      </div>
    )
  }

  useEffect(() => {
    search(searchString)
      .then(results => setAddresses(results));
  },[searchString])

  return (
    <Layout home>
      <Head>
        <title>Address Book</title>
      </Head>
      <h1 className="mb-8">Address Book</h1>
        {renderSearchInput()}
        {renderAddressCards()}
    </Layout>
  )
}