import React from 'react';
import LinkedItem from './LinkedItem';
import './Components.css'

/**
 * рекламное объявление
 */

const addsData = [
  { img: { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s', alt: 'image' }, text: 'Adds Title', span: 'Adds text', link: 'https://example.com/news/3' }
];

const AddsList: React.FC = () => {
  return (
    <div className='adds-container'>
      {addsData.map((adds, index) => (
        <div key={index} className='adds-item'>
          {adds.img && <img src={adds.img.src} alt={adds.img.alt} />}
          {adds.icon && <span className='adds-icon'>{adds.icon}</span>}
          <a className='adds-link' href={adds.link}>
            {adds.text}
          </a>
          {adds.span && <span className='adds-subtext'>{adds.span}</span>}
        </div>
      ))}
    </div>
  );
};

export default AddsList;


