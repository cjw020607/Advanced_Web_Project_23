import React from "react";

const Component12 = (propss) => {
    const Context = (props) => {
        const tags = props.tags
        let tagString = tags.join(' · ')
        return <div style={{ minHeight: '0px', minWidth: '0px' }}>
            <a target='_blank' rel='noreferrer' style={{ wordBreak: 'keep-all', margin: '0', padding: '0', border: '0', verticalAlign: 'baseline', boxSizing: 'border-box', display: 'block', color: '#191919', textDecoration: 'none', cursor: 'pointer' }} className="ke-thumb-list__link" href={props.gourl}  >
                <div style={{ height: 'auto', opacity: '1', display: 'block', width: 'auto', transition: 'opacity .3s', }} >
                    <img style={{ objectFit: 'contain', aspectRatio: ' 476 / 250', width: '100%', borderRadius: '20px', overflow: 'hidden' }} data-unveil={props.imgurl} src={props.imgurl} alt="" />
                </div>
                <div style={{ marginTop: '20px', display: 'block', cursor: 'pointer' }} >
                    <div style={{ marginBottom: '10px', display: 'block' }}>
                        <span style={{ fontSize: '15px', color: '#666' }} > {tagString}</span></div>
                    <h2 style={{
                        fontSize: '21px', paddingBottom: '1px', fontWeight: '600', lineHeight: '1.52', overflow: 'hidden', textOverflow: 'ellipsis',
                        display: '-webkit-box', webkitLineClamp: '2', webkitBoxOrient: 'vertical'
                    }} ><span>{props.text}</span></h2>
                </div>
            </a>
        </div>
    }
    return (
        <>
            <div style={{ position: 'relative', minHeight: '360px', verticalAlign: 'baseline', marginRight: "auto", marginLeft: "auto", marginTop: '50px', padding: '0', border: '0', boxSizing: 'border-box', display: 'block' }} className="article-body">
                <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1400px', position: 'relative', verticalAlign: 'baseline', padding: '0', border: '0', boxSizing: 'border-box', display: 'block' }} className="wrap-middle">


                    <div style={{ margin: '0', padding: '0', border: '0', verticalAlign: 'baseline', boxSizing: 'border-box', display: 'block' }} id="ke-case-list-wrap" className="ke-case-list-wrap">


                        <div style={{ Width: '100%', padding: '30px', border: '0', verticalAlign: 'baseline', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '60px', rowGap: '80px' }} className="ke-thumb-list">
                            {propss.data.map((item, index) => {
                                return <Context gourl={item.gourl} imgurl={item.imgurl} tags={item.tag} text={item.title} />
                            })}
                            {/* <Context gourl="https://kakaoenterprise.com/case/%ed%82%a4%ec%a6%88%eb%85%b8%ed%8a%b8-%ec%b9%b4%ec%b9%b4%ec%98%a4%ec%97%94%ed%84%b0%ed%94%84%eb%9d%bc%ec%9d%b4%ec%a6%88%ec%99%80-%ed%98%91%eb%a0%a5%ed%95%98%ec%97%ac-%ed%95%99%eb%b6%80%eb%aa%a8/" imgurl="https://kakaoenterprise.com/wp-content/uploads/2023/02/1920x1080_기업사이트-랜딩용-444x250.png" tags={[]} text="키즈노트, 카카오엔터프라이즈와 협력하여 학부모와 선생님의 사생활을 지켜주는 '키노링크' 출시" />
                            <Context gourl="https://kakaoenterprise.com/case/%ed%98%84%eb%8c%80%eb%b0%b1%ed%99%94%ec%a0%90-%ec%b9%b4%ec%b9%b4%ec%98%a4-i-%ec%bb%a4%eb%84%a5%ed%8a%b8-%ed%86%a1-%ea%b8%b0%eb%b0%98-ai-%ec%87%bc%ed%95%91%eb%a9%94%ec%9d%b4%ed%8a%b8-%ec%a0%a4/" imgurl="https://kakaoenterprise.com/wp-content/uploads/2023/02/1920x1080-1-444x250.png" tags={[]} text="현대백화점, 카카오 i 커넥트 톡 기반 AI 쇼핑메이트 ‘젤뽀’ 출시" />
                            <Context gourl="https://kakaoenterprise.com/case/%ec%94%a8%ec%97%94%ed%85%8c%ed%81%ac/" imgurl="https://kakaoenterprise.com/wp-content/uploads/2022/12/씨앤테크-442x250.png" tags={['상생프로그램', '소프트웨어 및 인터넷']} text="누구나 쉽게 사용할 수 있는 스마트 IoT 솔루션을 제공하는 씨앤테크" />
                            <Context gourl="https://kakaoenterprise.com/case/%ed%9c%b4%ec%9d%b4%eb%85%b8/" imgurl="https://kakaoenterprise.com/wp-content/uploads/2022/12/사례썸네일_휴이노-442x250.png" tags={[]} text="의료 플랫폼 혁신과 새로운 의료 경험을 연구하는 휴이노" />
                            <Context gourl="https://kakaoenterprise.com/case/%eb%a9%94%eb%94%9c%eb%a6%ac%ed%8b%b0/" imgurl="https://kakaoenterprise.com/wp-content/uploads/2022/12/사례썸네일_메딜리티-442x250.png" tags={[]} text="사진 촬영으로 알약을 세는 AI앱 ‘필아이’를 개발한 메딜리티" />
                            <Context gourl="https://kakaoenterprise.com/case/%eb%a9%94%eb%94%9c%eb%a6%ac%ed%8b%b0/" imgurl="https://kakaoenterprise.com/wp-content/uploads/2023/01/아이콘_홍보-이미지_001-375x250.jpg" tags={[]} text="쉽고 편한 디지털 건축의 시작을 만드는 아이콘" /> */}

                        </div>

                    </div>


                </div >
            </div >
            <div style={{ margin: '150px' }} />


        </>
    );
}

export default Component12;