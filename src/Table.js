import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 400px;
`

const MainTable = styled.table`
  border-spacing: 0;
  width: 100%;
`

const Header = styled.th`
  padding-left: ${props => props.type === 'attr' ? '40px' : '0px'};
  padding-right: ${props => props.type === 'val' ? '40px' : '0px'};
  background-color: #6c7ae0;
  text-align: left;
  line-height: 1.4;
  font-size: 18px;
  color: #fff;
`

const Data = styled.td`
  padding-left: ${props => props.type === 'attr' ? '40px' : '0px'};
  padding-right: ${props => props.type === 'val' ? '40px' : '0px'};
  padding-bottom: 8px;
  padding-top: 8px;
  line-height: 1.4;
  font-size: 15px;
  color: #808080;
`

const Table = ({ children }) => (
  <Wrapper>
    <MainTable>
      {children}
    </MainTable>
  </Wrapper>
)

export { Table, Header, Data }
