const ClinicList = ({clinic, setActivate, changeClinic, numClinic, activate}) => {

    const onclick = () => {
        setActivate(true)
        changeClinic(clinic.id)
    }

    return (
        <li className="container">
            <button onClick={() => onclick()}>
                {clinic.name}
            </button>

            <style jsx>{`

                li {
                    background-color: ${ activate ? clinic.id === numClinic ? "#E5B33D" : "var(--amarillo)" : "var(--amarillo)"};
                    color: var(--mainColor);
                    list-style: none;
                }

                li:hover {
                    background-color: #E5B33D; 
                }

                button {
                    font-weight: ${ activate ? clinic.id === numClinic ? "700" : "500" : "500"};
                     ;
                    font-size: 14px;
                    text-align: left;
                    padding: 15px 10px 13px;
                    height: 100%;
                    width: 100%;
                    border: none;
                    border-bottom: 2px solid var(--mainColor);
                    background-color: unset;
                    cursor: pointer;
                    outline: none;
                }

            `}</style>
        </li>
    )
}

export default ClinicList