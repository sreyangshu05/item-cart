import { useState, useEffect } from 'react';
import { Item } from '../types/Item';

const STORAGE_KEY = 'item-management-items';

// Sample data for demonstration
const sampleItems: Item[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    type: 'Shirt',
    description: 'High-quality 100% organic cotton t-shirt with a comfortable fit. Perfect for casual wear and available in multiple colors.',
    coverImage: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    additionalImages: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2', 
    name: 'Professional Running Shoes',
    type: 'Shoes',
    description: 'Advanced running shoes with superior cushioning and breathable mesh design. Engineered for performance and comfort during long runs.',
    coverImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    additionalImages: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    name: 'Denim Jeans Classic Fit',
    type: 'Pant',
    description: 'Classic fit denim jeans made from premium quality denim. Features a timeless design with modern comfort and durability.',
    coverImage: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
    additionalImages: [
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-05')
  }
];

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems);
        setItems(parsedItems.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt)
        })));
      } catch (error) {
        console.error('Error parsing saved items:', error);
        setItems(sampleItems);
      }
    } else {
      setItems(sampleItems);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loading]);

  const addItem = (item: Omit<Item, 'id' | 'createdAt'>) => {
    const newItem: Item = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setItems(prev => [newItem, ...prev]);
    return newItem;
  };

  const getItem = (id: string) => {
    return items.find(item => item.id === id);
  };

  return {
    items,
    loading,
    addItem,
    getItem
  };
};