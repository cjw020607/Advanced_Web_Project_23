package gcu.backend.askingservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import gcu.backend.askingservice.model.Request;
import gcu.backend.askingservice.service.ChatGPT;
import gcu.backend.askingservice.service.Prompt;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.ws.rs.core.Response;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@RestController
@Tag(name = "Asking", description = "질문 API")
@AllArgsConstructor
@Slf4j
public class AskingController {

    final ChatGPT chatGPT;
    final Prompt prompt;

    @PostMapping("/chatgpt")
    @Operation(summary = "답변 받기", description = "질문에 대한 답변을 조회한다.")
    public ResponseEntity<String> askToChatGPT(@RequestBody Request request) {
        if (request.getQuestion() == null) {
            return ResponseEntity.badRequest().body("Request is null");
        }
        return ResponseEntity.ok(chatGPT.generateText(request.getQuestion()));
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("test");
    }

    @PostMapping("/prompt")
    @Operation(summary = "prompt service", description = "prompt service입니다.")
    public ResponseEntity<Map<String, Map<String, Object>>> promptService(@RequestBody Request request) {
        if (request == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        try {
            return ResponseEntity.ok(prompt.promptService(request.getQuestion()));
        } catch (Exception e) {
            log.info(e.toString());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
