import React from 'react';
import { TableView, TableBody, TableHeader, Cell, Row, Column, ActionGroup, Item, Text } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
import './index.css';

const airportsList = [
  {
    id: 1,
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: []
  },
  {
    id: 2,
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: []
  },
  {
    id: 3,
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminals: []
  },
  {
    id: 4,
    name: 'Istanbul Airport',
    country: 'Turkey',
    code: 'IST',
    terminals: []
  },
  {
    id: 5,
    name: 'Rajiv Gandhi International Airport',
    country: 'India',
    code: 'HYD',
    terminals: []
  }
];

function Dashboard() {
  return (
    <div className='dash-board'>
      <h2>Airports</h2>
      <TableView
        aria-label="Example table with static contents"
        selectionMode="multiple"
      >
        <TableHeader>
          <Column>All Airports</Column>
          <Column>Country</Column>
          <Column>Code</Column>
          <Column>Terminals</Column>
          <Column>Actions</Column>
        </TableHeader>
        <TableBody>
          {airportsList.map((airport) => (
            <Row key={airport.id}>
              <Cell>{airport.name}</Cell>
              <Cell>{airport.country}</Cell>
              <Cell>{airport.code}</Cell>
              <Cell>{airport.terminals.length}</Cell>
              <Cell>
                <ActionGroup buttonLabelBehavior="hide">
                  <Item key="edit">
                    <Edit />
                    <Text>Edit</Text>
                  </Item>
                  <Item key="delete">
                    <Delete />
                    <Text>Delete</Text>
                  </Item>
                </ActionGroup>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </div>
  );
}

export default Dashboard;
