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

        String[] Subimg = {
                "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg",
                "https://www.shutterstock.com/ko/image-photo/dna-hologram-on-empty-classroom-background-2159708803?irclickid=XfWUGBSIOxyNUTk3CyyAnSYlUkASrCWvfXHr0g0&irgwc=1&utm_campaign=picjumbo%20%2F%20Viktor%20Hanacek&utm_content=560528&utm_medium=Affiliate&utm_source=1982588&utm_term=" };

        for (int i = 0; i < keyword.size(); i++) {
            // url date값 오늘 날짜 불러와서 넣으면 될듯 -> 최신뉴스 반영, 그날 그날 뉴스 반영
            // page값은 1페이지,2페이지,, 이렇게
            // String imgUrl = "";
            // try {
            // String url = "https://www.shutterstock.com/ko/search/"
            // + keyword.get(i).replace(" ", "").replace("-", "")
            // + "?image_type=photo";
            // Document doc = Jsoup.connect(url).get();
            // Elements imgelement = doc.getElementsByAttributeValue("class",
            // "mui-1l7n00y-thumbnail");
            // imgUrl = imgelement.attr("src"); // 사진링크
            // if (imgUrl.equals("")) {
            // imgUrl =
            // "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg";
            // }
            // } catch (Exception e) {
            // imgUrl =
            // "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg";
            // }
            // System.out.println(imgUrl);

            String imgUrl = "";
            try {
                String url = "https://picjumbo.com/search/"
                        + keyword.get(i).replace(" ", "").replace("-", "");
                Document doc = Jsoup.connect(url).get();
                Elements imgelement = doc.getElementsByAttributeValue("class", "api_media_wrap");

                Element element = imgelement.get(0);
                Elements img = element.getElementsByAttributeValue("loading", "eager");

                imgUrl = img.attr("src");
                if (imgUrl.equals("")) {
                    double randomValue = Math.random();
                    int val = (int) (randomValue * 1) + 1;
                    imgUrl = Subimg[val].toString();

                }
            } catch (Exception e) {
                double randomValue = Math.random();
                int val = (int) (randomValue * 1) + 1;
                imgUrl = Subimg[val].toString();
            }
            System.out.println(imgUrl);

            Image.add(imgUrl);

        }

        Images images = new Images();
        images.setImgurl(Image);

        return images;
    }

}
