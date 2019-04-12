// import { createSelector } from 'reselect';

export const getSelectedDay = ({ calendar: { selectedDay } }) => selectedDay || new Date();
