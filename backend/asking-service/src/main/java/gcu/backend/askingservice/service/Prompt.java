package gcu.backend.askingservice.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.Data;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import gcu.backend.askingservice.service.ChatGPT;
import gcu.backend.askingservice.model.Components;
import java.util.*;

@Service
@Data
public class Prompt {
    final ChatGPT chatgpt;
    Random random = new Random();

    public List<Map<String, Object>> promptService(String request)
            throws ParseException, JsonMappingException, JsonProcessingException {

        JSONParser parser = new JSONParser();
        String[] components = { Components.com1, Components.com2, Components.com3, Components.com4, Components.com5,
                Components.com6, Components.com7, Components.com8 };
        List<Integer> numbers = new ArrayList<>();
        double randomValue = Math.random();
        int val = (int) (randomValue * 3) + 2;
        int[] arr1 = new int[val];

        for (int i = 0; i < val; i++) {
            double randomval = Math.random();
            int randomidx = (int) (randomval * 7) + 1;
            numbers.add(randomidx);
        }
        for (int i = 0; i < val; i++)
            arr1[i] = numbers.get(i).intValue();

        String enter = request
                + "Below Each JSON is contents related to above question. Each JSON's should be different contents and all the contents must be related to 'BIO Contents' if the question is not related to 'BIO Contents', make it up by force to relate the sentence with bio";
        List<String> joinCom = new ArrayList<>();
        for (int i = 0; i < val; i++) {
            int index = arr1[i];
            joinCom.add(components[index]);
        }

        String joinComs = String.join(",", joinCom);
        String warning = "Should answer in JSON format in LIST, fill the above json";
        String gptPrompt = enter + joinComs + warning;
        String answer = chatgpt.generateText(gptPrompt);
        System.out.println(answer);
        ObjectMapper objectMapper = new ObjectMapper();

        List<Map<String, Object>> list = objectMapper.readValue(answer,
                new TypeReference<List<Map<String, Object>>>() {
                });

        return list;
    }

}