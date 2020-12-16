import React from 'react';

function Menu(props) {
    return (
        <div className="menu">
          <ul>
              <li>
                  <a href="#closhes">Одежда</a>
              </li>
              <li>
                  <a href="#forkids">Детям</a>
              </li>
              <li>
              <a href="#books">Книги</a>
              </li>
              <li>
              <a href="#computers">Компьютеры</a>
              </li>
              <li>
              <a href="#contacts">Контакты</a>
              </li>
          </ul>
        </div>
    );
}

export default Menu;