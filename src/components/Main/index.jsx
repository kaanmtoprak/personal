import React from 'react';
import './main.scss';
import Form from '../Form';
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
                <div className='main__content__resume'>
                    <h1 className='text--content-title main__content__title'>Resume</h1>
                    <div className='main__content__grid grid grid--two-columns'>
                        <div className='main__content__grid__left'>
                            <div className='main__content__section-title'>
                                <i className='icon-case'></i>
                                <span className='text--section-title'>Experience</span>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year active'>
                                    2023 - Present
                                </div>
                                <div className='main__content__section-content__title'>
                                    Frontend Developer
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    Maykim Group
                                </div>
                                <div className='main__content__section-content__comment'>
                                    Consequat reprehenderit adipisicing nostrud voluptate eiusmod nisi culpa pariatur sunt qui sint irure.
                                </div>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year'>
                                    2022 - 2023
                                </div>
                                <div className='main__content__section-content__title'>
                                    Frontend Developer
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    Martı Teknoloji
                                </div>
                                <div className='main__content__section-content__comment'>
                                    Consequat reprehenderit adipisicing nostrud voluptate eiusmod nisi culpa pariatur sunt qui sint irure.
                                </div>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year'>
                                    2019 - 2022
                                </div>
                                <div className='main__content__section-content__title'>
                                    Frontend Developer
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    Maykim Group
                                </div>
                                <div className='main__content__section-content__comment'>
                                    Consequat reprehenderit adipisicing nostrud voluptate eiusmod nisi culpa pariatur sunt qui sint irure.
                                </div>
                            </div>
                        </div>
                        <div className='main__content__grid__right'>
                        <div className='main__content__section-title'>
                        <i className='icon-books'></i>
                                <span className='text--section-title'>Education</span>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year'>
                                    2019 
                                </div>
                                <div className='main__content__section-content__title'>
                                    Frontend Developer Course
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    Patika Dev
                                </div>
                                <div className='main__content__section-content__comment'>
                                    Consequat reprehenderit adipisicing nostrud voluptate eiusmod nisi culpa pariatur sunt qui sint irure.
                                </div>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year'>
                                    2019
                                </div>
                                <div className='main__content__section-content__title'>
                                    Graphic and Web Design
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    BilgeAdam Academy
                                </div>
                                <div className='main__content__section-content__comment'>
                                    Consequat reprehenderit adipisicing nostrud voluptate eiusmod nisi culpa pariatur sunt qui sint irure.
                                </div>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year'>
                                    2014 - 2019
                                </div>
                                <div className='main__content__section-content__title'>
                                    Atılım University
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    Ankara
                                </div>
                                <div className='main__content__section-content__comment'>
                                    Consequat reprehenderit adipisicing nostrud voluptate eiusmod nisi culpa pariatur sunt qui sint irure.
                                </div>
                            </div>
                        </div>

                </div>
                </div>
                <div className='main__content__skills'>
                <h1 className='text--content-title main__content__title'>My Skills</h1>
                <div className='main__content__grid grid grid--two-columns'>
                        <div className='main__content__grid__left'>
                        <div className='main__content__section-title'>
                                <i className='icon-embed'></i>
                                <span className='text--section-title'>Coding</span>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>HTML5</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"95%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>CSS3</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"85%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>SASS</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"81%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>JAVASCRPT</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"90%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>TYPESCRIPT</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"85%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>REACTJS</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"90%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>NEXTJS</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"80%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>NODEJS</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"70%"}}></div>
                                        </div>
                                </div>
                                <div className='main__content__section-content__coding'>
                                        <div className='main__content__section-content__coding__name'>MONGODB</div>
                                        <div className='progress'>
                                            <div className='progress__percentage' style={{width:"60%"}}></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='main__content__grid__right  '>
                        <div className='main__content__section-title'>
                                <i className='icon-file'></i>
                                <span className='text--section-title'>Knowledge</span>
                            </div>
                           <div className='main__content__section-content'>
                           <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>Corporate Website Development</span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>Portfolio Website Development</span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>Admin Dashboard Development</span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>Landing Page Development</span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>Responsive Website Design</span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>SEO Friendly Website Development </span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>Blog Page Development</span>
                            </div>
                            <div className='main__content__section-content__knowledge'>
                                <i className='icon-check'></i>
                                <span>E-Commerce Website Development</span>
                            </div>
                           </div>
                            

                                
                        </div>
                    </div>
                
                </div>
                <div className='main__content__contact'>
                <h1 className='text--content-title main__content__title'>Contact</h1>
                <div className='main__content__section-content'>
                    <div className='main__content__section-content__contact'>
                      <Form/>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
    </main>
  )
}

export default Main