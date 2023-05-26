package gcu.backend.crawlingservice.service;

import org.springframework.stereotype.Service;

import gcu.backend.crawlingservice.model.Images;
import lombok.Data;

import java.util.*;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@Service
public class ImageCrawling {

    public Images imageCrawling(List<String> keyword) throws IOException, InterruptedException {

        List<String> Image = new ArrayList<>();

        for (int i = 0; i < keyword.size(); i++) {
            // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
            // page값은 1페이지,2페이지,, 이렇게
            String url = "https://picjumbo.com/search/"
                    + keyword.get(i).replace(" ", "").replace("-", "");
            Document doc = Jsoup.connect(url).get();
            Elements imgelement = doc.getElementsByAttributeValue("class", "api_media_wrap");

            Element element = imgelement.get(0);
            Elements img = element.getElementsByAttributeValue("loading", "eager");

            String imgUrl = img.attr("src");

            Image.add(imgUrl);

        }

        Images images = new Images();
        images.setImgurl(Image);

        return images;
    }

}
