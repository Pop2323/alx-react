import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => list(page1).concat(list(page2));

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));