const ShadowLoading = ({ item }) => {
    return [...Array(item).keys()].map((ind) => (
      <div key={ind} className="animate-pulse">
        <div></div>
      </div>
    ))
  }
  
  export default ShadowLoading