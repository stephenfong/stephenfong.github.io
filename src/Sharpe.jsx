import sharpe from './assets/sharpe.png'

function Sharpe(){
  return(
    <>
      <nav>
          <ul>
            <li>
              <a href="/">Home</a>
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
        <h1> This new page is for Sharpe </h1>
        </div>

        <div className="card-container-hero">

          <div className="card-hero">
            {/* <h2></h2> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Sharpe
