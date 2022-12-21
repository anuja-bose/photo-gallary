const SinglePhoto = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img width={200} height={200} class="img-thumbnail rounded object-cover" src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default SinglePhoto