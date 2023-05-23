import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component4 from '../components/component4';
import Component7 from '../components/component7';
import Component8 from '../components/component8';
import Header from '../components/header';
import Footer from '../components/footer';

import medicine from "../img/medicine.png";

import general from "../img/general.jpg"
import pharmacy from "../img/pharmacy.jpg"
import prescription from "../img/prescription.jpg"
import controlled from "../img/controlled.jpg"

import strepsils from "../img/strepsils.jpg"
import tylenol from "../img/tylenol.jpg"
import claritin from "../img/claritin.png"
import centrum from "../img/centrum.jpg"
import quil from "../img/quil.jpg"
import pepto from "../img/pepto.png"
import family from "../img/family.jpg"


const Com8data1 = [{ imgurl: strepsils, tag: ['Sore throat', 'Anti-inflammatory', 'Cough drop'], name: 'Strepsils' }]
const Com8data2 = [{ imgurl: tylenol, tag: ['Pain relief', 'Fever reducer', 'Very safe'], name: 'Tylenol' }]
const Com8data3 = [{ imgurl: claritin, tag: ['Allergy', 'Once a day', '24hour'], name: 'Claritin' }]
const Com8data4 = [{ imgurl: centrum, tag: ['Multivitamins', 'Nutrients', 'Miscellaneous'], name: 'Centrum' }]
const Com8data5 = [{ imgurl: quil, tag: ['Cold', 'Flu', 'Daytime & Night'], name: 'DayQuil & NyQuil' }]
const Com8data6 = [{ imgurl: pepto, tag: ['Stomachache', 'Anti-diarrhea', 'Cherry-flavored'], name: 'Pepto bismol ' }]

const InfoPage1 = () => {
        return <>
                <Header />
                <Component1 title1='MEDICINE' contents={['SoonYeol BIO is a bio company that strives to provide customers with the right and appropriate medicines,', 'making new developments to provide effective medicines.']} />
                <br /><br /><br />
                <Component4 color="#0082FF" head='Medicine company' title='Personal medicine' content1='Medicines are chemicals or compounds used to cure, halt, prevent disease or help in the diagnosis of illnesses.Our company offers reliable and proven medicines at reasonable prices, and exceptional technology across all areas helps our customers treat them.' content2='Learn more' link="https://kidshealth.org/en/teens/meds.html" image1={medicine} />
                <br /><br /><br /><br /><br />
                <Component7 title='Medicine categories' content='Since not all drugs are easily accessible to us, it is important to know the rules of each category of the drug.'
                        bar1='General' bar2='Pharmacy' bar3='Prescription' bar4='Controlled'
                        link1='https://pharmaceutical-journal.com/subject/general-sales-list-medicines'
                        link2="https://lloydspharmacy.com/blogs/prescriptions/pharmacy-medicines"
                        link3="https://en.wikipedia.org/wiki/Prescription_drug"
                        link4="https://en.wikipedia.org/wiki/Controlled_substance"
                        img1={general}
                        img2={pharmacy}
                        img3={prescription}
                        img4={controlled}
                />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Component8 bgColor="#9CF" title1='Major Medicines' title2='Experience a definite effect with the major medicine suggested by SoonYeol BIO' data={[Com8data1, Com8data2, Com8data3, Com8data4, Com8data5, Com8data6]} />
                <br /><br /><br />
                <Component2 head='Medicine' contents={['Small but big power', 'healing your body']} url="https://www.drugs.com/alpha/a.html" imgurl={family} />
                <Footer />
        </>
}

export default InfoPage1;