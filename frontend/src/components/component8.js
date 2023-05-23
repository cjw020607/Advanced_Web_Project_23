const Component8 = (propss) => {


    const Contextbig = (props) => {
        const tags = props.tags
        let btagString = '';
        if (tags && tags.length > 0) {
            btagString = tags.join(' #');
        }
        return <>
            <div style={{ position: "relative", width: "100%" }}>
                <a>
                    <div style={{ width: "100%", height: "100%", overFlow: "hidden" }}>
                        <div>
                            <img src={props.imgurl} alt style={{ width: "620px", height: "435px", verticalAlign: "top", border: "0" }}></img>
                        </div>
                    </div>
                </a>
            </div>
            <div style={{ paddingTop: "30px", paddingBottom: "10px", backgroundColor: propss.bgColor }}>
                <div style={{ minHeight: "25px", marginLeft: "20px", width: "90%" }}>
                    <span style={{ color: "#666", fontSize: "16px", marginRight: "8px" }}>#{btagString}</span>
                </div>
                <div>
                    <a style={{ fontSize: "30px", marginLeft: "20px", color: "#333", fontWeight: "bold", textDecoration: "none" }}>{props.name}</a>
                </div>
            </div>
        </>
    }


    const Context = (props) => {
        const tags = props.tags
        let tagString = '';
        if (tags && tags.length > 0) {
            tagString = tags.join(' #');
        }
        return <>
            <div style={{ width: "100%", position: "relative" }}>
                <a>
                    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                        <div>
                            <img src={props.imgurl} alt style={{ width: "305px", height: "215px", verticalAlign: "top", border: "0" }}></img>
                        </div>
                    </div>
                </a>
            </div>
            <div style={{ paddingTop: "30px", paddingBottom: "10px" }}>
                <div style={{ minHeight: "25px" }}>
                    <span style={{ color: "#666", fontSize: "16px", marginRight: "8px" }}>#{tagString}</span>
                </div>
                <div>
                    <a style={{ fontSize: "22px", color: "#333", fontWeight: "bold", textDecoration: "none" }}>{props.name}</a>
                </div>
            </div>
        </>
    }


    return (
        <>
            <div style={{ marginTop: "30px" }}>
                <h2 style={{ fontSize: "40px", textAlign: "center" }}>{propss.title1}</h2>
                <span style={{
                    width: "37px", height: "2px", background: "#000", marginTop: "20px", marginRight: "auto", marginLeft: "auto",
                    marginBottom: "10px", display: "block", content: ''
                }}></span>
                <p style={{ fontSize: "20px", textAlign: "center" }}>{propss.title2}</p>
                <div className="thmb_list02" style={{ width: "100%", paddingTop: "30px", width: "1280px", display: "table", marginRight: "auto", marginLeft: "auto", position: "relative", marginBottom: "20px" }}>
                    <div className="list_area" style={{ width: "100%", display: "table" }}>
                        <div className="item_big" style={{
                            float: "left", width: "620px", marginRight: "40px",
                            verticalAlign: "top", paddingTop: "15px", paddingBottom: "15px", minHeight: "550px"
                        }}>
                            {propss.data[0].map((item, index) => {
                                return <Contextbig imgurl={item.imgurl} tags={item.tag} name={item.name} />
                            })}

                        </div>
                        <div className="item" style={{
                            float: "left", width: "300px", minHeight: "300px", marginRight: "20px", verticalAlign: "top",
                            paddingTop: "15px", paddingBottom: "15px"
                        }}>
                            {propss.data[1].map((item, index) => {
                                return <Context imgurl={item.imgurl} tags={item.tag} name={item.name} />
                            })}
                        </div>
                        <div className="item" style={{
                            float: "left", width: "300px", minHeight: "300px", verticalAlign: "top",
                            paddingTop: "15px", paddingBottom: "15px"
                        }}>
                            {propss.data[2].map((item, index) => {
                                return <Context imgurl={item.imgurl} tags={item.tag} name={item.name} />
                            })}
                        </div>
                        <div className="item big no6" style={{ float: "right" }}>
                            {propss.data[5].map((item, index) => {
                                return <Contextbig imgurl={item.imgurl} tags={item.tag} name={item.name} />
                            })}
                        </div>
                        <div className="item" style={{
                            float: "left", width: "300px", minHeight: "300px", marginRight: "20px", verticalAlign: "top",
                            paddingTop: "15px", paddingBottom: "15px"
                        }}>
                            {propss.data[3].map((item, index) => {
                                return <Context imgurl={item.imgurl} tags={item.tag} name={item.name} />
                            })}
                        </div>
                        <div className="item" style={{
                            float: "left", width: "300px", minHeight: "300px", marginRight: "20px", verticalAlign: "top",
                            paddingTop: "15px", paddingBottom: "15px"
                        }} >
                            {propss.data[4].map((item, index) => {
                                return <Context imgurl={item.imgurl} tags={item.tag} name={item.name} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Component8;