package gcu.backend.askingservice.service;

import org.springframework.stereotype.Service;
import java.util.Random;
import lombok.Data;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import gcu.backend.askingservice.service.ChatGPT;

@Service
@Data

public class Prompt {

    Random random = new Random();
    final ChatGPT chatgpt;
    JSONParser parser = new JSONParser();

    public JSONObject promptService(String request) throws ParseException {
        double randomValue = Math.random();
        int val = (int) (randomValue * 3) + 2;
        String enter = "Give me" + val + "JSONs in line with the sentence above";
        String jsonData = "{\n" +
                "    \"Keyword1\": \" ???\",\n" +
                "    \"ExplainIn2sentence\": \" ??? \",\n" +
                "    \"Keyword2\": \" ??? \",\n" +
                "    \"ExplainIn2sentence\": \" ??? \",\n" +
                "    \"Keyword3\": \" ??? \",\n" +
                "    \"ExplainIn2sentence\": \" ??? \"\n" +
                "}";
        String warning = "You have to answer in JSON format";
        String gptPrompt = request + enter + jsonData + warning;
        String answer = chatgpt.generateText(gptPrompt);
        JSONObject jsonObject = (JSONObject) parser.parse(answer);

        return jsonObject;
    }

}
