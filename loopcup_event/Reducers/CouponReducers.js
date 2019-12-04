import { combineReducers } from 'redux';

const INITIAL_STATE = {
    couponCheck: [],
    url: 'http://40.68.90.134/', // or localhost:5000
    couponList: [],
    cupCode: undefined,
    triggerPopUpCup: false,
    binCode: undefined,
    triggerPopUpBin: false,
};

const couponReducer = (state = INITIAL_STATE, action) => {
    let ret;
    switch (action.type) {
        case 'SET_COUPON_CHECK':
            ret = Object.assign({}, state, { couponCheck: action.couponCheck });
            return ret;
        case 'SET_COUPON_LIST':
            ret = Object.assign({}, state, { couponList: action.couponList });
            return ret;
        case 'SET_CUP_CODE':
            console.log(action);
            ret = Object.assign({}, state, { cupCode: action.cupCode });
            return ret;
        case 'RESET_CUP_CODE':
            ret = Object.assign({}, state, { cupCode: undefined });
            return ret;
        case 'SET_TRIGGER_CUP':
            console.log(action);
            ret = Object.assign({}, state, { triggerPopUpCup: true });
            return ret;
        case 'RESET_TRIGGER_CUP':
            ret = Object.assign({}, state, { triggerPopUpCup: false });
            return ret;
        case 'SET_BIN_CODE':
            console.log(action);
            ret = Object.assign({}, state, { binCode: action.binCode });
            return ret;
        case 'RESET_BIN_CODE':
            ret = Object.assign({}, state, { binCode: undefined });
            return ret;
        case 'SET_TRIGGER_BIN':
            console.log(action);
            ret = Object.assign({}, state, { triggerPopUpBin: true });
            return ret;
        case 'RESET_TRIGGER_BIN':
            ret = Object.assign({}, state, { triggerPopUpBin: false });
            return ret; 
        default:
            return state
    }
};

export default combineReducers({
    bin: couponReducer,
});