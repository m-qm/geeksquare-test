import { useAppSelector } from "../../hooks/useStore";

import ItemCard from "../../components/ItemCard";

import * as S from "./styles";

export default function Favorites() {
  const { items } = useAppSelector((state) => state.favorites);

  return (
    <>
      <S.PageTitle>Favorites</S.PageTitle>
      {items.length > 0 && (
        <S.MovieList>
          {items.map(({ id, title, image_url, description, category }) => {
            return (
              <li key={id}>
                <ItemCard
                  category={category}
                  id={id}
                  description={description}
                  title={title}
                  image_url={image_url}
                />
              </li>
            );
          })}
        </S.MovieList>
      )}
      {items.length === 0 && (
        <S.EmptyFavorite>You have no favorites yet.</S.EmptyFavorite>
      )}
    </>
  );
}
