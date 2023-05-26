package gcu.backend.askingservice.model;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class JsonResponse {
    private Map<String, Map<String, Object>> jsons;
}
