package gcu.backend.askingservice.model;

import java.util.List;

import gcu.backend.askingservice.model.GPTRequest.Message;
import lombok.Data;

@Data
public class GPTResponse {
    private List<Choice> choices;
    private long created;
    private String id;
    private String model;
    private String object;
    private Usage usage;

    @Data
    public static class Choice {
        private String finish_reason;
        private int index;
        private Message message;
    }

    @Data
    public static class Usage {
        private int completion_tokens;
        private int prompt_tokens;
        private int total_tokens;
    }

    public String getResponse() {
        if (choices.size() == 0) {
            return "";
        }
        if (choices.get(0).getMessage() == null) {
            return "";
        }
        if (choices.get(0).getMessage().getContent() == null) {
            return "";
        }
        return choices.get(0).getMessage().getContent();
    }

}
