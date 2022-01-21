import React from "react";
import { Link } from "react-router-dom";

import './homePage.scss';

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ProductItem from "../../components/ProductItem/ProductItem";
import SpecialOfferItem from "../../components/SpecialOfferItem/SpecialOfferItem";
import LocationMap from "../../components/LocationMap/LocationMap";
import NewsArticleItem from "../../components/NewsArticleItem/NewsArticleItem";
import Footer from "../../components/Footer/Footer";

import RenderSection from "../../hoc/RenderSection/RenderSection";

function HomePage () {
    return (
        <div className="page page_home">
            <Header />
            <Banner />
            <main className="main">
                <RenderSection sectionTitle="Акции" sectionLink="#" sectionLinkText="Все акции">
                    {[1, 2, 3, 4].map((key, index) => (
                            <ProductItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Новинки" sectionLink="#" sectionLinkText="Все новинки">
                    {[1, 2, 3, 4].map((key, index) => (
                        <ProductItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Покупали раньше" sectionLink="#" sectionLinkText="Все покупки">
                    {[1, 2, 3, 4].map((key, index) => (
                        <ProductItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Специальные предложения">
                    {[1, 2].map((key, index) => (
                        <SpecialOfferItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Наши магазины" >
                    <LocationMap />
                </RenderSection>
                <RenderSection sectionTitle="Статьи" sectionLink="#" sectionLinkText="Все статьи">
                    {[1, 2, 3].map(( index) => (
                        <NewsArticleItem key={ index } />
                    ))}
                </RenderSection>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;
