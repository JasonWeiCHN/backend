package com.wei.backend2.service;

import com.wei.backend2.entity.ItemCard;
import com.wei.backend2.payload.request.AddItemCard;

import java.util.List;

public interface ItemCardService {
    List<ItemCard> findAll();

    ItemCard saveItemCard(AddItemCard addItemCard);
}
