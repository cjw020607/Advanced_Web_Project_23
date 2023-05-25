package gcu.backend.askingservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import gcu.backend.askingservice.model.Request;
import gcu.backend.askingservice.service.ChatGPT;
import gcu.backend.askingservice.service.Prompt;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.ws.rs.core.Response;
import lombok.AllArgsConstructor;
import lombok.Data;

@RestController
@Tag(name = "Asking", description = "질문 API")
@AllArgsConstructor
public class AskingController {

    final ChatGPT chatGPT;
    final Prompt prompt;

    @GetMapping("/askings")
    @Operation(summary = "답변 받기", description = "질문에 대한 답변을 조회한다.")
    public ResponseEntity<String> askToSoonyeol(@RequestBody Request request) {
        if (request == null) {
            return ResponseEntity.badRequest().body("Request is null");
        }

        return ResponseEntity.ok(chatGPT.generateText(request.getQuestion()));
    }

    @GetMapping("/prompt")
    @Operation(summary = "prompt service", description = "prompt service입니다.")
    public ResponseEntity<JSONObject> promptService(@RequestBody String request) {
        if (request == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        try {
            return ResponseEntity.ok(prompt.promptService(request));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
