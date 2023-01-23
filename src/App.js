/* eslint-disable */
// eslint-disable
import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './pageWrapper';
import peliculasJSON from './peliculas.json';
import Paginacion from './paginacion';
import { useState } from 'react';



function App() {

  const [paginaActual, setPaginaActual] = useState(1)
  const [peliculas, setPeliculas] = useState([])
  const TOTAL_POR_PAGINA = 5;

  //let peliculas = peliculasJSON

  const buscarPelicula = async () =>{
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json'

    let respuesta = await fetch(url, {
      "method":"GET",
      "headers":{
        "Accept": "application/json",
        "Content-Type":"application/json",
        "Origin":"https://lucasmoy.dev/"
      }
    })
    
    let json = await respuesta.json();
    setPeliculas(json)
  }

  //buscarPelicula()  


  const cargarPeliculas = ()=>{
    // peliculas = peliculas.slice(
    //   (paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA
    
    // )
  }

  const getTotalPaginas = ()=>{
    let cantidadTotalDePeliculas = peliculas.length
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA)
  }

  // var arreglo = peliculas.map(pelicula=>{
  //   return 'asdasasa'
  // })

  cargarPeliculas()

  return (
    <PageWrapper>

      <button onClick={buscarPelicula}>Prueba</button>

      {peliculas.map(pelicula=>
          <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} lanzamiento={pelicula.lanzamiento} duracion={pelicula.duracion} año={pelicula.año} img={pelicula.img}>
            {pelicula.descripcion}
          </Pelicula>
      )} 

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
          setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;
