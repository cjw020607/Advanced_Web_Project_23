package gcu.backend.crawlingservice.service;

import org.springframework.stereotype.Service;

import gcu.backend.crawlingservice.model.News;
import lombok.Data;

import java.util.*;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;;

@Service

public class NewsCrawling {

    public List<News> generateIssueNews() throws IOException {
        List<News> newsList = new ArrayList<>();

        // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
        // page값은 1페이지,2페이지,, 이렇게
        String url = "https://www.biotimes.co.kr/news/articleList.html?sc_sub_section_code=S2N18&view_type=sm";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByAttributeValue("class", "article-list-content type-sm text-left");

        Element element = elements.get(0);
        Elements photoElements = element.getElementsByAttributeValue("class", "photo");

        for (int i = 0; i < photoElements.size(); i++) {
            Element articElement = photoElements.get(i);
            Elements aElements = articElement.select("a");
            Element aElement = aElements.get(0);

            String articleUrl = aElement.attr("href"); // 기사링크

            Element imgElement = aElement.select("img").get(0);
            String imgUrl = imgElement.attr("src"); // 사진링크
            String title = imgElement.attr("alt"); // 기사제목

            News news = new News();
            news.setImgurl(imgUrl);
            news.setGourl(articleUrl);
            news.setTitle(title);

            newsList.add(news);

        }
        return newsList;
    }

    public List<News> generateAINews() throws IOException {
        News news = new News();
        List<News> newsList = new ArrayList<>();
        String url = "https://www.pharmnews.com/news/articleList.html?sc_sub_section_code=S2N136&sc_section_code=S1N39&view_type=";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByAttributeValue("id", "section-list");

        Element element = elements.get(0);
        Elements photoElements = element.getElementsByAttributeValue("class", "type");

        Element e = photoElements.get(0);
        Elements e1 = e.getElementsByTag("li");
        for (int i = 0; i < e1.size(); i++) {
            Element articElement = photoElements.get(i);
            Elements aElements = articElement.select("a");
            Element aElement = aElements.get(0);
            String articleUrl = aElement.attr("href"); // 기사링크

            Elements imgElement = element.getElementsByAttributeValue("class", "inner");
            Element imgElement2 = imgElement.select("img").get(0);
            String imgUrl = imgElement2.attr("src"); // 이미지 링크

            Elements contentElement = element.getElementsByAttributeValue("class", "content");
            Element title = contentElement.get(0);
            Elements titleElement = title.getElementsByAttributeValue("class", "titles line-4x2");

            Elements aElements2 = titleElement.select("a");
            Element aElement2 = aElements2.get(0);

            String title2 = aElement2.text();
            news.setImgurl(imgUrl);
            news.setGourl(articleUrl);
            news.setTitle(title2);

            newsList.add(news);

        }
        return newsList;
        // Element imgElement = photoElements.select("img").get(0);
        // String imgUrl = imgElement.attr("src");// 사진링크

        // Elements newselements = element.getElementsByAttributeValue("class",
        // "content");
        // for (int i = 0; i < photoElements.size(); i++) {
        // Element articElement = photoElements.get(i);
        // Elements aElements = articElement.select("a");
        // Element aElement = aElements.get(0);

        // String articleUrl = aElement.attr("href"); // 기사링크

        // String title = imgElement.attr("alt"); // 기사제목

        // News news = new News();
        // news.setImgurl(imgUrl);
        // news.setGourl(articleUrl);
        // news.setTitle(title);

        // newsList.add(news);

        // }
        // return newsList;
    }
}