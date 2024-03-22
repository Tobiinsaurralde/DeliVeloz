import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import Cards from "../../components/cards/Cards.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";

export default function Products() {
  const dishes = useSelector((state) => state.dishes);
  const filteredDishes = useSelector((state) => state.filteredDishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDishes());
  }, [dispatch]);

  console.log("Estos son los filtros:", dishes);
  // console.log("Estos son los filtros:", filteredDishes);

  // ? -------------------------------- Paginate

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts =
    filteredDishes.length >= 1
      ? filteredDishes.slice(firstPostIndex, lastPostIndex)
      : dishes.slice(firstPostIndex, lastPostIndex);

  return (
    <section className="container">
      <Filters setCurrentPage={setCurrentPage} />
      <Cards dishes={currentPosts} />
      <Pagination
        totalPosts={
          filteredDishes.length >= 1 ? filteredDishes.length : dishes.length
        }
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
