package gcu.backend.askingservice.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import gcu.backend.askingservice.model.IMGResponse;
import gcu.backend.askingservice.model.Keyword;

@FeignClient(name = "crawling-service")
public interface IMGCrawling {
    @PostMapping(value = "/image")
    IMGResponse getImgResponse(@RequestBody Keyword Keyword);
}
