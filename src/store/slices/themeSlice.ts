import * as Toolkit from '@reduxjs/toolkit';


interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

const themeSlice = Toolkit.createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      document.documentElement.classList.toggle('dark', state.isDarkMode);
    },
    setTheme: (state, action: Toolkit.PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      document.documentElement.classList.toggle('dark', state.isDarkMode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer; 