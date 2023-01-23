export default function Pelicula(props) {
  let tiempo = props.año;
  let edad = 2023 - tiempo;
  return (
    <div className="movie-item-style-2">
      <img src={props.img} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{props.titulo}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          {props.calificacion} /10
        </p>
        <p className="describe">{props.children}</p>
        <p className="run-time">
          {" "}
          Run Time: {props.duracion} . <span>MMPA: PG-13 </span> .{" "}
          <span>
            {props.lanzamiento} ({edad} years ago)
          </span>
        </p>
        <p>Director: {props.director}</p>
        <p>Stars: {props.actores}</p>
      </div>
    </div>
  );
}
