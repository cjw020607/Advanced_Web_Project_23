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
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gcu.backend.crawlingservice.model.News;
import gcu.backend.crawlingservice.service.NewsCrawling;

@RestController
@Tag(name = "Crawling", description = "뉴스 크롤링 API")
@AllArgsConstructor
public class CrawlingController {

    final NewsCrawling newscrawling;

    @GetMapping("/news")
    @Operation(summary = "뉴스 크롤링", description = "최신 바이오 뉴스 크롤링 결과.")
    public ResponseEntity<List<News>> newscrawling(@RequestBody News news) {
        try {
            List<News> newslist = newscrawling.generateNews();

            if (news == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<News>>(newslist, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
