import React, {FC, useCallback} from "react";
import { useNavigate } from "react-router-dom";

import { Food } from "../../domain/Food.domain";

import './productItem.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store/index.js";
import useAddToBasket from "../../hooks/useAddToBasket";
import {basketInitialState} from "../../store/types/basket";

interface IProductItem {
    product: Food
}

const ProductItem: FC<IProductItem> = React.memo(({ product, ...props }) => {
    const basket = useSelector<RootState, basketInitialState>(state => state.basket)
    const navigation = useNavigate();

    const addToBasket = useAddToBasket();

    const goToProduct = useCallback(() => {
        navigation(`/product?id=${product.id_food}`)
    }, [])

    const containsProductInBasket = useCallback(() => {
        return basket.products.some(({ id_food }) => id_food === product.id_food);
    },[basket.products, product.id_food])

    const addProductToBasket = useCallback((event: any) => {
        event.stopPropagation();
        addToBasket(product);
    }, [addToBasket, product])

    return (
        <div className="product" onClick={goToProduct} {...props}>
            <div className={`product__like ${false ? 'product__like_basket' : ''}`}>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.7046 2.25644C12.8299 1.13067 14.3564 0.498169 15.9482 0.498169C17.5399 0.498169 19.0664 1.13063 20.1916 2.25636C21.3174 3.38164 21.95 4.90829 21.95 6.49999C21.95 8.09174 21.3175 9.61826 20.1917 10.7435C20.1917 10.7436 20.1917 10.7435 20.1917 10.7435L11.3517 19.5835C11.1565 19.7788 10.8399 19.7788 10.6446 19.5835L1.80461 10.7435C-0.539037 8.3999 -0.539037 4.60009 1.80461 2.25644C4.14826 -0.0872086 7.94807 -0.0872087 10.2917 2.25644L10.9982 2.96289L11.7046 2.25644C11.7046 2.25641 11.7046 2.25647 11.7046 2.25644ZM15.9482 1.49817C14.6217 1.49817 13.3496 2.02528 12.4118 2.96346L11.3517 4.02355C11.258 4.11732 11.1308 4.16999 10.9982 4.16999C10.8656 4.16999 10.7384 4.11732 10.6446 4.02355L9.58461 2.96355C7.63149 1.01042 4.46484 1.01042 2.51172 2.96355C0.558594 4.91667 0.558594 8.08332 2.51172 10.0364L10.9982 18.5229L19.4846 10.0364C20.4228 9.09869 20.95 7.82648 20.95 6.49999C20.95 5.17351 20.4229 3.90138 19.4847 2.96363C18.5469 2.02544 17.2747 1.49817 15.9482 1.49817Z"
                          fill="#414141"/>
                </svg>
            </div>
            <div className="product__image">
                <img src={product.url} alt={product.name}/>
            </div>
            <div className="product__bottom">
                <div className="product__content">
                    <div className="content-price">
                        <p>{product.price} ₽</p>
                    </div>
                    <div className="content-info">
                        <p>
                            {product.name}
                        </p>
                    </div>
                </div>
                <div className="product__footer">
                    <div className="content-rating">
                        <div className="rating-star">
                            <img src="/images/productItem/star-set.svg" alt="star"/>
                        </div>
                        <div className="rating-star">
                            <img src="/images/productItem/star-set.svg" alt="star"/>
                        </div>
                        <div className="rating-star">
                            <img src="/images/productItem/star-set.svg" alt="star"/>
                        </div>
                        <div className="rating-star">
                            <img src="/images/productItem/star-set.svg" alt="star"/>
                        </div>
                        <div className="rating-star">
                            <img src="/images/productItem/star-unset.svg" alt="star"/>
                        </div>
                    </div>
                    <div className={`product__btn  ${containsProductInBasket() ? 'added' : ''}`}
                         onClick={addProductToBasket}>
                        <p>{ containsProductInBasket() ? 'Добавлено' : 'В корзину' }</p>
                    </div>
                </div>
            </div>
        </div>
    );

});

export default ProductItem;

