import bannerImg from "../img/227_5.jpg";
import call from "../img/call.png";
import mail from "../img/mail.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Footer = () => {
    const listSyle = { listStyle: 'none' }
    const linkstyle = { color: 'rgba(17,17,17,0.6)', fontSize: '13px', fontWeight: '400', letterSpacing: '0.2pt', lineHeight: '28px', cursor: 'pointer', textDecoration: 'none' }
    const spanstyle = { display: 'inline-block', color: '#111', fontSize: '15px', fontWeight: '500', letterSpacing: '0.3pt', lineHeight: '30px', marginBottom: '15px', textTransform: 'uppercase' }
    const ulstyle = { position: 'relative', listSyle: 'none', padding: '0', margin: '0', lineHeight: '155%' }
    const infostyle = { color: '#888', fontSize: '14px', fontWeight: '400', letterSpacing: '-0.3pt', lineHeight: '180%', margin: '0', marginRight: '14px', wordBreak: 'keep-all' }
    const location = useLocation();
    return <>
        <div style={{ maxWidth: '1550px', width: '100%', height: '1px', background: '#ddd', margin: '0 auto', padding: '0 20px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 20px 80px 116px', maxWidth: '1550px', width: '100%', boxSizing: 'border-box', position: 'relative', margin: '0 auto' }}>
            <div>
                <h1 style={{ width: '154px', height: '59px', marginBottom: '70px', padding: 0, }}><img src={bannerImg} style={{ width: '100%', borderRadius: '10px' }} /></h1>
                <p style={{ ...infostyle, display: 'inline-block' }}>(주)순두부열라면바이오</p>
                <p style={{ ...infostyle }}>경기도 성남시 수정구 성남대로 1342</p>
                <p style={{ ...infostyle }}>2023 가천대학교 고급웹프로그래밍 팀프로젝트 - React</p>
                <p style={{ ...infostyle, display: 'inline-block' }}><div style={{
                    display: 'inline-block', width: '14px', height: '12px', background: `url(${call}) no-repeat center / cover`, marginRight: '5px'
                }} />031-750-8659</p>
                < p style={{ ...infostyle, display: 'inline-block' }}><div style={{ display: 'inline-block', width: '14px', height: '12px', background: `url(${mail}) no-repeat center / cover`, marginRight: '5px' }} />swdm@gachon.ac.kr</p>
            </div>
            <div style={{ paddingRight: '100px', }}>
                <ul style={ulstyle}>
                    <span style={spanstyle}>
                        Members
                    </span>
                    <li style={listSyle}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ ...linkstyle, width: '70px', margin: '0', padding: '0' }}>202033868</p>
                            <p style={{ ...linkstyle, width: '45px', margin: '0', padding: '0' }}>이소정</p>
                        </div>
                    </li>
                    <li style={listSyle}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ ...linkstyle, width: '70px', margin: '0', padding: '0' }}>202135512</p>
                            <p style={{ ...linkstyle, width: '45px', margin: '0', padding: '0' }}>김미소</p>
                        </div>
                    </li>
                    <li style={listSyle}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ ...linkstyle, width: '70px', margin: '0', padding: '0' }}>202135577</p>
                            <p style={{ ...linkstyle, width: '45px', margin: '0', padding: '0' }}>정민규</p>
                        </div>
                    </li>
                    <li style={listSyle}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ ...linkstyle, width: '70px', margin: '0', padding: '0' }}>202135588</p>
                            <p style={{ ...linkstyle, width: '45px', margin: '0', padding: '0' }}>최지우</p>
                        </div>
                    </li>
                    <li style={listSyle}>
                        <div style={{ display: 'flex' }}>
                            <p style={{ ...linkstyle, width: '70px', margin: '0', padding: '0' }}>202135600</p>
                            <p style={{ ...linkstyle, width: '45px', margin: '0', padding: '0' }}>황채연</p>
                        </div>
                    </li>
                </ul>

            </div>
            <div style={{ writingMode: 'vertical-rl', whiteSpace: 'nowrap', opacity: '0.5', color: '#777', fontSize: '12px', fontWeight: '400', letterSpacing: '0.3pt', lineHeight: '180%', textTransform: 'uppercase', position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%) rotate(180deg)' }}>© SoonYeol BIO. All rights reserved.</div>
        </div ></>
}

export default Footer