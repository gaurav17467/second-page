const Task = ({datas}) => {
  return (
    <div className="card">
      <div className = "card-top">
        <div>
        <img className="image-icon"></img>
        <div className="info">
          <h2>{datas.name}</h2>
          <h4>{datas.doctorType}</h4>
          <h3>{datas.address}</h3>
          <h3>{datas.contactNo}</h3>
        </div>
        </div>
        <div className = "disclaimer">
          Some text here
        </div>
      </div>
      <div className="card-bottom">
      Office visit
      </div>
    </div>
  )
}

export default Task
