import { basketStates, orderStates } from './consts';

export type OrderStateTypes = (typeof orderStates)[keyof typeof orderStates];
export type BasketStateTypes = (typeof basketStates)[keyof typeof basketStates];
