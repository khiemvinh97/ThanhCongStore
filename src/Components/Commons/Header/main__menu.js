import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';



const MainMenu = (props) => {


  const { t } = useTranslation();
  const cart = useSelector(state => state.cart)
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (cart !== null) {
      setLength(Object.keys(cart).length)
    }
  })


  return (
    <React.Fragment>
      <section className="main__menu">
        <div className="container">
          <div className="row">
            <div className="menu__list">
              <div className="menu__ul">
                <ul>
                  <li><a href="#">{t('header.menu.1')}</a></li>
                  <li><a href="#">{t('header.menu.2')}</a></li>
                  <li><Link to="/list">{t('header.menu.3')}</Link></li>
                  <li><a href="#">{t('header.menu.4')}</a></li>
                  <li><a href="#">{t('header.menu.5')}</a></li>
                  <li><a href="#">{t('header.menu.6')}</a></li>
                </ul>
              </div>
            </div>
            <div className="menu__hide">
              <div className="nav__menu">
                <div className="span__menu">
                  <span />
                  <span />
                  <span />
                  <div className="menu__ul">
                    <ul>
                      <li><a href="#">{t('header.menu.1')}</a></li>
                      <li><a href="#">{t('header.menu.2')}</a></li>
                      <li><Link to="/list">{t('header.menu.3')}</Link></li>
                      <li><a href="#">{t('header.menu.4')}</a></li>
                      <li><a href="#">{t('header.menu.5')}</a></li>
                      <li><a href="#">{t('header.menu.6')}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu__basket">
              <div className="basket__count">
                <p>{length}</p>
              </div>
              <div className="basket__icon">
                <Link to="/cart">
                  <i className="fa fa-shopping-basket" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default MainMenu