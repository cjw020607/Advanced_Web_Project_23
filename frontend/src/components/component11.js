import React from "react";
// #888

const Component11 = (props) => {
    const selectTag = (postData, content) => {
        content = content.toLowerCase()
        if (content === "all") {
            return postData
        }
        return postData.filter((item, index) => {
            const temp = item.tag.map((e) => e.toLowerCase())
            return temp.includes(content)
        })
    }

    const Category = ({ content, tag }) => {
        return <li class="">
            <a href="/" onClick={(e) => { e.preventDefault(); tag.setSelectTag(content); tag.setTagData(selectTag(tag.postData, content)) }} style={{ fontSize: "17px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: tag.selectTag === content ? "#023586" : '#888', position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box", textTransform: 'uppercase' }}>{content}</a>
        </li>
    };
    return (
        <>
            <div class="filters" style={{ boxSizing: "border-box", marginTop: "20px", boxShadow: "0 1px 1px 0 rgba(0,0,0, .1)", background: "#fff" }}>
                <div class="scroll-wrapper scroll-area scrollbar-macosx" style={{ position: "relative" }}>
                    <div class="scroll-area scrollbar-macosx scroll-content" data-offset="414.7857360839844" style={{ height: "auto", marginBottom: "0px", marginRight: "0px", maxHeight: "56px" }}>
                        <div class="container" style={{ textAlign: "center", boxSizing: "border-box", maxWidth: "1420px", padding: "0px 25px", position: "relative", margin: "0 auto", verticalAlign: "baseline" }}>
                            <ul style={{ listStyle: "none", padding: 0, whiteSpace: "nowrap", margin: 0, boxSizing: "borderBox", justifyContent: "center", display: "flex" }}>
                                {props.categoryTitle.map((item, index) => <Category tag={props.tag} content={item} />)}
                            </ul>
                        </div>

                    </div>
                    <div class="scroll-element scroll-x" style={{}}><div class="scroll-element_outer"><div class="scroll-element_size">
                    </div>
                        <div class="scroll-element_track"></div><div class="scroll-bar" style={{ width: "96px" }}>
                        </div>
                    </div>
                    </div>
                    <div class="scroll-element scroll-y" style={{}}>
                        <div class="scroll-element_outer">
                            <div class="scroll-element_size">
                            </div>
                            <div class="scroll-element_track">
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export default Component11;
