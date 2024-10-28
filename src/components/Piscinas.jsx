import ItemDetail from "./ItemDetail";
import data from "../utils/pools";

const Piscinas = () =>{
    return(
        <>
        <ItemDetail 
        titulo={data.pools[0].name} 
        imgPortada={data.pools[0].portada}
        listaDeAssets={data.pools[0].demas_fotos}
        caracteristicas={data.pools[0].caracteristicas}
        cantImgCarrusel={data.pools[0].demas_fotos.length}
        opcionesPuenteAdherencia={data.pools[0].opcionesPuenteAdherencia}
        opcionesPuenteAdherenciaLink={data.pools[0].opcionesPuenteAdherenciaLink}
        pegamentos={data.pools[0].pastina}
        pegamentosLink={data.pools[0].pastinaLink}
        preparacionSuperficie={data.pools[0].preparacionSuperficie}
        puenteAdherencia={data.pools[0].puenteAdherencia}
        preparacionMaterial={data.pools[0].preparacionMaterial}
        juntas={data.pools[0].juntas}
        detalleFinal={data.pools[0].detalleFinal}
        higienizacion={data.pools[0].higienizacion}
        nivelacion={data.pools[0].nivelacion}
         />
    </>
    )
}

export default Piscinas;