import {configureStore} from '@reduxjs/toolkit';

import modalSlice from './modal.slice';
import modal1Slice from './modal1.slice';
import modal2Slice from './modal2.slice';

export default configureStore({
  reducer: {
    modal: modalSlice,
    typesOfEvents: modal1Slice,
    makeEventFromService: modal2Slice,
  },
});