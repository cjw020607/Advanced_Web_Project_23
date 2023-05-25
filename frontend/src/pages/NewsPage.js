import Header from '../components/header';
import Component11 from '../components/component11';
import Component12 from '../components/component12';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import { useEffect, useState } from 'react';
import { GetAllnews } from '../axios/API';


const NewsPage = () => {
        const [tagData, setTagData] = useState([{ gourl: '', imgurl: '', tag: [], title: '' }])
        const [selectTag, setSelectTag] = useState('ALL')
        useEffect(() => {
                GetAllnews().then((res) => { console.log(res.data); setTagData(res.data) })
        }, [])
        return <>
                <Header />
                <Component1 Keyword='Bio News' Sentence={['Provides the latest bio-related news.', 'Learn about policies, forums and events, constraints, and the latest issues.']} />
                <br />
                <Component11 tag={{ 'setTagData': setTagData, 'setSelectTag': setSelectTag, 'selectTag': selectTag }} categoryTitle={['ALL', 'POLICY', 'Medicine', 'Animal', 'AIBio']} />
                {tagData.length !== 1 && <Component12 data={tagData} />}
                <Footer />
        </>
}


export { NewsPage }; 