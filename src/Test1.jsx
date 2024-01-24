import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { Checkbox, TextField, Typography, Container, Card } from '@mui/material';

const data = [
    { name: 'Item A', price: 125 },
    { name: 'Item B', price: 230 },
    { name: 'Item C', price: 295 },
    { name: 'Item D', price: 245 },
    { name: 'Item E', price: 900 },
    { name: 'Item F', price: 875 },
    { name: 'Item G', price: 235 },
    { name: 'Item H', price: 400 },
];

const Test1 = () => {
    const [showCheapest, setShowCheapest] = useState(true);
    const [filterName, setFilterName] = useState('');
    
    const filteredData = data.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()));
    const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
    const itemsToShow = showCheapest ? sortedData.slice(0, 5) : sortedData;
   

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '20px' }}>
          Product List
        </Typography>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '20px' }}>
            Cheapest 5 items:
            <Checkbox
              checked={showCheapest}
              onChange={() => setShowCheapest(!showCheapest)}
            />
          </label>    
            <TextField
              type="text"
              placeholder='Search'
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {itemsToShow.map((item, index) => (
          <Card key={index} style={{ marginBottom: '20px', width: '300px' }} data-testid={`card-${index}`}>
    
    <ItemCard data-testid="mocked-test-component" {...item} />

            
            </Card>
          ))}
        </div>
      </Container>
    );
  };
  
export default Test1;
