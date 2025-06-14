// import { createSlice, Toolkit.PayloadAction } from '@reduxjs/toolkit';
import * as Toolkit from '@reduxjs/toolkit';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactState {
  form: ContactForm;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ContactState = {
  form: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  isSubmitting: false,
  error: null,
  success: false,
};

const contactSlice = Toolkit.createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateForm: (state, action: Toolkit.PayloadAction<Partial<ContactForm>>) => {
      state.form = { ...state.form, ...action.payload };
    },
    setSubmitting: (state, action: Toolkit.PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setError: (state, action: Toolkit.PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSuccess: (state, action: Toolkit.PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    resetForm: (state) => {
      state.form = initialState.form;
      state.error = null;
      state.success = false;
    },
  },
});

export const { updateForm, setSubmitting, setError, setSuccess, resetForm } = contactSlice.actions;
export default contactSlice.reducer; 