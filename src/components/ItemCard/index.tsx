import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

import { Item } from "../../common/types";

import {
  addFavorite,
  removeFavorite,
} from "../../store/reducers/favoriteSlice";

import * as S from "./styles";

export default function ItemCard(itemData: Item) {
  const { items } = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const isFavoriteMovie = items.find((movie) => movie.id === itemData.id);
    return !!isFavoriteMovie;
  });

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(itemData.id));
      setIsFavorite((prevState) => !prevState);
    } else {
      dispatch(addFavorite(itemData));
      setIsFavorite((prevState) => !prevState);
    }
  };

  return (
    <S.Container>
      <img src={itemData.image_url} alt={itemData.title} />
      <div>
        <S.Link to={`/movie/${itemData.id}`}>{itemData.title}</S.Link>
        <S.Description>{itemData.description}</S.Description>
        <S.DescriptionCategory>{itemData.category}</S.DescriptionCategory>

        <S.Favorite aria-label="toggle favorite">
          {isFavorite ? (
            <S.FavoriteSelectedButton onClick={toggleFavorite}>
              Remove from Favorite{" "}
            </S.FavoriteSelectedButton>
          ) : (
            <S.FavoriteButton onClick={toggleFavorite}>
              Favoritos
            </S.FavoriteButton>
          )}
        </S.Favorite>
      </div>
    </S.Container>
  );
}
