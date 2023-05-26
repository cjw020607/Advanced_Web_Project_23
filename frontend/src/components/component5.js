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
                }}>{props.data.Keyword1}</h2>
                <div style={{ lineHeight: '30px' }} >
                    <b style={{ fontSize: '21px' }}>
                        {props.data.Sentence1Short}
                        <br />
                        {props.data.Sentence2Short}
                        <br />
                        {props.data.Sentence3Short}
                    </b>
                    <p style={{ fontSize: '19px', marginTop: '30px' }}>
                        {props.data.Keyword2}
                        <br />
                        {props.data.Sentence4}
                    </p>
                </div>
            </div>
            <img src={props.data.imgurl[0]} style={{ margin: '60px auto', display: 'block', width: "1000px", height: "600px", borderRadius: '18px' }}></img>

        </>
    );
}

export default Component5;