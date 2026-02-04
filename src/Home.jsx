import profile_pic from './assets/profile_pic.jpg'
import sharpe from './assets/sharpe.png'
import a_star from './assets/a_star.png'
import blocks from './assets/blocks.png'
import fwgc from './assets/fwgc.png'


function Home() {

  return(
    <>
      <nav>
          <ul>
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
          <div className="greeting">
            <h1>Hi, I'm Stephen!</h1>
            <img src={profile_pic} className="logo" alt="Profile Picture" />
          </div>

          <div className="card-container-hero">

            <div className="card-hero">
              <h2>I'm a software engineer with a background in neuroscience and computer science. I have a strong foundation in machine learning, data analysis, and full-stack development, focused on building reliable, data-driven systems.</h2>
            </div>
          </div>
        </div>

        <section id="projects">
          <h2>Projects</h2>

          <div className="card-container">

            <div className="card">
              <a href="/sharpe">
                <h3> Sharpe Ratio Portfolio Optimization </h3>
                <img src={sharpe} className="sharpe" alt="sharpe" />
              </a>
            </div>

            <div className="card">
              <a href="https://www.google.com">
                <h3> A* Optimal Path Finding </h3>
                <img src={a_star} className="a_star" alt="a_star" />
              </a>
            </div>

            <div className="card">
              <a href="https://www.google.com">
                <h3> Blocks World Problem </h3>
                <img src={blocks} className="blocks" alt="blocks" />
              </a>
            </div>

            <div className="card">
              <a href="https://www.google.com">
                <h3> Wolf, Goat and Cabbage Problem </h3>
                <img src={fwgc} className="fwgc" alt="fwgc" />
              </a>
            </div>

          </div>


        </section>
    </>
  )
}


export default Home
