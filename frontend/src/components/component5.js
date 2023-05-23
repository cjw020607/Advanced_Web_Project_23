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
                }}>{props.head}</h2>
                <div style={{ lineHeight: '30px' }} >
                    <b style={{ fontSize: '21px' }}>
                        {props.content1}
                        <br />
                        {props.content2}
                        <br />
                        {props.content3}
                    </b>
                    <p style={{ fontSize: '19px', marginTop: '30px' }}>
                        {props.content4}
                        <br />
                        {props.content5}
                    </p>
                </div>
            </div>
            <img src={props.img} style={{ margin: '60px auto', display: 'block', width: "1000px", height: "600px", borderRadius: '18px' }}></img>

        </>
    );
}

export default Component5;