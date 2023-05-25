package gcu.backend.crawlingservice.model;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Keyword {
    List<String> words;

}
