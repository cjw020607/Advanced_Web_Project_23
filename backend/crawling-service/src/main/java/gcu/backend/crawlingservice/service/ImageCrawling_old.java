package gcu.backend.crawlingservice.service;

import org.springframework.stereotype.Service;

import gcu.backend.crawlingservice.model.Images;
import lombok.Data;

import java.util.*;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;;

@Service
public class ImageCrawling_old {

    public Images imageCrawling(List<String> keyword) throws IOException, InterruptedException {

        List<String> Image = new ArrayList<>();

        for (int i = 0; i < keyword.size(); i++) {
            // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
            // page값은 1페이지,2페이지,, 이렇게
            String imgUrl = "";
            try {
                String url = "https://www.shutterstock.com/ko/search/"
                        + keyword.get(i).replace(" ", "").replace("-", "")
                        + "?image_type=photo";
                Document doc = Jsoup.connect(url).get();
                Elements imgelement = doc.getElementsByAttributeValue("class", "mui-1l7n00y-thumbnail");
                imgUrl = imgelement.attr("src"); // 사진링크
                if (imgUrl.equals("")) {
                    imgUrl = "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg";
                }
            } catch (Exception e) {
                imgUrl = "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg";
            }
            System.out.println(imgUrl);
            Image.add(imgUrl);
        }
        Images images = new Images();
        images.setImgurl(Image);

        return images;
    }

}
