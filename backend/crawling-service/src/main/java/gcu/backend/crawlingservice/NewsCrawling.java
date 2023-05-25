package gcu.backend.crawlingservice;

import org.springframework.stereotype.Service;

import gcu.backend.model.News;
import lombok.Data;
import gcu.backend.model.News;

import java.util.*;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;;

@Service

public class NewsCrawling {
    public List<News> generateNews() throws IOException {
        List<News> newsList = new ArrayList<>();
        int page = 3;
        for (int j = 1; j < page; j++) {
            // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
            // page값은 1페이지,2페이지,, 이렇게
            String url = "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&oid=346&date=20230525&page=" + j;
            Document doc = Jsoup.connect(url).get();
            Elements elements = doc.getElementsByAttributeValue("class", "list_body newsflash_body");

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
        }
        return newsList;
    }
}