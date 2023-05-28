import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';

console.log(BASE_URL);
export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    const res = await axios(`${BASE_URL}/categories`);
    console.log(res);
    return res.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      console.log('1');
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      console.log('2');
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
      console.log('3');
    });
  },
});

export default categoriesSlice.reducer;
