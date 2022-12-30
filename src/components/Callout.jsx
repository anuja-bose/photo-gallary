import { Link } from "react-router-dom"

const Callout = () => {
 

  return (
    <div className="callout">
       <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Unsplash award 2022</h1>
          <p>The results are in. Celebrate this year finalists</p>
          <Link>Learn more</Link>
        </div>
      </div>
    </div>
  )
}

export default Callout