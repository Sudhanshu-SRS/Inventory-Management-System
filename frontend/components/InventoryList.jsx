import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:3001/api/items');
    setItems(response.data);
  };

  const addItem = async () => {
    const response = await axios.post('http://localhost:3001/api/items', { id: Date.now(), name: newItem });
    setItems([...items, response.data]);
    setNewItem('');
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/api/items/${id}`);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New item"
          className="border p-2 mr-2"
        />
        <button onClick={addItem} className="bg-blue-500 text-white p-2 rounded">Add Item</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            {item.name}
            <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;