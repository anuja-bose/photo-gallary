import Card from 'react-bootstrap/Card';

const SinglePhoto = ({ data }) => {
  // return (
  //   <a href={data.urls.regular} target="_blank" rel="noreferrer">
  //      <img width={40} height={40} className="img-thumbnail rounded object-cover" src={data.user.profile_image.medium} alt={data.alt_description} />
  //      <img width={200} height={200} className="img-thumbnail rounded object-cover" src={data.urls.small} alt={data.alt_description} />
  //   </a>
  // )

  return (
    <Card style={{ width: '18rem', display: 'inline-block', margin: '10px' }}>
      <Card.Img variant="top" src={data.urls.small} />
      <Card.Body>

        <Card.Text>
          <img width={40} height={40} className="img-thumbnail rounded object-cover" src={data.user.profile_image.medium} alt="user uploaded" />
          <span className='mlr-5'>{data.user.name}</span>
          <span className={data.likes===0? "nolikes" : "likes"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          </span>
          {data.likes}

        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default SinglePhoto