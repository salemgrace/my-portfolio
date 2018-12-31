import React, { Component } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import Wrapper from './components/Wrapper';
import projects from './projects.json';

class App extends Component {
  state={
    projects
  };
  
  render() {
    return (
      <div className="total-wrapper">
      
      <header className="top">
        <div className="container">
          <a href="index.html" className="logo">Salem Bryant</a>
        </div>
      </header>

      <div className="main-container container">
        <section className="page">
          <p>An aspiring Web Developer and experienced Project Manager that loves data just as much as a seamless
              user experience. I specialize in discovering creative ways for others to visualize and interpret
              information so that they can love data as much as I do. I have experience with JavaScript, CSS, HTML, Qlikview,
              Adobe Photoshop, Adobe Illustrator, and Adobe InDesign. Additionally, I am currently in the University of
              Pennsylvania LPS Coding Bootcamp and will graduate with a certification in January, 2019. I enjoy bringing the
              triple threat of logic, imagination and receptivity to a team.</p>

          <div className="portfolio">
            <h1>Portfolio</h1>

            <div className="carousel center">
            <Wrapper>
              {this.state.projects.map(project => (
              <ProjectCard
                id={project.id}
                name={project.name}
                image={project.image}
                link={project.link}
              />
              ))}
            </Wrapper>
            </div>
          </div>
        
          <div className="logo-holder">
            <a href="https://www.linkedin.com/in/salem-bryant-36556865/"><img class="logo-size" src="assets/images/linked-in.png" /></a>
            <a href="https://github.com/salemgrace"><img class="logo-size" src="assets/images/github.png" /></a>
          </div>
        </section>
        </div>
        
        <div className="content-push" />

        <footer>
          <div className="col-md-12" />
        </footer>
      </div>
    );
  }
}

export default App;
