export default class Action {
  constructor(type, payload = null) {
    // eslint-disable-next-line
    if (typeof type !== 'string') {
      throw new Error('Type must be a string');
    }

    if (type.trim().length === 0) {
      throw new Error('Please provide a valid type');
    }

    this.type = type;
    this.payload = payload;
  }
}
