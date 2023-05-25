import Header from '../components/header';
import Component11 from '../components/component11';
import Component12 from '../components/component12';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import { useEffect, useState } from 'react';
import img1 from '../img/newsimg/img1.jpeg';
import img2 from '../img/newsimg/img2.jpeg';
import img3 from '../img/newsimg/img3.jpeg';
import img4 from '../img/newsimg/img4.jpeg';
import img5 from '../img/newsimg/img5.jpeg';
import img6 from '../img/newsimg/img6.jpeg';
import img7 from '../img/newsimg/img7.jpeg';
import img8 from '../img/newsimg/img8.jpeg';
import img9 from '../img/newsimg/img9.jpeg';
import img10 from '../img/newsimg/img10.png';
import img11 from '../img/newsimg/img11.png';
import img12 from '../img/newsimg/img12.jpeg';
import img13 from '../img/newsimg/img13.jpeg';
import img14 from '../img/newsimg/img14.jpeg';
import img15 from '../img/newsimg/img15.jpeg';
import img16 from '../img/newsimg/img16.jpeg';
import img17 from '../img/newsimg/img17.jpeg';
import img18 from '../img/newsimg/img18.png';
import img19 from '../img/newsimg/img19.jpeg';
import img20 from '../img/newsimg/img20.jpeg';
import img21 from '../img/newsimg/img21.jpeg';
import img22 from '../img/newsimg/img22.jpeg';
import img23 from '../img/newsimg/img23.png';
import img24 from '../img/newsimg/img24.jpeg';
import img25 from '../img/newsimg/img25.jpeg';
import img26 from '../img/newsimg/img26.png';
import img27 from '../img/newsimg/img27.jpeg';
import { GetPolicyNews } from '../axios/API';

