import React from "react";

const Component6 = (propss) => {
    const ImageBox = (props) => <> <div style={{ left: '50%', transform: 'translate(-50%)', margin: '0 auto', width: '65%', textAlign: 'center', position: 'absolute', height: '50px', display: 'inline-block', lineHeight: '53px', fontWeight: '700', borderRadius: '100px', fontSize: '25px', backgroundColor: '#008000', color: '#ffffff', zIndex: '100' }} >{props.imgheader}</div>
        <div style={{ paddingTop: '25px', position: 'relative', boxSizing: 'border-box', display: 'block', width: '100%', margin: '0px' }} >
            <img style={{ aspectRatio: ' 476 / 250', width: '100%', objectFit: 'cover', borderRadius: '20px', overflow: 'hidden' }} src={props.imgurl} alt="" />
        </div>
    </>
    return (
        <>
            <div style={{ marginTop: '100px', maxWidth: '1250px', minHeight: '700px', marginRight: "auto", marginLeft: "auto", padding: '20px', border: '0', boxSizing: 'border-box', display: 'block', verticalAlign: 'baseline' }} >

                <div style={{ float: 'none', width: '100%' }} >
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '50px', listStyle: 'none' }} >
                        <li style={{ display: 'list-item', position: 'relative' }}>
                            <ImageBox imgheader={propss.data.imgheader} imgurl={propss.data.imgurl} />
                            <div style={{ marginTop: '30px', display: 'block' }} >
                                <h3 style={{
                                    fontSize: '30px', fontWeight: '600', lineHeight: '1.41', overflow: 'hidden', textOverflow: 'clip',
                                    display: '-webkit-box', webkitBoxOrient: 'vertical', padding: '0px', margin: '0px'
                                }} >{propss.data.textheader}</h3>
                                <p style={{
                                    fontSize: '20px', paddingBottom: '1px', fontWeight: '400', lineHeight: '1.87',
                                    display: '-webkit-box', webkitBoxOrient: 'vertical', color: '#666', textOverflow: 'clip'
                                }}>{propss.data.textcontent.map((content) => <>{content}<br /></>)}</p>
                            </div>
                        </li>
                        <li style={{ display: 'list-item', position: 'relative' }}>
                            <ImageBox imgheader={propss.data.imgheader2} imgurl={propss.data.imgurl2} />
                            <div style={{ marginTop: '30px', display: 'block' }} >
                                <h3 style={{
                                    fontSize: '30px', fontWeight: '600', lineHeight: '1.41', overflow: 'hidden', textOverflow: 'clip',
                                    display: '-webkit-box', webkitBoxOrient: 'vertical', padding: '0px', margin: '0px'
                                }} >{propss.data.textheader2}</h3>
                                <p style={{
                                    fontSize: '20px', paddingBottom: '1px', fontWeight: '400', lineHeight: '1.87',
                                    display: '-webkit-box', webkitBoxOrient: 'vertical', color: '#666', textOverflow: 'clip'
                                }}>{propss.data.textcontent2.map((content) => <>{content}<br /></>)}</p>
                                <div style={{ marginTop: '30px', marginBottom: '-20px' }} >
                                    <a style={{
                                        marginRight: '0', display: 'inline-block', verticalAlign: 'middle', padding: '10px 29px 10px 0', position: 'relative', textAlign: 'center',
                                        fontSize: '20px', fontWeight: '400', lineHeight: '1', color: '#888', border: 'none', textDecoration: 'none'
                                    }} href={propss.data.moreurl} target="_blank" rel="noopener">
                                        <span>자세히 보기</span>
                                        <div style={{ width: '22px', height: '22px', marginTop: '20px', position: 'absolute', right: '0', top: '-25%', background: '#eee', borderRadius: '50%' }} >
                                            <i><svg width="12" height="12" viewBox="0 0 12 12">
                                                <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M4.1,2.5h5.4v5.3"></path>
                                                <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M8.9,3.2L2.2,9.8"></path>
                                            </svg>
                                            </i>

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>



                </div>
            </div >
        </>
    );
}

export default Component6;