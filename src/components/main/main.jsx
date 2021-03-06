import React from 'react';
import SideDecoration from '../../img/SideDecoration.png';
import SideDecorationSmall from '../../img/SideDecorationSmall.png';
import './main.scss';

function Main() {
  return (
    <main className='main__info' id='main'>
      <div className="container">
        <div className="main__info-block row">
          <h1 className='main__info__title'>
            Ресторан "VIVA OLIVE" запрошує всіх бажаючих
        <br />
        на обід!
      </h1>
          <p className='main__info__text '>
            Наш ресторан може запропонувати Вам послуги найвищого рівня (літня
            тераса, затишний закритий зал, домашня атмосфера). Наші шеф-кухарі
            задовольнять самі витончені запити гурманів. Всі наші страви припадуть
            до смаку як дітям, так і дорослим шанувальникам вишуканої кухні.
      </p>
          <p className='main__info__text '>
            Гурмани зможуть по достоїнству оцінити всі наші страви!
      </p>
          <p className='main__info__text '>
            Наш ресторан може запропонувати Вам домашній затишок в поєднанні з
            високою якістю обслуговування і величезним асортиментом цікавих страв.
      </p>
        </div>

        <div className='main__info__image'>
          <img src={SideDecoration} alt='sideimg' />
        </div>
        {/* <div className='main__info__image main__info__image--small'>
          <img src={SideDecorationSmall} alt='sideimg' />
        </div> */}

      </div>
    </main >
  );
}

export default Main;
