package gcu.backend.crawlingservice.service;

import org.springframework.stereotype.Service;

import gcu.backend.crawlingservice.model.News;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.*;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@Service
@AllArgsConstructor
public class NewsCrawling {

    public List<News> generateAINews() throws IOException {

        List<News> newsList = new ArrayList<>();

        // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
        // page값은 1페이지,2페이지,, 이렇게
        String url = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N136&sc_section_code=S1N39&view_type=";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByAttributeValue("class", "type");

        for (Element e : elements.select("li")) {

            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("AIBio");
            news.setTag(tag);
            newsList.add(news);
        }
        return newsList;
    }

    public List<News> generatePolicyNews() throws IOException {

        List<News> newsList = new ArrayList<>();

        // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
        // page값은 1페이지,2페이지,, 이렇게
        String url = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N102&view_type=sm";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByAttributeValue("class", "type");

        for (Element e : elements.select("li")) {

            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("Policy");
            news.setTag(tag);
            newsList.add(news);
        }

        return newsList;
    }

    public List<News> generateDrugNews() throws IOException {

        List<News> newsList = new ArrayList<>();

        // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
        // page값은 1페이지,2페이지,, 이렇게
        String url = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N105&sc_section_code=S1N39&view_type=";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByAttributeValue("class", "type");

        for (Element e : elements.select("li")) {

            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("Medicine");
            news.setTag(tag);
            newsList.add(news);
        }
        return newsList;
    }

    public List<News> generateAnimalNews() throws IOException {

        List<News> newsList = new ArrayList<>();

        // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
        // page값은 1페이지,2페이지,, 이렇게
        String url = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N133&view_type=sm";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByAttributeValue("class", "type");

        for (Element e : elements.select("li")) {

            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("Animal");
            news.setTag(tag);
            newsList.add(news);
        }
        return newsList;
    }

    public List<News> generateAllNews() throws IOException {

        List<News> newsList = new ArrayList<>();

        // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
        // page값은 1페이지,2페이지,, 이렇게
        String aiurl = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N136&sc_section_code=S1N39&view_type=";
        String drugurl = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N105&sc_section_code=S1N39&view_type=";
        String policyurl = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N102&view_type=sm";
        String animalurl = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N133&view_type=sm";

        // ai news
        Document doc = Jsoup.connect(aiurl).get();
        Elements elements = doc.getElementsByAttributeValue("class", "type");
        int i = 0;
        for (Element e : elements.select("li")) {
            if (i >= 3)
                break;
            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("AIBio");
            news.setTag(tag);
            newsList.add(news);
            i++;
        }

        // drug news
        Document doc2 = Jsoup.connect(drugurl).get();
        Elements elements2 = doc2.getElementsByAttributeValue("class", "type");
        for (Element e : elements2.select("li")) {
            if (i >= 6)
                break;
            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("Medicine");
            news.setTag(tag);
            newsList.add(news);
            i++;
        }

        // policy news
        Document doc3 = Jsoup.connect(policyurl).get();
        Elements elements3 = doc3.getElementsByAttributeValue("class", "type");
        for (Element e : elements3.select("li")) {
            if (i >= 9)
                break;
            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("Policy");
            news.setTag(tag);
            newsList.add(news);
            i++;
        }

        // animal news
        Document doc4 = Jsoup.connect(animalurl).get();
        Elements elements4 = doc4.getElementsByAttributeValue("class", "type");
        for (Element e : elements4.select("li")) {
            if (i >= 12)
                break;
            Element imgElement = e.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크

            Elements aElements = e.select("h4");
            Elements aElement = aElements.select("a");
            String articleUrl = aElement.attr("href"); // 기사링크
            String title = aElement.text(); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setTitle(title);
            news.setGourl("https://www.pharmnews.com/" + articleUrl);
            List<String> tag = new ArrayList<>();
            tag.add("Animal");
            news.setTag(tag);
            newsList.add(news);
            i++;
        }

        Collections.shuffle(newsList);
        return newsList;
    }

}