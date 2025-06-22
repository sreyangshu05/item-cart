export interface Item {
  id: string;
  name: string;
  type: ItemType;
  description: string;
  coverImage: string;
  additionalImages: string[];
  createdAt: Date;
}

export type ItemType = 'Shirt' | 'Pant' | 'Shoes' | 'Sports Gear' | 'Electronics' | 'Books' | 'Home & Garden' | 'Other';

export const ITEM_TYPES: ItemType[] = [
  'Shirt',
  'Pant', 
  'Shoes',
  'Sports Gear',
  'Electronics',
  'Books',
  'Home & Garden',
  'Other'
];