import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  id: string;
  title: string;
  desc: string;
  price: number;
  discount: number;
  author: string;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: JSON.parse(localStorage.getItem('books') || '[]'),
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      state.books = state.books.map(book => 
        book.id === action.payload.id ? action.payload : book
      );
      localStorage.setItem('books', JSON.stringify(state.books));
    }
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
