package gcu.backend.askingservice.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

import gcu.backend.askingservice.model.IMGResponse;
import gcu.backend.askingservice.model.Keyword;

@FeignClient(name = "CRAWLING-SERVICE")
public interface IMGCrawling {
    @PostMapping(value = "/image")
    IMGResponse getImgResponse(Keyword Keyword);
}
