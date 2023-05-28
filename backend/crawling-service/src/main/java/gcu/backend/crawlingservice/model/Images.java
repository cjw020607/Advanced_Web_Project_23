package gcu.backend.crawlingservice.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "image")
public class Images {
    @Id
    private ObjectId _id;

    private List<String> imgurl;

    private String keyword;
}
