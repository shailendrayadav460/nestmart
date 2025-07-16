import React from 'react';
import { Card, ListGroup, Image, Badge } from 'react-bootstrap';

const categories = [
  { name: 'Milks & Dairies', count: 30, icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg' },
  { name: 'Clothing', count: 35, icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-2.svg' },
  { name: 'Pet Foods', count: 0, icon: '	https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-3.svg' },
  { name: 'Baking material', count: 0, icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-4.svg' },
  { name: 'Fresh Fruit', count: 0, icon: 'https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-5.svg' }
];

const CategorySidebar = () => {
  return (
    <Card className="p-3" style={{ borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
      <h5 style={{ fontWeight: '600', marginBottom: '10px' }}>Category</h5>
      <hr style={{ borderTop: '2px solid #e1f3e7', width: '50px', margin: '0 0 15px 0' }} />

      <ListGroup variant="flush">
        {categories.map((cat, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center mb-2"
            style={{
              backgroundColor: '#f4fef7',
              borderRadius: '10px',
              padding: '10px 15px',
              border: 'none',
            }}
          >
            <div className="d-flex align-items-center">
              <Image
                src={cat.icon}
                alt={cat.name}
                width={28}
                height={28}
                style={{ marginRight: '10px' }}
              />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>
                {cat.name}
              </span>
            </div>
            <Badge
              pill
              bg="light"
              text="dark"
              style={{ fontSize: '13px', minWidth: '30px', textAlign: 'center' }}
            >
              {cat.count}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CategorySidebar;
