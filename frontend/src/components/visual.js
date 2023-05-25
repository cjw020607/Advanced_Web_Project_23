import common from "./common";
import React from "react";
import { Link } from 'react-router-dom';
import buttonicon from '../img/search.png';
import visual1 from "../img/visual01.jpg";
const Visual = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div style={{ backgroundImage: `url(${visual1})`, backgroundSize: '', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat no-repeat', width: '100%', height: '100%', position: 'absolute', top: '0    ', left: '0' }} />
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '1390px', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto' }}>
                <div style={{ color: '#fff', fontSize: '65px', fontWeight: '500', letterSpacing: '0.1pt', lineHeight: '120%', paddingBottom: '24px', textAlign: 'center' }}>당신이 원하는 모든 것을 물어보세요</div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', height: '56px', paddingLeft: '24px', paddingRight: '30px', borderRadius: '56px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
                    <input type='search' name='search' aria-expanded='false' aria-live='polite' style={{ fontSize: '25px', color: '#191b26', flex: 'auto', padding: '8px', border: 'none', background: 'none', minWidth: '30px', outlineOffset: '-2px', WebkitAppearance: 'textfield', margin: '0', outline: 'none' }} />

                    <img style={{
                        verticalAlign: "middle",
                        paddingLeft: "10px",
                        width: "30px"
                    }} src={buttonicon} alt />


                </div>
            </div>
        </div>
    );
}

export default Visual;




