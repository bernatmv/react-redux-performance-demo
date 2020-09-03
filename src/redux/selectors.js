import { createSelector } from "@reduxjs/toolkit";

function identity(array) {
  return array.map(x => x);
}

export const appMessagesSelector = (state) => identity(state.app.messages);

const notMeaningfulSelector = (state) => state.app.notMeaningful;

export const notMemoizedNotMeaningfulSelector = (state) => identity(notMeaningfulSelector(state));

export const memoizedNotMeaningfulSelector = createSelector(notMeaningfulSelector, data => identity(data));