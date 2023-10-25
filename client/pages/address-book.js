import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Input from '../components/input/input'
import Card from '../components/card/card'

import searchAddresses from '../modules/searchAddresses';

export default function Home( {} ) {

  const [addresses, setAddresses] = useState([])
  const setAddress = updatedAddress => {
    const updatedAddresses = addresses.map(address => {
      return address.id === updatedAddress.id ?  updatedAddress : address;
    })
    setAddresses(updatedAddresses)
  }

  useEffect(() => {
    searchAddresses()
      .then(results => setAddresses(results));
  },[])

  return (
    <Layout home>
      <Head>
        <title>Address Book</title>
      </Head>
      <h1 className="mb-8">Address Book</h1>
      <div className="w-full md:w-1/2">
        <Input
          icon="icon-search.svg"
          name="search"
        ></Input>
      </div>
      <div className="mt-10">
      <Card editState={false} addState={true}>
          <p className="text-lg">Add a new user's address</p>
      </Card>
      {addresses.map((address,i) => 
        <Card key={i} address={address} setAddress={setAddress}>
          <p>
            {address.line1}, {address.city}, {address.state} {address.zip}
          </p>
        </Card>
      )}
        <Card editState={true}>
          <p>Harry Lobster</p>
          <p>185 Berry St #6100, San Francisco, CA 94107</p>
        </Card>
      </div>
    </Layout>
  )
}