package gcu.backend.askingservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gcu.backend.askingservice.model.Request;
import gcu.backend.askingservice.service.ChatGPT;
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

    @PostMapping("/ask")
    @Operation(summary = "답변 받기", description = "질문에 대한 답변을 조회한다.")
    public ResponseEntity<String> askToSoonyeol(@RequestBody Request request) {
        if (request.getQuestion() == null) {
            return ResponseEntity.badRequest().body("Request is null");
        }
        return ResponseEntity.ok(chatGPT.generateText(request.getQuestion()));
    }
}
