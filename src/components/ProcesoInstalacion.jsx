"Use client"
import CardAnimada from "./CardAnimada";
import data from "../utils/pools";
import CardsStyle from '../styles/Piletas.css';
import Head from "next/head";

const ProcesoInstalacion = () => {
    return(
        
        <section style={{paddingTop:'6rem'}} >
            <Head>
                <title>Guía de Instalación de Revestimientos por OCC: Expertos en Calidad</title>
                <meta name="description" content="Aprende cómo OCC instala revestimientos de cerámicos, porcelanato, mármol y venecitas. Descubre nuestros métodos detallados y asegura resultados duraderos y de alta calidad." />
            </Head>
            <div className="container">

                <h1 style={{fontSize:'42px'}}>Colocación de revestimientos</h1>
                <hr />
                <p style={{maxWidth:'700px'}}>
                    <span>En esta sección les compartiremos cómo <strong>trabajamos</strong> en OCC.</span> <br />
                    <span>Mostraremos cómo se colocan los distintos <strong>revestimientos</strong> en diversas superficies.</span> <br />
                    <span>Desde la preparación de <strong>pisos</strong>, <strong>paredes</strong> y otras superficies, pasando por la aplicación del adherente,
                    hasta la nivelación final del <strong>revestimiento</strong> a colocar.</span>
                </p>


                <div class="container-cards" >
                    <a href='/Piscina'>
                        <CardAnimada img={"/images/Colocacion/Redondeta.webp"} titulo= 'Revestimientos de piscinas.' texto={data.pools[0].desc_corta} color={data.pools[0].color} />
                    </a>
                    <a href='/Porcelanato'>                    
                        <CardAnimada img={"/images/Colocacion/interiorn2.webp"} titulo= 'Recubrimientos en porcelanato, cerámica y más.' texto={data.pools[1].desc_corta} color={data.pools[1].color} />
                    </a>
                    <a href='/Marmol'>                    
                        <CardAnimada img={"/images/Colocacion/interior1.webp"} titulo= 'Revestimientos en mármol.' texto={data.pools[2].desc_corta} color={data.pools[2].color} />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default ProcesoInstalacion;