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
                        <a target='_blank' aria-label='instagram adress' rel="noreferrer" href="https://instagram.com/mehkaandev"><i className='icon-instagram'></i></a>
                        <a target='_blank' aria-label='twitter adress' rel="noreferrer" href="https://twitter.com/kaanmehtprk"><i className='icon-twitter'></i></a>
                        <a target='_blank' aria-label='linkedin adress' rel="noreferrer" href="https://www.linkedin.com/in/kaanmtprk/"><i className='icon-linkedin'></i></a>
                        <a target='_blank' aria-label='github adress' rel="noreferrer" href="https://github.com/kaanmtoprak"><i className='icon-github'></i></a>
                        
                    </div>
                </div>
                <a className='main__profile__info__button' href='cv/en_mkt.pdf' download> Download CV</a>
            </div>
            <div className='main__content'>
                <div className='main__content__about'>
                    <h1 className='text--content-title main__content__title'>About Me</h1>
                    <div className='main__content__grid grid grid--two-columns'>
                        <div className='main__content__grid__left'>
                            <p>
                            I am a Frontend Developer with a passion for creating dynamic and engaging user interfaces. After completing my university education, I discovered my interest in this field and started honing my skills. Throughout my previous experiences, I have worked extensively with technologies such as ReactJS, Next.js, TypeScript, Sass, as well as design libraries like Ant Design, Bootstrap, and Chakra UI. I have also utilized animation libraries such as Framer Motion and Scroll Magic to bring life to my projects. By following the BEM methodology, I have developed projects with clean and scalable code.

I have had the opportunity to work with Agile methodologies in my previous positions, allowing me to collaborate effectively in team environments. In addition to frontend development, I have also worked on full-stack applications for personal projects. I use Node.js, Express.js, and JWT for server-side development, and I have experience using MongoDB as a database solution. Furthermore, I have some familiarity with Docker and Redis, which I have utilized in my personal projects.
                            </p>
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
                                While at Papel Teknoloji, a financial technology company, I worked on developing web sites and admin panels. Using React.js, we built projects that closely aligned with the design prototypes from Figma. We created custom components following the BEM methodology using Ant Design and Sass. Additionally, we optimized localization using the i18n package and added animations to the web sites using libraries like Framer Motion and Scroll Magic.
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
                                While working at Martı Teknoloji, I actively contributed to the development of admin panels using Next.js, TypeScript, and Redux Toolkit. We created custom components following the BEM methodology using the Ant Design library and SASS. Our team embraced Agile methodologies and utilized tools like Jira and Slack for effective collaboration.
                                </div>
                            </div>
                            <div className='main__content__section-content'>
                                <div className='main__content__section-content__year'>
                                    2020 - 2022
                                </div>
                                <div className='main__content__section-content__title'>
                                    Frontend Developer
                                </div>
                                <div className='main__content__section-content__subtitle'>
                                    Maykim Group
                                </div>
                                <div className='main__content__section-content__comment'>
                                I worked at Maykim Group where I gained valuable experience in frontend development. As part of the team, I utilized HTML, CSS, JavaScript, and jQuery technologies, along with the Bootstrap design library. My main responsibilities revolved around improving and developing websites for the group's affiliated companies. Additionally, I contributed to the development of an e-commerce project website and worked on enhancing the functionality of internal admin panels used within the company.
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
                    <div className='main__content__contact__form'>
                        <Form/>

                        
                    </div>

                </div>

            </div>
        
        </div>
    </main>
  )
}

export default Main