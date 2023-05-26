import common from "./common";
import React from "react";
import { Link } from 'react-router-dom';
import buttonicon from '../img/search.png';
import visual1 from "../img/visual01.jpg";
import { useState, useRef } from "react";
import useAutosizeTextArea from './useAutosizeTextArea';
import { PostPrompt } from "../axios/API";
import ReactLoading from 'react-loading';
const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
}

const Visual = (props) => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            if (loading) return;
            props.com.setDatas({})
            setLoading(true);
            setInput('');
            console.log(e.target.value);
            PostPrompt(e.target.value).then((res) => {
                console.log(res);
                props.com.setDatas(res.data);
                const element = document.getElementById('section-1');
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500)
            }).catch((e) => alert(e)).finally(() => {
                setLoading(false);
            });
        }
    }
    const textAreaRef = useRef(null);
    useAutosizeTextArea(textAreaRef.current, input);
    return (
        <div style={{ height: '100vh' }}>
            <div style={{ backgroundImage: `url(${visual1})`, backgroundSize: '', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat no-repeat', width: '100%', height: '100%', position: 'absolute', top: '0    ', left: '0' }} />
            <div style={{ width: '100%', height: '100%', flexDirection: 'column', maxWidth: '1390px', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                <div style={{ color: '#fff', fontSize: '65px', marginTop: '200px', fontWeight: '500', letterSpacing: '0.1pt', lineHeight: '120%', paddingBottom: '24px', textAlign: 'center' }}>당신이 원하는 모든 것을 물어보세요</div>
                <div style={{
                    borderRadius: '56px', backgroundColor: 'rgba(213, 213, 213, 0.9)',
                    display: 'flex', paddingLeft: '24px', paddingRight: '30px',
                    alignItems: 'center', justifyContent: 'center', marginTop: '100px',
                    minWidth: '800px',
                    minHeight: '80px',
                }}>
                    <textarea type='text' name='search' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
                        placeholder='질문을 입력하세요'
                        rows={1}
                        ref={textAreaRef}
                        style={{
                            fontFamily: 'AppleSDGothicNeo',
                            borderRadius: '56px', paddingLeft: '24px', paddingRight: '30px',
                            fontSize: '25px', color: '#191b26', flex: 'auto',
                            padding: '15px', border: 'none', background: 'transparent',
                            overflowY: 'hidden', resize: "none"
                            , height: 'auto', outline: "none"
                        }} />
                    {loading && <ReactLoading type={'bubbles'} color={'#ffffff'} height={'70px'} width={'70px'} />}
                    {/* {!loading &&
                        <button onClick={() => { }} style={{ border: 'none' }}>
                            <img style={{
                                verticalAlign: "middle",
                                paddingLeft: "10px",
                                width: "30px"
                            }} src={buttonicon} alt /></button>} */}



                </div>
            </div>
        </div >
    );
}

export default Visual;




