package gcu.backend.askingservice.model;

import java.util.List;
import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class IMGRequest {
    private List<String> imgurl;

}
