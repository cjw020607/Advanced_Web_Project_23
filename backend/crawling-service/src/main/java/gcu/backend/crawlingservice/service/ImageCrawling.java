package gcu.backend.crawlingservice.service;

import org.springframework.stereotype.Service;

import gcu.backend.crawlingservice.model.Image;
import lombok.Data;

import java.util.*;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;;

@Service
public class ImageCrawling {

    public List<Image> imageCrawling(List<String> keyword) throws IOException {

        List<Image> Image = new ArrayList<>();

        for (int i = 0; i < keyword.size(); i++) {
            // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
            // page값은 1페이지,2페이지,, 이렇게
            String url = "https://www.shutterstock.com/ko/search/" + keyword.get(i)
                    + "?image_type=photo";
            Document doc = Jsoup.connect(url).get();
            Elements imgelement = doc.getElementsByAttributeValue("class", "mui-1l7n00y-thumbnail");
            String imgUrl = imgelement.attr("src"); // 사진링크

            Image image = new Image();
            image.setImgurl(imgUrl);
            Image.add(image);

        }

        return Image;
    }

}
