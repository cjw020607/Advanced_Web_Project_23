import React from "react";
import { useLocation } from 'react-router-dom';

const Component1 = (props) => {
    const location = useLocation();
    return (
        <>

            <div style={{ marginTop: '30px', marginBottom: location.pathname === '/tag' ? '40px' : '150px' }}>
                <h2 style={{
                    fontSize: "42px", letterSpacing: "-2.5px", display: "flex", alignItems: "center",
                    justifyContent: 'center', padding: "20px", textTransform: 'uppercase',
                }}>{props.data.Keyword}</h2>
                <p className="page_info" style={{
                    display: "flex", justifyContent: 'center',
                    fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.2px", textAlign: "center",
                }}>
                    {props.data.Sentence1Limit15Words.map((content) => <>{content}<br /></>)}
                </p>
            </div>

        </>
    );
}

export default Component1;