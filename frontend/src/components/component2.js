import React from "react";

const Component2 = (props) => {

    let reverse = props.reverse
    if (reverse === undefined) {
        reverse = false
    }

    const Content = () => <div style={{ maxWidth: '100%', width: '100%', position: 'relative', margin: '100px auto', border: '0', justifyContent: 'center', }} >
        <figure style={{ isolation: 'isolate', display: 'block', padding: '0px', margin: '0px' }} >
            <picture style={{ width: '100%', textAlign: 'center', wordBreak: 'keep-all', display: 'block', margin: '0', padding: '0' }}>
                <img style={{ height: '400px', width: '100%', maxHeight: '570px', maxWidth: '100%', objectFit: 'cover', verticalAlign: 'top', transform: reverse ? 'scaleX(-1)' : 0 }} loading="lazy" src={props.imgurl} width="1440" height="380" alt="" />
            </picture>
        </figure>
        <div style={{ maxWidth: '1100px', width: '100%', position: 'absolute', padding: '0', top: 'calc(50% - 110px)', left: 'calc(50% - 600px)', color: '#ffffff' }} >
            <div style={{ fontSize: '30px', fontWeight: '700', marginBottom: '10px' }} >{props.Keyword}</div>
            <div style={{ fontSize: '40px', fontWeight: '700' }} >{props.Content.map((content) => <>{content}<br /></>)}</div>

            <div >
                <a style={{ padding: '0 20px', marginTop: '20px', height: '40px', display: 'inline-flex', lineHeight: '40px', fontWeight: '800', textDecoration: 'none', borderRadius: '20px', fontSize: '14px', backgroundColor: '#ffffff', color: '#000000' }} href={props.Homepage} data-an-tr="body contents" data-an-ca="link click" data-an-ac="Learn more" data-an-la="career banner">Learn more</a>
            </div>
        </div>
    </div>
    return (
        <>
            <Content />
        </>
    );
}

export default Component2;  