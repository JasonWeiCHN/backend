package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddWarhammerClassifier {
    private String id;
    private String directory;
    private String nameCN;
}
