package gcu.backend.askingservice.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import feign.Response;
import gcu.backend.askingservice.feign.GPTFeign;
import gcu.backend.askingservice.model.GPTRequest;
import gcu.backend.askingservice.model.GPTResponse;
import gcu.backend.askingservice.model.GPTRequest.Message;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Service
@Data
@Slf4j
public class ChatGPT {

    @Value("${apikey}")
    private String API_KEY;

    private final GPTFeign gptFeign;

    public String generateText(String request) {
        List<Message> messages = new ArrayList<>();
        messages.add(Message.builder().role("user").content(request).build());
        final GPTRequest body = GPTRequest.builder().model("gpt-3.5-turbo")
                .messages(messages).build();
        GPTResponse response = gptFeign.generateText(API_KEY, body);
        return response.getResponse();
    }
}
