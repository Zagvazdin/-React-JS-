// src/CommentsList.js
import React, { useState } from 'react';
import './CommentsList.css'; // Импортируем стили

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const handleDelete = (id) => {
    const commentToDelete = comments.find(comment => comment.id === id);
    const words = commentToDelete.text.split(' '); // Разбиваем текст на слова

    let index = 0;
    const interval = setInterval(() => {
      if (index < words.length) {
        // Заменяем слово на пустоту
        words[index] = '';
        setComments(prevComments => 
          prevComments.map(comment => 
            comment.id === id ? { ...comment, text: words.join(' ') } : comment
          )
        );
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setComments(prevComments => prevComments.filter(comment => comment.id !== id));
        }, 100); // Ждем немного перед удалением
      }
    }, 100); // Интервал между исчезновениями слов

    // Переворот кнопки
    const button = document.getElementById(`button-${id}`);
    if (button) {
      button.classList.add('flip');
    }

    // Удаляем кнопку через 600 мс
    setTimeout(() => {
      if (button) {
        button.classList.remove('flip');
      }
    }, 600);
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="comment">
            <span className="comment-text">{comment.text}</span>
            <button 
              id={`button-${comment.id}`} 
              onClick={() => handleDelete(comment.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
