import { getIn, fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    // Convert the plain object to an Immutable Map
    const immutableObject = fromJS(object);

    // Use getIn to access the nested value at the given path
    return immutableObject.getIn(array);
}
