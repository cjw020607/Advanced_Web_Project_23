import React from "react";

const Component5 = (props) => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '1300px', margin: '80px auto', position: 'relative'
            }}>

                <h2 style={{
                    margin: '0',
                    paddingRight: props.paddingRight === undefined ? '300px' : props.paddingRight,
                    fontSize: '35px',
                    fontWeight: '600',
                    lineHeight: '1.18'
                }}>{props.Keyword1}</h2>
                <div style={{ lineHeight: '30px' }} >
                    <b style={{ fontSize: '21px' }}>
                        {props.Sentence1}
                        <br />
                        {props.Sentence2}
                        <br />
                        {props.Sentence3}
                    </b>
                    <p style={{ fontSize: '19px', marginTop: '30px' }}>
                        {props.Keyword2}
                        <br />
                        {props.Sentence4}
                    </p>
                </div>
            </div>
            <img src={props.img} style={{ margin: '60px auto', display: 'block', width: "1000px", height: "600px", borderRadius: '18px' }}></img>

        </>
    );
}

export default Component5;