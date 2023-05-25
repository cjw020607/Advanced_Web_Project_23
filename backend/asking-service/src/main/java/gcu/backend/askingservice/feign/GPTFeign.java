package gcu.backend.askingservice.feign;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import feign.Headers;
import feign.Response;
import gcu.backend.askingservice.model.GPTRequest;
import gcu.backend.askingservice.model.GPTResponse;

@FeignClient(name = "chatgpt", url = "https://api.openai.com/")
public interface GPTFeign {

    @PostMapping(value = "/v1/chat/completions")
    GPTResponse generateText(@RequestHeader("Authorization") String bearerToken, GPTRequest request);
}
