import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

export const getProducts = createAsyncThunk("products/getProducts", fetchProducts);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchQuery: "",
    status: "idle",
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
