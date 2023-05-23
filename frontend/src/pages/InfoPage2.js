import Header from '../components/header';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component5 from '../components/component5';
import Component10 from '../components/component10';
import Component4 from '../components/component4';
import original from '../img/original.jpg'
import img from '../img/img.png';
import info1 from '../img/info1.jpg';
import info2 from '../img/info2.jpg';
import info3 from '../img/info3.jpg';
import info4 from '../img/info4.jpg';

const InfoPage2 = () => {
        return <>
                <Header />
                <Component1 title1='Bio technology' contents={['Biotechnology harnesses cellular and biomolecular processes to develop', 'technologies and products that help improve our lives and the health of our planet.']} />
                <Component2 reverse={true} black={true} head='BIO' contents={[' Biotechnology', 'Innovation Organization']} url="https://www.bio.org/" imgurl={img} />
                <Component5 paddingRight='150px' head='What is Biotechnology?' content1='Biotechnology is technology based on biology.' content2='Using Biology to develop new products, methods and organisms' content3='intended to improve human health and society.' content4='Modern biotechnology provides' content5='breakthrough products and technologies.' img={info1} />
                <br />
                <Component10 head='Heal the World' contents={["harnessing nature's own toolbox and using our own", 'genetic makeup to heal and guide lines of research by', '\n', "-Reducing rates of infectious disease", "-Saving millions of children's lives", "-Creating more precise tools for disease detection"]} img={info2} />
                <Component10 reverse={true} head='Feul the World' marginRight='180px' contents={['uses biological processes such as fermentation and harnesses biocatalysts to become', "microscopic manufacturing plants by", '\n', "-Streamlining in chemical manufacturing processes", "-Reducing use of and reliance on petrochemicals"]} img={info3} />
                <Component10 head='Feed the World' contents={["improves crop insect resistance, enhances", 'crop herbicide tolerance and facilitates the use of more', ' environmentally sustainable farming practices by', '\n', "-Generating higher crop yields with fewer inputs", "-Lowering volumes of agricultural chemicals"]} img={info4} />
                <div style={{ margin: "150px auto" }}></div>
                <Component4 color='#22a140' head='Biotech company' title='BioNTech SE' content1='We aspire to translate science into survival by developing new immunotherapies. We are committed to improving the health of people worldwide with our fundamental research and our work in the area of development of immunotherapies utilizing the full potential of the immune system to fight cancer, infectious diseases and other serious diseases.' content2='Learn more' link="https://www.biontech.com/int/en/home.html" image1={original} />
                <div style={{ margin: "100px auto" }}></div>
                < Footer />
        </>
}

export default InfoPage2;