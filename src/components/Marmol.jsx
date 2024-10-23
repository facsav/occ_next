import ItemDetail from "./ItemDetail";
import data from "../utils/pools";
import Head from "next/head";

const Marmol = () =>{
    return(
        <>
        <ItemDetail 
        titulo={data.pools[2].name} 
        imgPortada={data.pools[2].portada}
        listaDeAssets={data.pools[2].demas_fotos}
        caracteristicas={data.pools[2].caracteristicas}
        cantImgCarrusel={data.pools[2].demas_fotos.length}
        opcionesPuenteAdherencia={data.pools[2].opcionesPuenteAdherencia}
        opcionesPuenteAdherenciaLink={data.pools[2].opcionesPuenteAdherenciaLink}
        pegamentos={data.pools[2].pastina}
        pegamentosLink={data.pools[2].pastinaLink}
        preparacionSuperficie={data.pools[2].preparacionSuperficie}
        puenteAdherencia={data.pools[2].puenteAdherencia}
        preparacionMaterial={data.pools[2].preparacionMaterial}
        juntas={data.pools[2].juntas}
        detalleFinal={data.pools[2].detalleFinal}
        higienizacion={data.pools[2].higienizacion}
        nivelacion={data.pools[2].nivelacion}
         />
         <Head>
                <title>Cómo Instalar Revestimientos de Mármol - Guía de OCC</title>
                <meta name="description" content="Aprende cómo OCC instala revestimientos de mármol con nuestra guía detallada. Descubre los métodos y técnicas para asegurar resultados duraderos y de alta calidad." />
        </Head>
         </>
        
         
    )
}

export default Marmol;  