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
                    <p className='text--p'>Frontend Developer </p>
                    <div className='main__profile__info__icon-group'>
                        <a href="/"><i className='icon-instagram'></i></a>
                        <a href="/"><i className='icon-twitter'></i></a>
                        <a href="/"><i className='icon-linkedin'></i></a>
                        <a href="/"><i className='icon-github'></i></a>
                    </div>
                </div>
                <a className='main__profile__info__button' href='images/profile.jpeg' download> Download CV</a>
            </div>
            <div className='main__content'>
                <div className='main__content__about'>
                    <h1 className='text--content-title main__content__title'>About Me</h1>
                    <div className='main__content__grid grid grid--two-columns'>
                        <div className='main__content__grid__left'>
                            <p>Hello! I’m Ryan Adlard.
                                Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.</p>
                        </div>
                        <div className='main__content__grid__right main__content__about__badges '>

                                <div className='main__content__about__badges__badge'>
                                    <span className='main__content__about__badges__badge__key'>Age :</span>
                                    <span className='main__content__about__badges__badge__value'>27</span>
                                </div>
                                <div className='main__content__about__badges__badge'>
                                    <span className='main__content__about__badges__badge__key'>Residence :</span>
                                    <span className='main__content__about__badges__badge__value'>Turkey</span>
                                </div>
                                <div className='main__content__about__badges__badge'>
                                    <span className='main__content__about__badges__badge__key'>Freelence :</span>
                                    <span className='main__content__about__badges__badge__value'>Available</span>
                                </div>

                                
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </main>
  )
}

export default Main