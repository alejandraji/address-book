import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Input from '../components/input/input'
import Card from '../components/card/card'

import search from '../addressesApi/search';

export default function Home( {} ) {

  const [addresses, setAddresses] = useState([])
  const prependAddress = address => {
    setAddresses([address,...addresses])
  }

  useEffect(() => {
    search()
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
      <Card prependAddress={prependAddress} >
          <p className="text-lg">Add a new user's address</p>
      </Card>
      {addresses.map((address,i) => 
        <Card key={i} initialAddress={address} prependAddress={prependAddress}>
          <p>
            {address.line1}, {address.city}, {address.state} {address.zip}
          </p>
        </Card>
      )}
      </div>
    </Layout>
  )
}