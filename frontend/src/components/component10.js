import styled from 'styled-components';
import React from 'react';

const Component10 = (props) => {
    let reverse = props.reverse
    if (reverse === undefined) {
        reverse = false
    }
    const Img = () => <img style={{ width: '550px', aspectRatio: ' 476 / 230', objectFit: 'cover', overflow: 'hidden' }} src={props.img}></img>
    const Content = () => <div style={{
        width:'450px',margin: 'auto 0', marginLeft: reverse ? (props.marginLeft === undefined ? '0px' : props.marginLeft) : (props.marginLeft === undefined ? '250px' : props.marginLeft), marginRight: reverse ? (props.marginRight === undefined ? '250px' : props.marginRight) : (props.marginRight === undefined ? '0px' : props.marginRight)
    }}>
        <p style={{ fontWeight: 'bold', fontSize: '37px', margin: '0px 0px 10px 0px' }}>{props.head}</p>
        <p style={{ fontWeight: 'lighter', lineHeight: '30px', fontSize: '19px' }}>{props.contents.map((content) => <>{content}<br /></>)}</p>
    </div>
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '75px auto' }}>
            {reverse ? <><Content /><Img /></> : <><Img /><Content /></>}
        </div>
    );
}

export default Component10