import React from 'react';
import './main.scss';
const Main = () => {
  return (
    <main>
        <div className='main'>
            <div className='main__profile'>
                <figure className='main__profile__image'>
                    <img src='images/profile.jpeg' alt='profile'/> 
                </figure>
                <div className='main__profile__info'>
                    <h1 className='text--title'>Mehmet Kaan Toprak</h1>
                    <p className='text--p'>Frontend Developer / Blogger</p>
                    <div className='main__profile__info__icon-group'>
                        <a href="/"><i className='icon-instagram'></i></a>
                        <a href="/"><i className='icon-twitter'></i></a>
                        <a href="/"><i className='icon-linkedin'></i></a>
                        <a href="/"><i className='icon-github'></i></a>
                    </div>

                    <a className='main__profile__info__button' href='images/profile.jpeg' download> Download CV</a>

                </div>
            </div>
            <div className='main__content'>

            </div>
        
        </div>
    </main>
  )
}

export default Main