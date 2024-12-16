import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setSearchQuery } from "../features/products/productsSlice";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const { products, searchQuery, status } = useSelector((state) => state.products);

  const [sortType, setSortType] = useState("price"); 
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; 

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price") return a.price - b.price;
      if (sortType === "rating") return b.rating.rate - a.rating.rate;
      return 0;
    });

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleSearchChange = (query) => {
    dispatch(setSearchQuery(query));
    setCurrentPage(0); 
  };

  return (
    <div className="bg-base-200 min-h-screen">
      
      <Navbar onSearch={handleSearchChange} />
      <div className="p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Product Catalog</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="text-lg font-medium mr-2">Sort By:</label>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="select select-bordered"
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <p className="text-lg">
            Showing {displayedProducts.length} of {filteredProducts.length} products
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center mt-6 space-x-2"
          pageClassName="btn btn-sm"
          activeClassName="btn-primary"
          previousClassName="btn btn-sm"
          nextClassName="btn btn-sm"
          disabledClassName="btn-disabled"
        />
      </div>
    </div>
  );
};

export default Home;