const postData = [{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=6415', imgurl: img1, tag: ['Policy'], title: '2025년까지 백신 5대 강국으로 만들기 위해 2.2조 투입된다' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=5103', imgurl: img2, tag: ['Policy', 'Medical'], title: 'AI 기반 신약개발 특허 신청·획득 쉬워진다' },
{ gourl: 'https://www.yakup.com/news/index.html?mode=view&cat=11&nid=280359', imgurl: img3, tag: ['Medical', 'Issues',], title: '신약개발 R&D, 10년간 ‘인프라‧신약‧감염증’에 4조원 투자' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152409', imgurl: img4, tag: ['Medical', 'Policy'], title: '4월부터 당뇨약 병용처방 열린다…7개 요법 급여 적용' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10168', imgurl: img5, tag: ['Issues',], title: '[바이오 인수대전③] 글로벌 M&A, 국내 기업들에도 ‘기회’…주목되는 바이오 스타트업은?' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10167', imgurl: img6, tag: ['Issues',], title: '[바이오 인수대전②] 글로벌 빅파마, M&A 확산…올해 새 먹거리 탐색 ‘활발’' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10165', imgurl: img7, tag: ['Issues',], title: '[바이오 인수대전①] 빅파마, M&A ‘빅딜’... 화이자는 왜 시젠을 선택했나' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10256', imgurl: img8, tag: ['Forum'], title: '‘한국-덴마크 병원 네트워크’ 출범..."양국 주요 병원들의 의료서비스 질 높일 것"' },
{ gourl: 'https://www.viva100.com/main/view.php?key=20230406010001754', imgurl: img9, tag: ['Medical', 'Issues'], title: '“신약 개발도 AI가”…‘디지털 전환’ 서두는 제약사들' },
{ gourl: 'http://www.hitnews.co.kr/news/articleView.html?idxno=44584', imgurl: img10, tag: ['Issues', 'Policy'], title: '日 제네릭 80%의 명과 암, 제네릭 권하던 정책 재정비' },
{ gourl: 'https://www.newsway.co.kr/news/view?ud=2023040514272897308', imgurl: img11, tag: ['Medical'], title: 'K제약바이오, 국내 넘어 글로벌 임상 가속화' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=9896', imgurl: img12, tag: ['Issues',], title: '오가노이드, 동물실험 대체 방법으로 ‘주목’…국내 주요 기업은?' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=9919', imgurl: img13, tag: ['Forum', 'Issues'], title: 'AI신약개발전문위원회 출범, AI 통한 디지털 전환과 협업 생태계 가속화 약속' },
{ gourl: 'https://newsis.com/view/?id=NISX20230330_0002248089&cID=10434&pID=13200', imgurl: img14, tag: ['Issues', 'Medical'], title: "'글로벌 제약사 뭉치돈' 몰리는 아일랜드…이유는 '이것'" },
{ gourl: 'https://n.news.naver.com/mnews/article/648/0000015012?sid=103', imgurl: img15, tag: ['Issues', 'Medical'], title: '게임이 독이라고? 지금은 약입니다' },
{ gourl: 'https://moneys.mt.co.kr/news/mwView.php?no=2023032710502072911', imgurl: img16, tag: ['Forum',], title: "'벨기에 포럼 참석' 식약처, 디지털헬스케어 국제 협력 강화" },
{ gourl: 'http://www.hitnews.co.kr/news/articleView.html?idxno=44443', imgurl: img17, tag: ['Policy', 'Forum'], title: "올해 식약처 바이오 정책은 '맞춤형 규제'와 '안전망 구축'" },
{ gourl: 'http://www.bosa.co.kr/news/articleView.html?idxno=2193946', imgurl: img18, tag: ['Policy'], title: '방역정책 전면 ‘자율·권고’ 따른 단계별 의료체계 변화는?' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152743', imgurl: img19, tag: ['Policy',], title: "'강남언니' 플랫폼, 진료비 광고 현실화? 복지위 문턱 넘었다" },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152718', imgurl: img20, tag: ['Forum',], title: '2023 메디컬코리아 개막…코로나 이후 3년만에 대면행사' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152687', imgurl: img21, tag: ['Policy',], title: '수술실 CCTV 세부안 나왔다…촬영거부 사유 6개' },
{ gourl: 'https://www.medipana.com/article/view.php?news_idx=310405&sch_cate=D', imgurl: img22, tag: ['Medical', 'Policy',], title: "동물용의약품 생산 규제완화에 제약업계 '새 가능성' 열리나" },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10163', imgurl: img23, tag: ['Forum'], title: '산업교육연구소, ‘디지털 바이오 정책지원과 혁신 기술 동향 및 개발 성공사례’ 세미나 개최' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152334', imgurl: img24, tag: ['Medical',], title: '복지부 "5년안에 블록버스터급 신약 2개 개발하겠다"' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152875', imgurl: img25, tag: ['Policy'], title: '심평원, 업무효율성 강화 문서자동인식 시스템 도입' },
{ gourl: 'http://www.bosa.co.kr/news/articleView.html?idxno=2194393', imgurl: img26, tag: ['Forum'], title: "‘인터비즈 바이오 파트너링&투자포럼 2023’ 개최" },
{ gourl: 'https://www.startuptoday.kr/news/articleView.html?idxno=46654', imgurl: img27, tag: ['Forum', 'Medical'], title: '케이엠디바이오, ADC보다 효과 좋은 PCSN으로 글로벌 항암제 시장 도전 [제272회 BTCN벤처포럼]' },
]
const NewsPage = () => {
        const [tagData, setTagData] = useState([{ gourl: '', imgurl: '', tag: [], title: '' }])
        const [selectTag, setSelectTag] = useState('ALL')

        const data1 = { "Keyword": "Bio News", "Sentence1Limit15Words": [" Provides the latest bio-related news. ", "Learn about policies, forums and events, constraints, and the latest issues."] }
        useEffect(() => {
                GetPolicyNews().then((res) => { console.log(res.data); setTagData(res.data) })
        }, [])
        return <>
                <Header />
                <Component1 data={data1} />
                <br />
                <Component11 tag={{ 'postData': postData, 'setTagData': setTagData, 'setSelectTag': setSelectTag, 'selectTag': selectTag }} categoryTitle={['ALL', 'POLICY', 'medicine', 'animal', 'ai']} />
                {tagData.length !== 1 && <Component12 data={tagData} />}
                <Footer />
        </>
}


export { NewsPage, postData }; 