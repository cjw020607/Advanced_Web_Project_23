package gcu.backend.crawlingservice.controller;

import javax.annotation.Tainted;

import org.springframework.http.HttpStatus;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gcu.backend.crawlingservice.model.News;
import gcu.backend.crawlingservice.repository.ImageRespository;
import gcu.backend.crawlingservice.model.Images;
import gcu.backend.crawlingservice.model.Keyword;
import gcu.backend.crawlingservice.service.NewsCrawling;
import gcu.backend.crawlingservice.service.ImageCrawling;

@RestController
@Tag(name = "Crawling", description = "크롤링 API")
@AllArgsConstructor
@Slf4j
public class CrawlingController {

    final NewsCrawling newscrawling;
    final ImageCrawling imagecrawling;
    final ImageRespository imageRespository;

    @GetMapping("/Allnews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsAllcrawling() {
        try {
            List<News> newslist = newscrawling.generateAllNews();

            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/policynews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsPolicycrawling() {
        try {
            List<News> newslist = newscrawling.generatePolicyNews();

            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/AInews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsAIcrawling() {
        try {
            List<News> newslist = newscrawling.generateAINews();

            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/Drugnews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsDrugcrawling() {
        try {
            List<News> newslist = newscrawling.generateDrugNews();

            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/Animalnews")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newsAnimalcrawling() {
        try {
            List<News> newslist = newscrawling.generateAnimalNews();

            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/image")
    @Operation(summary = "이미지 크롤링", description = "이미지 크롤링 결과")
    public ResponseEntity<Images> imageCrawling(@RequestBody Keyword keyword) {
        System.out.println(keyword.toString());
        try {
            Images imageurl = imagecrawling.imageCrawling(keyword.getWords());
            System.out.println(imageurl.toString());
            if (imageurl == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            imageRespository.save(imageurl);
            return new ResponseEntity<Images>(imageurl, HttpStatus.OK);
        } catch (Exception e) {
            log.info(e.toString());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
