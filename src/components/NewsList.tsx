import React from 'react';
import LinkedItem from './LinkedItem';
import './Components.css'

/**
 * Список всех новостей
 */

const newsData = [
  { icon: '📰', text: 'Новость №1', link: 'https://example.com/news/1' },
  { icon: '📰', text: 'Новость №2', link: 'https://example.com/news/2' },
];

const NewsList: React.FC = () => {
  return (
    <div className='news-container'>
      <h2>Новости</h2>
      <div className='news-list'>
        {newsData.map((news, index) => (
          <LinkedItem key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;