import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './contacts/filtersSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
export const persistor = persistStore(store);

