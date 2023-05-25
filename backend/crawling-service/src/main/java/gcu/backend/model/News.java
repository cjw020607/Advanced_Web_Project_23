package gcu.backend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class News {
    private String gourl;
    private String imgurl;
    private String tag;
    private String title;

}
