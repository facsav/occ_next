"Use client"
import ItemDetail from "./ItemDetail";
import data from "../utils/pools";

const Porcelanato = () =>{
    return(
        <>
        <ItemDetail 
        titulo={data.pools[1].name} 
        imgPortada={data.pools[1].portada}
        listaDeAssets={data.pools[1].demas_fotos}
        caracteristicas={data.pools[1].caracteristicas}
        cantImgCarrusel={data.pools[1].demas_fotos.length}
        opcionesPuenteAdherencia={data.pools[1].opcionesPuenteAdherencia}
        opcionesPuenteAdherenciaLink={data.pools[1].opcionesPuenteAdherenciaLink}
        pegamentos={data.pools[1].pastina}
        pegamentosLink={data.pools[1].pastinaLink}
        preparacionSuperficie={data.pools[1].preparacionSuperficie}
        puenteAdherencia={data.pools[1].puenteAdherencia}
        preparacionMaterial={data.pools[1].preparacionMaterial}
        juntas={data.pools[1].juntas}
        detalleFinal={data.pools[1].detalleFinal}
        higienizacion={data.pools[1].higienizacion}
        nivelacion={data.pools[1].nivelacion}
         />
        </>
    )
}

export default Porcelanato;