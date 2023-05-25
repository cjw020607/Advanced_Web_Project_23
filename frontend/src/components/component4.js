import React from "react";

const Component4 = (props) => {
    return <>
        <div class="component-intro component-intro--split component-intro--dark" style={{ fontFamily: "'KakaoBig',sans-serif", fontSize: "16", wordBreak: "keep-all", display: "block", color: "#191919", verticalAlign: "baseline" }}>
            <div class="wrap-middle" style={{ margin: "0 auto ", width: '1300px', position: "relative", display: "block" }}>
                <div class="component-intro__inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "10", minHeight: "470px", tableLayout: "fixed", width: "100%", position: "relative" }}>
                    <div class="component-intro__info" style={{ margin: "0 5px 0 0", display: "flex", borderRadius: "20px", width: "auto", fontSize: "16px", verticalAlign: "middle", position: "relative", background: props.color, paddingLeft: "108", paddingRight: "108px", paddingTop: "0", paddingBottom: "0", padding: "0px 100px 0px 100px", overflow: "hidden" }}>
                        <div class="component-intro__info-inner" style={{ alignSelf: "center", display: "block" }}>
                            <span class="component-intro__label" style={{ color: "#FFFFFF", display: "block", fontSize: "15px", lineHeight: "1.87", fontWeight: "600", letterSpacing: "-1px" }}>{props.data.Keyword}</span>
                            <h2 class="component-intro__title" style={{ color: "#FFFFFF", fontSize: "30px", fontWeight: "600", letterSpacing: "-1px", marginTop: "10px", marginBottom: "0" }}>{props.data.Title3Words}</h2>
                            <p class="component-into__desc" style={{ color: "rgba(255,255,255,.7)", marginTop: "17", fontSize: "15px", lineHeight: "1.87", fontWeight: "400", letterSpacing: "-1px", display: "block" }}>
                                {props.data.Content2lines}
                            </p>


                            <div class="component-intro__action" style={{ marginTop: "35px", marginBottom: "-10px", fontSize: "0", display: "block" }}>
                                <a class="ke-btn__icon ke-btn--type-02 ke-btn--icon-outlink" href={props.data.WebpageUrl} target="_blank" rel="noopener" style={{ marginRight: "0", color: "#FFFFFF", borderColor: "#FFFFFF", display: "inline-block", vrticalAlign: "middle", padding: "15px 33px 14px", position: "relative", textAlign: "center", fontSize: "13px", fontWeight: "600", lineHeight: 1, letterSpacing: "-1px", background: "transparent", border: "2px solid #FFFFFF", borderRadius: "24px", textDecoration: "none" }}>
                                    <span style={{ paddingRight: "21px", position: "relative" }}>
                                        {props.data.Title4Words}
                                        <i class="ke-guide--icon" style={{ display: "block", width: "13px", marginTop: "-7px", color: "#FFFFFF", position: "absolute", right: 0, top: "50%" }}>
                                            <svg width="10" height="10" viewBox="0 0 12 12" style={{ display: "blocK", width: "100%", height: "auto", overFlowClipMargin: "content-box", overflow: "hidden", color: "#fff" }} >
                                                <path fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" d="M4.1,2.5h5.4v5.3"></path>
                                                <path fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" d="M8.9,3.2L2.2,9.8"></path>
                                            </svg>
                                        </i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="component-intro__easel" style={{ display: "block", width: "auto", verticalAlign: "middle", position: "relative" }}>
                        <div class="component-intro__bg" style={{ width: "100%", height: "100%", position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
                            <div class="component-intro__bg-image" style={{ margin: "0 0 0 5px", height: "100%" }}>
                                <img src={props.image1} style={{ borderRadius: "20px", width: "100%", height: "100%", background: "center", backgroundSize: "cover", display: "block" }}></img></div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Component4;



