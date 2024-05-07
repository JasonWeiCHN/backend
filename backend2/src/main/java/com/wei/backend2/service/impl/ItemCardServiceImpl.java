package com.wei.backend2.service.impl;
import com.wei.backend2.entity.ItemCard;
import com.wei.backend2.payload.request.AddItemCard;
import com.wei.backend2.repositories.ItemCardRepository;
import com.wei.backend2.repositories.ItemCardSpecifications;
import com.wei.backend2.service.ItemCardService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class ItemCardServiceImpl implements ItemCardService {
    private final ItemCardRepository itemCardRepository;

    @Override
    public List<ItemCard> findAll() {
        return itemCardRepository.findAll();
    }

    @Override
    public Page<ItemCard> findAllPaginated(Pageable pageable) {
        return itemCardRepository.findAll(pageable);
    }

    @Override
    public ItemCard saveItemCard(AddItemCard addItemCard) {
        ItemCard itemCard = new ItemCard();
        BeanUtils.copyProperties(addItemCard, itemCard);
        return itemCardRepository.save(itemCard);
    }

    @Override
    public void deleteItemCard(Long id) {
        itemCardRepository.deleteById(id);
    }

    @Override
    public List<ItemCard> searchItemCards(String column, String keyword) {
        Specification<ItemCard> spec = ItemCardSpecifications.containsTextInColumn(column, keyword);
        return itemCardRepository.findAll(spec);
    }
}
