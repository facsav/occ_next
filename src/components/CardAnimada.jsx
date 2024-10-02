const CardAnimada = ({ img, titulo, texto, ruta, color, banner, año, mes }) => {
    const estiloTexto1 = {
      color: color,
      fontSize: '21px',
    };
    const estiloTexto2 = {
      color: color,
      fontSize: '16px',
    };
    let styleBanner = {}
    let styleBannerP = {}

    if (banner === 'siBanner'){
      styleBanner = {
        position:"absolute",
        paddingTop:"10px",
        top:"0",
        right:"10px",
        width:"60px",
        height:"80px",
        background:" linear-gradient(red, rgb(219, 96, 96))"
      };
      styleBannerP = {
        color:"white",
        width:"100%",
        margin:"0 0",
        display:"flex",
        alignItems:"center",
        justifyContent:" center"
      };
    } else {
      styleBanner = {
        display:"none"
      };
      styleBannerP = {
        display:"none"
      };
    }
    return (
      // <a href={ruta}>
        <div className="piletas">
          <img src={img} alt="" width="100%" height="auto" />
          <div className="intro">
            <h1 style={estiloTexto1}>{titulo}</h1>
            <h4 style={estiloTexto2}>{texto}</h4>
          </div>
          <span style={styleBanner}>
            <p style={styleBannerP}>{año}</p>
            <p style={styleBannerP}>{mes}</p>
          </span>
        </div>
      // </a>
    );
  }

export default CardAnimada;