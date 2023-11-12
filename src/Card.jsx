function Card(props) {
  return (
    <div className="card">
      <button onClick={props.click}>close</button>
      <img
        src={`https://source.unsplash.com/400x400/?${props.title}`}
        alt="unsplash random image"
      />
      <h2>{props.title}</h2>
      <p>likes:{props.likes}</p>
      <div className="btn-container">
        <button onClick={props.dislikeupdate}>-</button>
        {/* <span className="material-symbols-outlined">mood</span> */}
        <span class="material-symbols-outlined">
          {props.likes < 0 ? "heart_broken" : "favorite"}
        </span>

        <button onClick={props.likesupdate}>+</button>
      </div>
    </div>
  );
}

export default Card;
