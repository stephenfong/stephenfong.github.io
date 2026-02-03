import profile_pic from './assets/profile_pic.jpg'


function Portfolio() {
  return(
    <>
      <nav>
          <ul>
            {/* <li>
              <a href="#about">About</a>
            </li> */}
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="https://github.com/stephenfong">GitHub</a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
            <li>
              <a href="mailto:sfong30@gatech.edu">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="hero">
          <h1>Hi, I'm Stephen! </h1>
          <img src={profile_pic} className="logo" alt="Profile Picture" />
        </div>

        <section id="projects">
          <h2>Projects</h2>

          <div className="card-container">

            <div className="card">
              <h3> Project 1: Sharpe Ratio Portfolio Optimization </h3>
            </div>

            <div className="card">
              <h3> Project 2:  </h3>
            </div>

            <div className="card">
              <h3> Project 3:  </h3>
            </div>

            <div className="card">
              <h3> Project 4:  </h3>
            </div>

          </div>


        </section>

        <section id="hobbies">
          <h2>Hobbies</h2>
          <p> Running, traveling, and coding side projects.</p>
        </section>


    </>
  )
}



export default Portfolio
