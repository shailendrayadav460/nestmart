import React from 'react';
import { FaHome } from 'react-icons/fa';

function Snackpage() {
  const tags = ['Cabbage', 'Broccoli', 'Artichoke', 'Celery', 'Spinach'];

  return (
    <div className="page-header">
      <div className="breadcrumb-section">
        <h1>Snack</h1>
        <div className="breadcrumbs">
          <FaHome className="home-icon" />
          <span>Home</span>
          <span>›</span>
          <span>Shop</span>
          <span>›</span>
          <span>Snack</span>
        </div>
      </div>

      <div className='tagalign'>
        <div className="tag-container">
          {tags.map((tag, index) => (
            <div className="tag" key={index}>
              <span className="tag-close">×</span>
              <span className="tag-text">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Snackpage;
