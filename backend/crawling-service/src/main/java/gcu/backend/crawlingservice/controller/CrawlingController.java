package gcu.backend.crawlingservice.controller;

import javax.annotation.Tainted;
import org.springframework.http.HttpStatus;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gcu.backend.crawlingservice.model.News;
import gcu.backend.crawlingservice.model.Image;
import gcu.backend.crawlingservice.service.NewsCrawling;
import gcu.backend.crawlingservice.service.ImageCrawling;

@RestController
@Tag(name = "Crawling", description = "크롤링 API")
@AllArgsConstructor
public class CrawlingController {

    final NewsCrawling newscrawling;
    final ImageCrawling imagecrawling;

    @GetMapping("/Allnews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsAllcrawling(@RequestBody News news) {
        try {
            List<News> newslist = newscrawling.generateAllNews();

            if (news == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/policynews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsPolicycrawling(@RequestBody News news) {
        try {
            List<News> newslist = newscrawling.generatePolicyNews();

            if (news == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/AInews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsAIcrawling(@RequestBody News news) {
        try {
            List<News> newslist = newscrawling.generateAINews();

            if (news == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/Drugnews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsDrugcrawling(@RequestBody News news) {
        try {
            List<News> newslist = newscrawling.generateDrugNews();

            if (news == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/Animalnews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsAnimalcrawling(@RequestBody News news) {
        try {
            List<News> newslist = newscrawling.generateAnimalNews();

            if (news == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/image/{keyword}")
    @Operation(summary = "이미지 크롤링", description = "이미지 크롤링 결과")
    public ResponseEntity<List<Image>> imageCrawling(@PathVariable String[] keyword) {

        try {
            List<Image> imageurl = imagecrawling.imageCrawling(keyword);

            if (imageurl == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<Image>>(imageurl, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
