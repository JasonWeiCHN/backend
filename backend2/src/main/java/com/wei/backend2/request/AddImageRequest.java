package c wei.backend2.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AddImageRequest {
    private String name;
    private String category;
    private MultipartFile file;

    public AddImageRequest() {
        this.name = null;
        this.category = null;
        this.file = null;
    }

    public AddImageRequest(String name, String category, MultipartFile file) {
        this.name = name;
        this.category = category;
        this.file = file;
    }
}