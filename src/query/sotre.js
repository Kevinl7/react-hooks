import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';
import { h0 } from '../common/fp';
import { ORDER_DEPART } from './constant';

export default createStore(
  combineReducers(reducers),
  {
    form: null,
    to: null,
    departDate: h0(Date.now()),
    highSpeed: false,
    trainList: [],
    orderType: ORDER_DEPART,
    onlyTickets: false,
    ticketTypes: [],
    checkedTrainTypes: {},
    departStations: [],
    checkedDepartStations: {},
    arriveStations: [],
    checkedArriveStations: {},
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    isFilterVisible: false,
    searchParsed: false,
  },
  applyMiddleware(thunk)
);
