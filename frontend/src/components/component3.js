import React from "react";
import './component3.css'

const a = { boxSizing: 'border-box' }
const b = {
    margin: 0,
    padding: 0
}

const Component3 = (props) => {
    return (
        <>
            <div id="container" style={{
                marginTop: "72px",
                ...a
            }}>
                <section>
                    <div class="container">
                        <section style={{
                            ...a,
                            marginBottom: "64px"
                        }}>
                            <div style={{
                                ...a,
                                marginBottom: "16px",
                            }}>
                                <h1 class="title-h1">{props.data.Keyword1}</h1>
                            </div>
                        </section>
                    </div>
                    <div class="container">
                        <div class="ui-menu-img-text">
                            <div style={{
                                ...a,
                                flexBasis: "48%",
                                flexGrow: "1",
                                flexShrink: "1",
                                paddingRight: "10vw",
                                wordBreak: "keep - all",
                                wordWrap: "break-word"
                            }}>
                                <dl style={{ ...a, ...b }}>
                                    <dt style={{
                                        ...a,
                                        ...b, fontSize: "56px",
                                        fontWeight: "900",
                                        color: "#000"
                                    }}>{props.data.Keyword2}</dt>
                                    <dd style={{
                                        ...a, ...b, fontSize: "32px",
                                        fontWeight: "700",
                                        color: "#000", marginTop: "32px"
                                    }}>
                                        {props.data.ListOneWord1}
                                        <br />
                                        {props.data.ListOneWord2}
                                        <br />
                                        {props.data.ListOneWord3}
                                        <br />
                                        {props.data.ListOneWord4}
                                    </dd>
                                </dl>
                                <p style={{
                                    ...a, ...b, color: "#333",
                                    marginTop: "64px", paddingRight: "32px"
                                }}>
                                    {props.data.Content2Lines}
                                </p>
                            </div>
                            <div style={{
                                ...a, flexBasis: "40%",
                                flexGrow: 0, flexShrink: 1
                            }} >
                                <img style={{
                                    ...a,
                                    height: "auto",
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                    aspectRatio: ' 250 / 310', overflow: 'hidden', objectFit: 'cover'
                                }} src={props.data.imgurl[0]} alt=""></img>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    );
}

export default Component3;