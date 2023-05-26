import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import { throttle } from 'lodash'

const Header = () => {
    const [scrollevent, setScrollevent] = useState(false);
    const onScrollFn = useMemo(() => throttle(() => {
        if (window.scrollY > 20) {
            setScrollevent(true);
        } else {
            setScrollevent(false);
        }
    }, 100), []);

    useEffect(() => {
        window.addEventListener('scroll', onScrollFn);
        return () => {
            window.removeEventListener('scroll', onScrollFn);
        }
    }, []);
    const location = useLocation();
    const color = scrollevent ? '000' : location['pathname'] === '/' ? 'FFF' : '000';
    const titlecolor = scrollevent ? '#1ec545' : location['pathname'] === '/' ? 'white' : 'black';
    const a = { cursor: 'pointer', textDecoration: 'none' }

    const Li = (props) => {
        return <li style={{ display: 'inline-block', position: 'relative' }}>
            <Link style={{
                ...a, display: 'block', height: '100%', color: '#' + color, padding: '0 36px', margin: '0', fontSize: '15px', fontWeight: 'bold'
            }} to={{ pathname: props.src }}>
                {(location['pathname'] === props.src) && <div style={{ position: 'absolute', left: '35px', top: '30px', width: 'calc(100% - 70px)', display: 'inline', height: '2px', backgroundColor: '#1ec545' }} />}
                {props.children}
            </Link>
        </li >
    }
    return <>
        {location['pathname'] !== '/' && <div style={{ height: '100px' }}></div>}
        <div style={{ width: '100%', position: 'fixed', 'top': 0, 'left': 0, 'borderBottom': `1px solid ${scrollevent ? '#ddd' : 'transparent'}`, background: `${scrollevent ? '#fff' : 'transparent'}`, 'zIndex': 99999, transition: '.3s' }}>
            <div style={{ height: `${scrollevent ? '75px' : '100px'}`, display: 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', maxWidth: '1390px', width: '100%', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto', transition: '.3s' }}>
                <h1 style={{ width: '185px', position: 'relative', fontSize: scrollevent ? '25px' : '30px', transition: '.3s' }}>
                    <Link style={{
                        display: 'block', width: '100%', height: '100%', cursor: 'pointer', textDecoration: 'none', color: titlecolor,
                        wordSpacing: '-4px'
                    }} to={{ pathname: '/' }}>
                        <span style={{
                            letterSpacing: '-1.2px',
                            wordSpacing: '-6.5px',
                            fontWeight: 'normal'
                        }}>Soon Yeol</span> BIO
                        {/*<img style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: '0' }} src={bannerImg}></img>*/}
                    </Link>
                </h1>
                {/* <ul style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', listStyle: 'none', padding: '0' }}>
                    <Li src="/tag">News BIO</Li>
                    <Li src="/info1">Medicine</Li>
                    <Li src="/info2">Bio&technology</Li>
                    <Li src='/info3'>HealthCare</Li>
                </ul> */}
                <div style={{
                    width: '200px', display: 'flex', alignItems: 'center', color: '#' + color
                }}>
                    <Li src="/tag">Browse BIO News</Li>
                    {/* <Link style={{ ...a, color: '#' + color }} to={{ pathname: '/tag' }}>Gachon University</Link> */}
                    {/* <Link style={{ ...a, color: '#' + color }} to={{ pathname: '/market' }}>Gachon University</Link> */}
                </div>
            </div >
        </div ></>
}

export default Header;