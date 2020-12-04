import ClinicList from '../ClinicList'
import Feature from '../Feature'
import FeatureUno from '../FeatureUno'

const LayoutInfoClinics = (props) => {

    return (
        <article className="content">

            <div className="barraAmarilla"><h3>{props.activate ? props.location[props.clinic].name : "Selecciona una Clinica"}</h3></div>
            <div className="info">
                <FeatureUno titulo="INFORMACIÓN" img="/img/info.svg" location={props.location[props.clinic].location} phone={props.location[props.clinic].contact} activate={props.activate}/>
                <div className="list">
                    <ul>
                        {
                            props.location.map(clinic => (
                                <ClinicList numClinic={props.clinic} clinic={clinic} changeClinic={props.changeClinic} activate={props.activate} setActivate={props.setActivate}/>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <style jsx>{`
                
                .content {
                    display: grid;
                    grid-template-rows: 85px 1fr;
                    height: 80vh;
                }  

                .barraAmarilla {
                    background-color: var(--amarillo);
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    padding: 0 20px;
                }

                h3 {
                    font-size: 24px;
                    color: var(--mainColor);
                    text-align: center;
                }

                .info {
                    background-color: var(--mainColor);
                    display: grid;
                    grid-template-rows: auto 1fr;
                }

                .list {
                    background: var(--amarillo)
                    
                }

                ul {
                    overflow: auto;
                    height: calc(80vh - ${props.activate ? "270px" : "0px"} - 85px);
                    box-sizing: border-box;
                    margin-right: 10px;
                    margin-left: 20px;
                    padding: 0 15px;
                }

                ul::-webkit-scrollbar {
                    width: 7px;
                }

                ul::-webkit-scrollbar-thumb {
                    background-color: var(--mainColor);
                    border-radius: 5px;
                }

                ul::-webkit-scrollbar-track {
                    background-color: var(--amarillo);
                }

                @media screen and (max-width: 1000px) and (min-width: 700px) {
                    
                    h3 {
                        font-size: 16px;
                    }
                    
                }

                @media screen and (max-width: 420px) {

                    .barraAmarilla {
                        padding: 0 0px;
                    }

                    h3 {
                        font-size: 20px;
                    }

                }
            
            `}</style>
        </article>
    )
}

export default LayoutInfoClinics
