import { useState, useEffect } from "react";

import Logo from "../../assets/images/logo.png";

import { Item } from "../../common/types";
import data from "../../data/movieService";

import Card from "../../components/shimmer/Card";
import ItemCard from "../../components/ItemCard";

import * as S from "./styles";
import Favorites from "../Favorites";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);

  const getItems = () => {
    const parseData = data.categories
      .map((category: any) => {
        return {
          ...category,
          items: category?.items.map((item: Item) => {
            return {
              ...item,
              image_url: item.image_url,
            };
          }),
        };
      })
      .flat();
    setItems(parseData);
    setIsLoading(false);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <S.Header>
        <nav>
          <img src={Logo} alt="logo" />
        </nav>
      </S.Header>
      <S.Home>
        {isLoading ? (
          <S.MovieList>
            <Card />
            <Card />
            <Card />
            <Card />
          </S.MovieList>
        ) : (
          <>
            <Favorites />
            <>
              {items.map((category: any) => {
                return (
                  <div key={category.title}>
                    <S.PageTitle>{category.title}</S.PageTitle>
                    <S.MovieList>
                      {category.items.map((item: Item) => {
                        return (
                          <li key={item.id}>
                            <ItemCard
                              key={item.id}
                              category={category.title}
                              id={item.id}
                              description={item.description}
                              title={item.title}
                              image_url={item.image_url}
                            />
                          </li>
                        );
                      })}
                    </S.MovieList>
                  </div>
                );
              })}
            </>
          </>
        )}
      </S.Home>
    </>
  );
}
