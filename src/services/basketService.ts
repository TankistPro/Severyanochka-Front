import api from "../api/axios";
import {BasketServiceInterface} from "../interfaces/BasketService.interface";
import {AxiosResponse} from "axios";
import {BasketProduct} from "../domain/Basket.domain";

class basketService implements BasketServiceInterface {
    async getUserBasket(id_user: number): Promise<AxiosResponse> {
        return await api.get(`/product-apiV1/baskets/get-user-basket?id_user=${ id_user }`);
    }

    // FIXME: получать id_user на сервере через access_token
    async addProductToBasket(product: BasketProduct, id_user: number): Promise<AxiosResponse<boolean>> {
        const payload = {
            id_user,
            count: 1,
            id_food: product.id_food
        }
        return await api.post('/product-apiV1/baskets/add-product-basket', payload)
    }

    async removeProductFromBasket(id_food: number, id_user: number): Promise<AxiosResponse<boolean>> {
        const payload = {
            id_user,
            id_food
        }

        return await api.delete('/product-apiV1/baskets/remove-product-basket', {
            data: payload
        });
    }

    async updateBasketProduct(id_user: number, id_food: number, count: number): Promise<AxiosResponse> {
        return await api.patch('/product-apiV1/baskets/update-product-basket', {
            id_user,
            id_food,
            count
        })
    }
}

export default new basketService();
