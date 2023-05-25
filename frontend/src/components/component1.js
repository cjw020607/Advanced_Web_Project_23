import React from "react";

const Component1 = (props) => {

    return (
        <>

            <div style={{ marginTop: '30px', marginBottom: '150px' }}>
                <h2 style={{
                    fontSize: "42px", letterSpacing: "-2.5px", display: "flex", alignItems: "center",
                    justifyContent: 'center', padding: "20px", textTransform: 'uppercase',
                }}>{props.Keyword}</h2>
                <p className="page_info" style={{
                    display: "flex", justifyContent: 'center',
                    fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.2px", textAlign: "center",
                }}>
                    {props.Sentence.map((content) => <>{content}<br /></>)}
                </p>
            </div>

        </>
    );
}

export default Component1;