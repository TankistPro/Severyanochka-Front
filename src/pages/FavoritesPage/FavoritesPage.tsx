import React from 'react'
import { useSelector } from 'react-redux'
import { Filter } from '../../components/Filter/Filter'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Food } from '../../domain/Food.domain'
import { RootState } from '../../store/index.js'

import './favoritesPage.scss'

export const FavoritesPage = () => {
    const products = useSelector<RootState, Food[]>(state => state.products.products);
    
  return (
    <div className='page favorites-page'>
        <main className='main'>
            <h1>Избраное</h1>

            <div className="favorites-page__body">
                <div className="favorites-body__left">
                    <Filter />
                </div>
                <div className="favorites-body__right">
                    {products.map((item, index) => (
                            <ProductItem key={index} product={item} />
                    ))}
                </div>
            </div>
        </main>
    </div>
  )
}
