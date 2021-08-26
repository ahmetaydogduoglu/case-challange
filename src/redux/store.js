import { configureStore } from '@reduxjs/toolkit'

import links from './links/reducer';
import layout from './layout/reducer';

export default configureStore({
  reducer: {
    layout,
    links
  }
});