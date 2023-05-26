import Header from '../components/header';
import Visual from '../components/visual';
import Footer from '../components/footer';
import Component13 from '../components/Component13';
import Visual2 from '../components/visual2';

import visual from '../img/191713570956-c6c1b49b-a1e9-43c1-9a95-34a6db491d93.jpg'
import { useState } from 'react';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component3 from '../components/component3';
import Component4 from '../components/component4';
import Component5 from '../components/component5';
import Component6 from '../components/component6';
import Component7 from '../components/component7';
import Component10 from '../components/component10';
const MainPage = () => {
    const [components, setComponents] = useState([])
    const [datas, setDatas] = useState({})
    return <><Header /><Visual com={{ setDatas: setDatas }} />
        <div id="section-1"></div>
        {Object.entries(datas).map(([key, value]) => {
            if (key.startsWith('com')) {
                console.log(value)
                console.log(value.imgurl)
                if (value.imgurl !== undefined)
                    console.log(value.imgurl[0])
            }
            if (key === 'com1')
                return <Component1 data={value} />
            else if (key === 'com2')
                return <Component2 data={value} />
            else if (key === 'com3')
                return <Component3 data={value} />
            else if (key === 'com4')
                return <Component4 data={value} color="#0082FF" />
            else if (key === 'com5')
                return <Component5 data={value} />
            else if (key === 'com6')
                return <Component6 data={value} />
            else if (key === 'com7')
                return <Component7 data={value} />
            else if (key === 'com10')
                return <Component10 data={value} />
        })
        }
        {/* <Component13 head='Medicines' content1={'SoonYeol BIO\'s information is available at reasonable cost to patients'} content2='Provides an opportunity to receive high-quality biopharmaceutical treatment' button='Learn more' url="/info1" img={visual} /> */}
        {/* <Visual2 /> */}
        <Footer />
    </>
}

export default MainPage;