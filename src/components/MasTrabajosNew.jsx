"Use client"

import MasTrabajosStyle from '../styles/MasTrabajosNew.css';
import CardsStyle from '../styles/Piletas.css';

import Modal from './Modal';
import data from "../utils/masTrabajos";
import Head from 'next/head';
import { Truculenta } from 'next/font/google';


const MasTrabajosNew = () => {


    return (
        <section id="masTrabajosNew">
            <Head>
                <title>Trabajos Realizados por OCC: Expertos en Revestimientos</title>
                <meta name="description" content="Descubre los proyectos de OCC en cerámicos, porcelanato, mármol y venecitas. Inspírate con nuestros trabajos de revestimiento de piletas, baños y más." />
            </Head>
            <div className="container">

                <div className="row">

                    <h1>Revestimientos</h1>
                    
                    <hr />

                    <h2>Piletas</h2>
                    <p>Trabajos con veneceitas</p>
                    <div style={{paddingTop:'1.13rem'}} class="container-cards " >

                        <Modal modal={1} img={data.pools[7].portada} titulo={data.pools[7].name} desc={data.pools[7].desc_corta} imgModal={data.pools[7].modal } año={data.pools[7].año} mes={data.pools[7].mes} esPrimero={true} />  
                        <Modal modal={2} img={data.pools[11].portada} titulo={data.pools[11].name} desc={data.pools[11].desc_corta} imgModal={data.pools[11].modal} año={data.pools[11].año} mes={data.pools[11].mes}/>  
                        <Modal modal={3} img={data.pools[13].portada} titulo={data.pools[13].name} desc={data.pools[13].desc_corta} imgModal={data.pools[13].modal} año={data.pools[13].año} mes={data.pools[13].mes}/>  
                        <Modal modal={4} img={data.pools[0].portada} titulo={data.pools[0].name} desc={data.pools[0].desc_corta} imgModal={data.pools[0].modal} año={data.pools[0].año} mes={data.pools[0].mes}/>  
                        <Modal modal={5} img={data.pools[1].portada} titulo={data.pools[1].name} desc={data.pools[1].desc_corta} imgModal={data.pools[1].modal} año={data.pools[1].año} mes={data.pools[1].mes}/>  
                        <Modal modal={6} img={data.pools[2].portada} titulo={data.pools[2].name} desc={data.pools[2].desc_corta} imgModal={data.pools[2].modal} año={data.pools[2].año} mes={data.pools[2].mes}/>  
                        <Modal modal={7} img={data.pools[3].portada} titulo={data.pools[3].name} desc={data.pools[3].desc_corta} imgModal={data.pools[3].modal} año={data.pools[3].año} mes={data.pools[3].mes}/>  
                        <Modal modal={8} img={data.pools[4].portada} titulo={data.pools[4].name} desc={data.pools[4].desc_corta} imgModal={data.pools[4].modal} año={data.pools[4].año} mes={data.pools[4].mes}/>  
                        <Modal modal={9} img={data.pools[5].portada} titulo={data.pools[5].name} desc={data.pools[5].desc_corta} imgModal={data.pools[5].modal} año={data.pools[5].año} mes={data.pools[5].mes}/>  
                        <Modal modal={10} img={data.pools[6].portada} titulo={data.pools[6].name} desc={data.pools[6].desc_corta} imgModal={data.pools[6].modal} año={data.pools[6].año} mes={data.pools[6].mes}/>  
                        <Modal modal={11} img={data.pools[10].portada} titulo={data.pools[10].name} desc={data.pools[10].desc_corta} imgModal={data.pools[10].modal} año={data.pools[10].año} mes={data.pools[10].mes}/>  
                        <Modal modal={12} img={data.pools[8].portada} titulo={data.pools[8].name} desc={data.pools[8].desc_corta} imgModal={data.pools[8].modal} año={data.pools[8].año} mes={data.pools[8].mes}/>  
                        <Modal modal={13} img={data.pools[9].portada} titulo={data.pools[9].name} desc={data.pools[9].desc_corta} imgModal={data.pools[9].modal} año={data.pools[9].año} mes={data.pools[9].mes}/>  
                        <Modal modal={14} img={data.pools[12].portada} titulo={data.pools[12].name} desc={data.pools[12].desc_corta} imgModal={data.pools[12].modal} año={data.pools[12].año} mes={data.pools[12].mes}/>  
                        <Modal modal={15} img={data.pools[14].portada} titulo={data.pools[14].name} desc={data.pools[14].desc_corta} imgModal={data.pools[14].modal} año={data.pools[14].año} mes={data.pools[14].mes}/>  
                        <Modal modal={16} img={data.pools[15].portada} titulo={data.pools[15].name} desc={data.pools[15].desc_corta} imgModal={data.pools[15].modal} año={data.pools[15].año} mes={data.pools[15].mes}/>  

                    </div>

                    <hr />
                    <h2>Marmol</h2>
                    <p>Revestimientos realizados en marmol</p>

                    <div style={{paddingTop:'1.13rem'}} class="container-cards " >

                        <Modal modal={17} img={data.marmol[6].cara} titulo={data.marmol[6].name} desc={data.marmol[6].desc_corta} imgModal={data.marmol[6].portada} año={data.marmol[6].año} mes={data.marmol[6].mes}/>
                        <Modal modal={18} img={data.marmol[1].cara} titulo={data.marmol[1].name} desc={data.marmol[1].desc_corta} imgModal={data.marmol[1].portada} año={data.marmol[1].año} mes={data.marmol[1].mes}/>
                        <Modal modal={19} img={data.marmol[4].cara} titulo={data.marmol[4].name} desc={data.marmol[4].desc_corta} imgModal={data.marmol[4].portada} año={data.marmol[4].año} mes={data.marmol[4].mes}/>
                        <Modal modal={20} img={data.marmol[3].cara} titulo={data.marmol[3].name} desc={data.marmol[3].desc_corta} imgModal={data.marmol[3].portada} año={data.marmol[3].año} mes={data.marmol[3].mes}/>
                        <Modal modal={21} img={data.marmol[5].cara} titulo={data.marmol[5].name} desc={data.marmol[5].desc_corta} imgModal={data.marmol[5].portada} año={data.marmol[5].año} mes={data.marmol[5].mes}/>
                        <Modal modal={22} img={data.marmol[8].cara} titulo={data.marmol[8].name} desc={data.marmol[8].desc_corta} imgModal={data.marmol[8].portada} año={data.marmol[8].año} mes={data.marmol[8].mes}/>
                        <Modal modal={23} img={data.marmol[0].cara} titulo={data.marmol[0].name} desc={data.marmol[0].desc_corta} imgModal={data.marmol[0].portada} año={data.marmol[0].año} mes={data.marmol[0].mes}/>
                        <Modal modal={24} img={data.marmol[2].cara} titulo={data.marmol[2].name} desc={data.marmol[2].desc_corta} imgModal={data.marmol[2].portada} año={data.marmol[2].año} mes={data.marmol[2].mes}/>
                        <Modal modal={25} img={data.marmol[7].cara} titulo={data.marmol[7].name} desc={data.marmol[7].desc_corta} imgModal={data.marmol[7].portada} año={data.marmol[7].año} mes={data.marmol[7].mes}/>

                    </div>

                    <hr />
                    <h2>Porcelanato</h2>
                    <p>Revestimientos realizados en Porcelanato</p>

                    <div style={{paddingTop:'1.13rem'}} class="container-cards ">
                        
                        <Modal modal={26} img={data.pisos[5].cara} titulo={data.pisos[5].name} desc={data.pisos[5].desc_corta} imgModal={data.pisos[5].portada}  año={data.pisos[5].año} mes={data.pisos[5].mes}/>
                        <Modal modal={27} img={data.pisos[6].cara} titulo={data.pisos[6].name} desc={data.pisos[6].desc_corta} imgModal={data.pisos[6].portada}  año={data.pisos[6].año} mes={data.pisos[6].mes}/>
                        <Modal modal={28} img={data.pisos[7].cara} titulo={data.pisos[7].name} desc={data.pisos[7].desc_corta} imgModal={data.pisos[7].portada}  año={data.pisos[7].año} mes={data.pisos[7].mes}/>
                        <Modal modal={29} img={data.pisos[3].cara} titulo={data.pisos[3].name} desc={data.pisos[3].desc_corta} imgModal={data.pisos[3].portada}  año={data.pisos[3].año} mes={data.pisos[3].mes}/>
                        <Modal modal={30} img={data.pisos[4].cara} titulo={data.pisos[4].name} desc={data.pisos[4].desc_corta} imgModal={data.pisos[4].portada}  año={data.pisos[4].año} mes={data.pisos[4].mes}/>
                        <Modal modal={31} img={data.pisos[0].cara} titulo={data.pisos[0].name} desc={data.pisos[0].desc_corta} imgModal={data.pisos[0].portada}  año={data.pisos[0].año} mes={data.pisos[0].mes}/>
                        <Modal modal={32} img={data.pisos[2].cara} titulo={data.pisos[2].name} desc={data.pisos[2].desc_corta} imgModal={data.pisos[2].portada}  año={data.pisos[2].año} mes={data.pisos[2].mes}/>
                        <Modal modal={33} img={data.pisos[1].cara} titulo={data.pisos[1].name} desc={data.pisos[1].desc_corta} imgModal={data.pisos[1].portada}  año={data.pisos[1].año} mes={data.pisos[1].mes}/>
                        
                    </div>

                    <hr />
                    <h2>Otros materiales</h2>
                    <p>Revestimientos realizados en piedra (o roca) y material atérmico</p>

                    <div style={{paddingTop:'1.13rem'}} class="container-cards ">
                        
                        <Modal modal={34} img={data.otros[1].cara} titulo={data.otros[1].name} desc={data.otros[1].desc_corta} imgModal={data.otros[1].portada}    />
                        <Modal modal={35} img={data.otros[0].cara} titulo={data.otros[0].name} desc={data.otros[0].desc_corta} imgModal={data.otros[0].portada} esUltimo={true}  />
                        
                    </div>


                    
                </div>

                <div className="row">
                    
                </div>
            </div>

        </section>
    );

}

export default MasTrabajosNew;  


