import React from 'react'
import styled from 'styled-components'
import Center from './Center'
import { Table, Header, Data } from './Table'

const IpInfo = ({ ip: { address, city, country } }) => (
  <Center>
    <Table>
      <thead>
        <tr>
          <Header type="attr">Attribute</Header>
          <Header type="val">Value</Header>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Data type="attr">IP Address</Data>
          <Data type="val">{address}</Data>
        </tr>
        <tr>
          <Data type="attr">City</Data>
          <Data type="val">{city.name}</Data>
        </tr>
        <tr>
          <Data type="attr">City population</Data>
          <Data type="val">{city.population}</Data>
        </tr>
        <tr>
          <Data type="attr">Country</Data>
          <Data type="val">{country.name}</Data>
        </tr>
        <tr>
          <Data type="attr">Country</Data>
          <Data type="val">{country.population}</Data>
        </tr>
      </tbody>
    </Table>
  </Center>
)

export default IpInfo
