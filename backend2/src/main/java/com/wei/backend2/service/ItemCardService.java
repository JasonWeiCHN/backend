package com.wei.backend2.service;

import com.wei.backend2.entity.ItemCard;
import com.wei.backend2.payload.request.AddItemCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ItemCardService {
    List<ItemCard> findAll();

    Page<ItemCard> findAllPaginated(Pageable pageable);

    ItemCard saveItemCard(AddItemCard addItemCard);

    void deleteItemCard(Long id);

    List<ItemCard> searchItemCards(String column, String keyword);
}
