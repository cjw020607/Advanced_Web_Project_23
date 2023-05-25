// package gcu.backend.askingservice.service;

// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.Map;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.http.HttpEntity;
// import org.springframework.http.HttpHeaders;
// import org.springframework.http.MediaType;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

// import lombok.Data;
// import lombok.extern.slf4j.Slf4j;

// @Service
// @Data
// @Slf4j
// public class ChatGPT_old {
// @Value("${apikey}")
// private String API_KEY;

// private static final String ENDPOINT =
// "https://api.openai.com/v1/chat/completions";

// public String generateText(String request) {
// HttpHeaders headers = new HttpHeaders();
// headers.setContentType(MediaType.APPLICATION_JSON);
// headers.set("Authorization", "Bearer " + API_KEY);

// Map<String, Object> requestBody = new HashMap<>();
// requestBody.put("model", "gpt-3.5-turbo");
// // requestBody.put("max_tokens", 3000);
// // requestBody.put("temperature", 0.5);
// Map<String, Object> messages = new HashMap<>();
// messages.put("role", "user");
// messages.put("content", request);
// ArrayList<Map<String, Object>> messageArray = new ArrayList<Map<String,
// Object>>();
// messageArray.add(messages);
// requestBody.put("messages", messageArray);

// HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody,
// headers);

// RestTemplate restTemplate = new RestTemplate();
// ResponseEntity<Map> response = restTemplate.postForEntity(ENDPOINT, entity,
// Map.class);
// ArrayList<Map<String, Map>> responseArray = (ArrayList)
// response.getBody().get("choices");

// log.info(responseArray.get(0).get("message").get("content").toString());
// return responseArray.get(0).get("message").get("content").toString();
// }
// }
