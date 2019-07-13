import React from 'react';
import './App.scss';

function App() {

  const workExperiences = [
    {
      sectionTitle:'experience',
      titles:[
        {
          startDate:'May 2018',
          endDate:'present',
          title:'full stack developer',
          venue:'magicpin',
          accomplishments:[
            'Working in merchant product team responsible for engagement and retention of acquired merchants.',
            'Work involves development of new features as well as supporting already existing code base. From UI in React, Redux and Thunk to creation of wrapper APIs in expressJS I work o react, express, django and go.',
            'Responsible for managing complete software development lifecycle using jira, pentaho and agile methodology.',
            'Writing backend APIs for data retrival from various date sources including mysql, cassandra elastic and solr.',
            'Creation and monitoring business analytics funnels using google analytics and home grown graphing system.',
            'Management of merchant crons for sending business summary mails using python and Jinja2.',
            'Management and optimisation of bi monthly customer wallet summary mailer (3.5 M users).'
          ]
        },
        {
          startDate:'Feb 2018',
          endDate:'May 2018',
          title:'full stack developer',
          venue:'mountblue technologies',
          accomplishments:[
            'Worked on HTML, CSS, Javascript, JQuery, Python, React and Django.',
            'Work involved development of end to end full stack apps.',
            'Freelanching in Django.',
            'Bootstrapped API server for Mitra robotics completely written in Django. Integrated Microsoft\'s face recognition API and Twilio API for sending and receiving SMS\'.'
          ]
        },
        {
          startDate:'Aug 2017',
          endDate:'Nov 2017',
          title:'SAP Basis administrator',
          venue:'IBM',
          accomplishments:[
            'Worked on SAP basis details administering monitor systems.',
            'Learned effective usage of UNIX and Linux tools to manage netorking and disk spaces among other things.'
          ]
        }
      ]
    },
    {
      sectionTitle:'education',
      titles:[
        {
          startDate:'Aug 2013',
          endDate:'Apr 2017',
          title:'B.Tech in Information Technology, ( 7.32 CGPA )',
          venue:'Indian Institute of Information Technology Allahabad',
          accomplishments:[
            'Completed subject projects in Algorithms, Compiler Design, Web Development, Database management and Object Oriented programming',
            'Mini projects in Machine learning and Data Compression'
          ]
        },
        {
          startDate:'Apr 2011',
          endDate:'Mar 2012',
          title:'Intermediate, ( 82.05% )',
          venue:'Jawahar Navodaya Vidyalaya Mariahu Jaunpur',
          accomplishments:[
            'Studied physics, chemistry, maths, english, hindi and art as optional subject.',
          ]
        },
        {
          startDate:'Apr 2009',
          endDate:'Mar 2010',
          title:'High School, ( 93.1% )',
          venue:'Jawahar Navodaya Vidyalaya Mariahu Jaunpur',
          accomplishments:[
            'Studied maths, science, social studies, english and hindi'
          ]
        }
      ]
    }
  ]
  return (
    <div className="App">
      <header>
      </header>
      <main className="main-wrapper">
          <section className="left-section">
            <article className="user-info-wrapper">
              <img src="" alt="" className="profile-pic"/>
              <div className="user-info">
                <div className="user-name">
                  Amit Gautam
                </div>
                <div className="user-title">
                  Software Developer
                </div>
              </div>
            </article>
            {workExperiences.map((workExperience, idx)=><Experiences key={idx} {...workExperience}/>)}
          </section>
          <section className="right-section">
            <article className="user-address">
              <div className="section-top">
                <div className="section-icon"></div>
                <span className="section-title">Personal Info</span>

              </div>
              <div className="section-content">
                <strong>Address</strong>
                Goriapur, Nauperwa, Jaunpur UP 222109
              </div>
              <div className="section-content">
                <strong>Phone</strong>
                +91-9695790396
              </div>
              <div className="section-content">
                <strong>E-mail</strong>
                gautamamits95@gmail.com
              </div>
              <div className="section-content">
                <strong>Date of Birth</strong>
                May 10, 1995
              </div>
              <div className="section-content">
                <strong>LinkedIn</strong>
                https://www.linkedin.com/in/gautamits
              </div>
            </article>
          </section>
      </main>
    </div>
  );
}

export default App;

function Experiences({sectionTitle, titles}){
  return (
    <div className="experiences">
      <div className="experiences-title">
        {sectionTitle}
        
      </div>
      <div className="experiences-body">
        {titles.map((experience, idx)=><Experience experience={experience} key={idx}/>)}
      </div>
    </div>
  )
}

function Experience({experience}){
  return (
    <div className="experience">
      <ExperienceHeader {...experience}/>
      <Accomplishments {...experience}/>
    </div>
  )
}

function ExperienceHeader({startDate, endDate, venue, title}){
  return (
    <div className="profile-header">
      <div className="left-experience">
        {startDate} - {endDate}
      </div>
      <div className="right-experience">
        <div className="experience-title">
          {title}
        </div>
        <div className="experience-venue">
          {venue}, Technology
        </div>
      </div>
    </div>
  )
}

function Accomplishments({accomplishments}){
  return (
    <div className="accomplishments">
      <ul>
        {accomplishments.map((accomplishment, idx)=><Accomplishment accomplishment={accomplishment} key={idx}/>)}
      </ul>
    </div>
  )
}

function Accomplishment({accomplishment}){
  return <li className="accomplishment">{accomplishment}</li>
}
