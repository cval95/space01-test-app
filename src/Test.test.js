import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Test1 from './Test1';

const mockedData = [
    { name: 'Item A', price: 125 },
    { name: 'Item B', price: 230 },
    { name: 'Item C', price: 295 },
    { name: 'Item D', price: 245 },
    { name: 'Item E', price: 900 },
    { name: 'Item F', price: 875 },
    { name: 'Item G', price: 235 },
    { name: 'Item H', price: 400 },
  ];
  

test('renders the cheapest 5 items on landing sorted by price', () => {
    render(<Test1 />);
    const itemCards = screen.queryAllByTestId('mocked-test-component');
  
    // Assert that there are exactly 5 items
    expect(itemCards).toHaveLength(5);
  
    // Assert specific items are in the document
    expect(screen.getByText(/Item A/i)).toBeTruthy();
    expect(screen.getByText(/Item B/i)).toBeTruthy();
    expect(screen.getByText(/Item C/i)).toBeTruthy();
    expect(screen.getByText(/Item D/i)).toBeTruthy();
    expect(screen.getByText(/Item G/i)).toBeTruthy();
  });


  test('toggles between showing the cheapest 5 items and all items', () => {
    render(<Test1 />);
    const checkbox = screen.getByRole('checkbox', { name: /Cheapest 5 items/i });
  
    // Toggle to show all items
    fireEvent.click(checkbox);
    const allItemCards = screen.queryAllByTestId('mocked-test-component');
    expect(allItemCards).toHaveLength(mockedData.length);
  
    // Toggle back to show the cheapest 5 items
    fireEvent.click(checkbox);
    const cheapestItemCards = screen.getAllByTestId('mocked-test-component');
    expect(cheapestItemCards).toHaveLength(5);
  });
  

  test('filters items by name', () => {
    render(<Test1 />);
    
    // Filter by name
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'Item A' } });
  
    // Assert that 'Item A' is visible
    expect(screen.getByText(/Item A/i)).toBeTruthy();
  });