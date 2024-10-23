"Use client"

const ItemDetailCarrousel = ({array, cantImgCarrusel}) =>{
    function cambiarPortada(nuevaImagen) {
        // Obtén el elemento de la portada
        var portadaImg = document.getElementById('Portada');
        // Cambia la fuente de la imagen de la portada
        portadaImg.src = nuevaImagen;
    }
      
    return(
      <div className="lista-img" style={{ gridTemplateColumns: `repeat(${cantImgCarrusel}, 1fr)` }}>
        {array.map((asset, index) =>(
          <img key={index} src={asset} alt="" className="imagen-item" onClick={() => cambiarPortada(asset)}/>
        ))}
      </div>
    )
}

export default ItemDetailCarrousel;