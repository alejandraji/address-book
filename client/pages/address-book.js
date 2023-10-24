import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Input from '../components/input/input'
import Card from '../components/card/card'
import Button from '../components/button/button'

const searchAddresses = (search = "") =>
  fetch(`http://localhost:3001/addresses?search=${search}`)
    .then(response => response.json())

export default function Home( {} ) {

  let [addresses, setAddresses] = useState([])

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
          label="HELLO"
        ></Input>
      </div>
      <div className="mt-10">
      <Card editState={false} addState={true}>
          <p className="text-lg">Add a new user's address</p>
      </Card>
      {addresses.map((address,i) => 
        <Card key={i} address={address}>
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