import React from "react";

const Section = ({ children }) => {
    return (
        <div style={{ margin: "50px" }}>
            {children}{/* Este children lo que hace es que afecta todas las propiedades en los h2 y a su vez agarra los estilos */}
        </div>
    );
};

export default Section;