package gcu.backend.askingservice.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.Data;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import gcu.backend.askingservice.service.ChatGPT;
import gcu.backend.askingservice.feign.IMGCrawling;
import gcu.backend.askingservice.model.Components;
import gcu.backend.askingservice.model.IMGResponse;
import gcu.backend.askingservice.model.JsonResponse;
import gcu.backend.askingservice.model.Keyword;

import java.util.*;

@Service
@Data
public class Prompt {
    final ChatGPT chatgpt;
    Random random = new Random();

    @Autowired
    private IMGCrawling imgCrawling;

    public Map<String, Map<String, Object>> promptService(String request)
            throws ParseException, JsonMappingException, JsonProcessingException {

        String[] components = { Components.com2, Components.com3, Components.com4, Components.com5,
                Components.com6, Components.com7, Components.com10 };
        String[] names = { "com2", "com3", "com4", "com5", "com6", "com7", "com10" };
        List<Integer> numbers = new ArrayList<>();
        double randomValue = Math.random();
        int val = (int) (randomValue * 5) + 4;
        val = val >= 7 ? 7 : val;
        int[] arr1 = new int[val];

        for (int i = 0; i < val; i++) {
            double randomval = Math.random();
            int randomidx = (int) (randomval * 7);
            numbers.add(randomidx);
        }
        for (int i = 0; i < val; i++)
            arr1[i] = numbers.get(i).intValue();

        String enter = "Question : " + request
                + "\nBelow Each JSON is contents related to above question.\nEach JSON's should be different contents and all the contents must be related to 'BIO Contents'\nif the question is not related to 'BIO Contents', make it up by force to relate the sentence with bio\n";

        Map<String, String> joinComsMap = new HashMap();

        joinComsMap.put("com1", Components.com1);
        for (int i = 0; i < val; i++) {
            int index = arr1[i];
            joinComsMap.put(names[index], components[index]);
        }

        String jsons = "{";
        for (Map.Entry<String, String> entry : joinComsMap.entrySet()) {
            jsons += "\"" + entry.getKey() + "\":" + entry.getValue() + ",";
        }
        jsons = jsons.substring(0, jsons.length() - 1);
        jsons += "}";

        String warning = "\nShould answer in JSON format, fill the above json";
        String gptPrompt = enter + jsons + warning;
        System.out.println(gptPrompt);
        String answer = chatgpt.generateText(gptPrompt);
        System.out.println(answer);

        ObjectMapper objectMapper = new ObjectMapper();
        TypeReference<Map<String, Map<String, Object>>> typeRef = new TypeReference<Map<String, Map<String, Object>>>() {
        };

        Map<String, Map<String, Object>> list = objectMapper.readValue(answer, typeRef);
        // JsonResponse json = objectMapper.readValue(answer, JsonResponse.class);
        System.out.println("list");
        System.out.println(list);
        // for (Map<String, Object> map : list) {
        // if (map.containsKey("SummaryWords")) {
        // Keyword words = Keyword.builder().words((List<String>)
        // map.get("SummaryWords")).build();
        // IMGResponse response = imgCrawling.getImgResponse(words);
        // map.put("imgurl", response.getImgurl());
        // }
        // }

        for (Map.Entry<String, Map<String, Object>> entry : list.entrySet()) {
            if (entry.getValue().containsKey("SummaryWords")) {
                Keyword words = Keyword.builder().words((List<String>) entry.getValue().get("SummaryWords")).build();
                IMGResponse response = imgCrawling.getImgResponse(words);
                System.out.println(response.getImgurl());
                entry.getValue().put("imgurl", response.getImgurl());
            }
        }

        return list;
    }

}
