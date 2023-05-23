import Header from '../components/header';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component3 from '../components/component3';
import Component7 from '../components/component7';
import Component10 from '../components/component10';
import bannerImg from "../img/info_3_1.jpg";
const InfoPage3 = () => {
    return <>
        <Header />
        <Component1 title1='HEALTH CARE' contents={['Health care is a term that refers to all services provided ', 'to individuals or communities in order to maintain and improve their health.']} />
        <Component2 head='HEALTH CARE' contents={[' Your Healthy Choice', 'Healthcare makes a better future']} url="https://www.mdpi.com/journal/healthcare" imgurl={bannerImg} />

        <Component7 title='HEALTH CARE Includes Services' content='Promote and Maintain the Physical, Mental, and Emotional Well-Being of Individuals and Populations.'
            bar1='Prevention' bar2='Diagnosis' bar3='Treatment' bar4='Rehabilitation'
            link1='#section2'
            link2="https://www.microsoft.com/ko-kr/microsoft-teams/free"
            link3="https://www.microsoft.com/ko-kr/microsoft-teams/teams-for-work"
            link4="https://www.microsoft.com/ko-kr/microsoft-teams/education"
            img1="https://cdn.pixabay.com/photo/2020/04/02/19/15/hand-washing-4996426_1280.jpg"
            img2='https://cdn.pixabay.com/photo/2019/04/03/03/06/treatment-4099432_1280.jpg'
            img3="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg"
            img4="https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg"
        />
        <div style={{ margin: '700px' }} />
        <Component10 head='Prevention' img='https://cdn.pixabay.com/photo/2020/03/17/12/44/washing-hands-4940239_1280.jpg' contents={['Preventive health care services help an individual maintain a healthy life. ', 'This includes vaccinations, healthy eating habits, ', 'regular exercise, and regular health checkups.']} />
        <Component10 reverse={true} img='https://cdn.pixabay.com/photo/2017/06/30/15/32/investigation-2458540_1280.jpg' head='Diagnosis' contents={['Diagnostic services help identify a disease or condition and are usually performed by medical professionals such as doctors, nurses, or dentists. X-rays, blood tests, ultrasound, and other diagnostic techniques are used.']} />
        <Component10 head='Treatment' img='https://cdn.pixabay.com/photo/2018/05/30/22/54/tablets-3442768_1280.jpg' contents={['Treatment services are provided to treat diseases or conditions, including medication, surgery, radiation, ', 'and other medical procedures.']} />
        <Component10 reverse={true} img='https://cdn.pixabay.com/photo/2020/04/30/12/44/therapy-center-5112724_1280.jpg' head='Rehabilitation' contents={['Rehabilitation services help you recover in the hospital. ', 'This includes physical therapy, occupational therapy,', ' and speech therapy.']} />
        <div style={{ margin: '300px' }} />
        <Component3 head='Trends' subtitle='Healthcare & IT Technology' content1='The development of information  ' content2='technology has led to the ' content3='incorporation of IT technology ' content4='in the medical field.' content5='The adoption of information technology in healthcare has also led to the development of new healthcare services and solutions that have helped improve the quality of healthcare.' img="https://www.dentons.com/-/media/images/website/background-images/industry-sectors/life-sciences-and-health-care/healthcare-22.ashx?sc_lang=en" />

        < Footer />
    </>
}

export default InfoPage3