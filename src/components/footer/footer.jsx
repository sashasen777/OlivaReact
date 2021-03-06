import React from 'react';
import sprite from '../../img/icons-sprite.svg';
import logo from '../../img/logo.png';
import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-9 order-2 order-md-1 col-md-4 footer__copyright'>
            При використанні матеріалів
            <br /> з сайту посилання на ресурс
            <br />
            обов'язкове
            <a
              href='http://viv-live.com.ua/poltava/'
              target='_blank'
              className='webSite'
            >
              www.viv-live.com.ua
            </a>
          </div>
          <div className='col-3 order-md-2 col-md-4 footer__logo'>
            <img src={logo} alt='logo' className='footer__logo__img' />
          </div>
          <div className='col-9 order-3 order-md-3 col-md-4 footer__social__text'>
            Також нас можна знайти в соціальних
            <br /> мережах, приєднуйтесь до нас:
          </div>
          <div className='col-12 order-4 order-md-4 offset-md-3 col-md-6 footer__social'>
            <div className='row footer__social__icons'>
              <div className='svgBg'>
                <a
                  href='https://www.instagram.com/viv.live.trattoria/'
                  target='_blank'
                >
                  <svg className='socialIcon'>
                    <use href={sprite + '#instagram'}></use>
                  </svg>
                </a>
              </div>
              <div className='svgBg'>
                <a
                  href='https://www.facebook.com/viv.live.trattoria/'
                  target='_blank'
                >
                  <svg className='socialIcon'>
                    <use href={sprite + '#vk'}></use>
                  </svg>
                </a>
              </div>
              <div className='svgBg'>
                <a
                  href='https://www.facebook.com/viv.live.trattoria/'
                  target='_blank'
                >
                  <svg className='socialIcon'>
                    <use href={sprite + '#twitter'}></use>
                  </svg>
                </a>
              </div>
              <div className='svgBg'>
                <a
                  href='https://www.facebook.com/viv.live.trattoria/'
                  target='_blank'
                >
                  <svg className='socialIcon'>
                    <use href={sprite + '#facebook'}></use>
                  </svg>
                </a>
              </div>
              <div className='svgBg'>
                <a
                  href='https://www.facebook.com/viv.live.trattoria/'
                  target='_blanc'
                >
                  <svg className='socialIcon'>
                    <use href={sprite + '#odnoklassniki'}></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
