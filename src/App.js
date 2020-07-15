import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import IpInfo from './IpInfo'

const GET_IP_INFO = gql`
  query getIpInfo {
    client {
      ipAddress {
        address
        city {
          name
          population
        }
        country {
          name
          population
          capital {
            name
          }
          currencies {
            name
          }
        }
      }
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_IP_INFO)

  if (loading) return 'Loading...'
  if (error) return 'Error :('

  return <IpInfo ip={data.client.ipAddress} />
}

export default App
