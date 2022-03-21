/* eslint-disable prettier/prettier */
import axios from '../../api';
import { busConstants } from './constants';

export const getAllBus = () => {
    return async dispatch => {
        dispatch({ type: busConstants.BUS_REQUEST });
        try {
            const res = await axios.get('/bus');
            if (res.status === 200) {
                const { data } = res.data;
                dispatch({
                    type: busConstants.BUS_SUCCESS,
                    payload: data,
                });
            }

        } catch (error) {
            dispatch({ type: busConstants.BUS_FAILURE, payload: error.message });

        }
    };
};

