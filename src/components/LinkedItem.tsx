import React from 'react';
import './Components.css'

/**
 * Элемент списка в виде ссылки (может быть с иконкой) 
 */

interface LinkedItemProps {
  icon?: string;
  text: string;
  link: string;
  span: string;
}

const LinkedItem: React.FC<LinkedItemProps> = ({ icon, text, span, link }) => {
  return (
    <div className='linked-item'>
      <span>{icon}</span>
      <a href={link}>{text}</a>
    </div>
  );
};

export default LinkedItem;