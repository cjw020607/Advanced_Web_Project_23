package gcu.backend.crawlingservice.service;

import org.springframework.stereotype.Service;
import gcu.backend.crawlingservice.model.Images;

import java.util.ArrayList;
import java.util.List;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@Service
public class ImageCrawling {
    public Images imageCrawling(List<String> keywords) throws IOException, InterruptedException {
        List<String> imageUrls = new ArrayList<>();
        Images images = new Images();

        String[] subUrls = {
                "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg",
                "https://www.shutterstock.com/ko/image-photo/dna-hologram-on-empty-classroom-background-2159708803?irclickid=XfWUGBSIOxyNUTk3CyyAnSYlUkASrCWvfXHr0g0&irgwc=1&utm_campaign=picjumbo%20%2F%20Viktor%20Hanacek&utm_content=560528&utm_medium=Affiliate&utm_source=1982588&utm_term="
        };

        for (String keyword : keywords) {
            String imgUrl = "";
            try {
                String url = "https://picjumbo.com/search/" + keyword.replace(" ", "").replace("-", "");
                Document doc = Jsoup.connect(url).get();
                Elements imgElements = doc.getElementsByAttributeValue("class", "api_media_wrap");

                Element element = imgElements.get(0);
                Elements imgTags = element.getElementsByAttributeValue("loading", "eager");

                imgUrl = imgTags.attr("src");
                if (imgUrl.equals("")) {
                    double randomValue = Math.random();
                    int val = (int) (randomValue * 1);
                    imgUrl = subUrls[val];
                }
            } catch (Exception e) {
                double randomValue = Math.random();
                int val = (int) (randomValue * 1);
                imgUrl = subUrls[val];
            }
            System.out.println(imgUrl);

            imageUrls.add(imgUrl);
            images.setKeyword(keyword);
        }

        images.setImgurl(imageUrls);

        return images;
    }
}
