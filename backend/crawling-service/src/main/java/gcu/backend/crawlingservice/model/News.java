package gcu.backend.crawlingservice.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class News {
    private String gourl;
    private String imgurl;
    private List<String> tag;
    private String title;

}
