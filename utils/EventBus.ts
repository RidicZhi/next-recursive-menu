export default class EventBus {
  private static instance: EventBus | null = null;
  private eventListeners: { [key: string]: Array<Function> } = {};

  static getInstance(): EventBus {
    if (EventBus.instance === null) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  private constructor() {
    if (EventBus.instance !== null) {
      return EventBus.instance;
    }
    EventBus.instance = this;
    this.eventListeners = {};
  }

  fireEvent(eventName: string, data?: any): void {
    const listeners = this.eventListeners[eventName];
    if (Array.isArray(listeners)) {
      listeners.forEach((listener) => {
        if (typeof listener === 'function') {
          listener(data);
        }
      });
    }
  }

  addListener(eventName: string, listener: Function): void {
    const listeners = this.eventListeners[eventName];
    if (Array.isArray(listeners)) {
      listeners.push(listener);
    } else {
      this.eventListeners[eventName] = [listener];
    }
  }

  removeListener(listener: Function): void {
    Object.keys(this.eventListeners).forEach((eventName) => {
      const listeners = this.eventListeners[eventName];
      this._remove(listeners, listener);
      if (listeners.length === 0) {
        delete this.eventListeners[eventName];
      }
    });
  }

  private _remove(array: Array<Function> | undefined, item: Function): void {
    if (!array) return;
    for (let i = 0, l = array.length; i < l; i++) {
      if (item === array[i]) array.splice(i, 1);
    }
  }
}
