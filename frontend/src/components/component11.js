import React from "react";
import { GetPolicyNews, GetDrugNews, GetAnimalNews, GetAInews, GetAllnews } from "../axios/API";
// #888

const Component11 = (props) => {


    const Category = ({ content, tag }) => {
        return <li class="">
            <a href="/" onClick={(e) => {
                e.preventDefault(); tag.setSelectTag(content);
                //tag.setTagData(selectTag(tag.postData, content)) 
                content = content.toLowerCase()
                if (content === 'policy') {
                    GetPolicyNews().then((res) => { tag.setTagData(res.data) })
                } else if (content === 'medicine') {
                    GetDrugNews().then((res) => { tag.setTagData(res.data) })
                } else if (content === 'animal') {
                    GetAnimalNews().then((res) => { tag.setTagData(res.data) })
                } else if (content === 'aibio') {
                    GetAInews().then((res) => { tag.setTagData(res.data) })
                } else if (content === 'all') {
                    GetAllnews().then((res) => { tag.setTagData(res.data) })
                }

            }} style={{ fontSize: "17px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: tag.selectTag === content ? "#023586" : '#888', position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box", textTransform: 'uppercase' }}>{content}</a>
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
