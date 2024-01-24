// ItemCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ItemCard = ({ name, price }) => (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#f0f0f0' }}>
    <CardContent data-testid="mocked-test-component">
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="h7">
           £{price}
          </Typography>
        </CardContent>
    </Card>
);

export default ItemCard;
