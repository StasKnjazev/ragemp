const EventEmitter = {
    _debug: false,
    _events: new Map(),
    _add(eventName, callback) {
      let eventList = [];
      if (this._events.has(eventName)) {
        eventList = this._events.get(eventName);
      }
      eventList.push(callback);
      this._events.set(eventName, eventList);
    },
    _remove(eventName, callback) {
      if (this._events.has(eventName)) {
        let eventList = [];
        if (callback !== undefined) {
          eventList = this._events.get(eventName);
          for (let i = 0; i < eventList.length; i++) {
            if (eventList[i] === callback) {
              eventList.splice(i, 1);
              break;
            }
          }
        }
        if (eventList.length) {
          this._events.set(eventName, eventList);
        } else {
          this._events.delete(eventName);
        }
      }
    },
    _call(eventName, args) {
      if (this._debug) {
        console.log(eventName, JSON.stringify(args));
      }
      if (this._events && this._events.has(eventName)) {
        this._events.get(eventName).forEach((callback) => {
          callback(...args);
        });
      }
    },
    _useSingle(type, eventName, callback) {
      if (typeof eventName === "string") {
        if (typeof callback === "function") {
          this[`_${type}`](eventName, callback);
        } else if (typeof callback === "object" && Array.isArray(callback)) {
          let callbacks = callback;
          if (callbacks.length) {
            if (callbacks.every((_callback) => typeof _callback === "function")) {
              callbacks.forEach((_callback) =>
                this[`_${type}`](eventName, _callback)
              );
            } else {
              throw new Error("Array of Callbacks must contain only functions");
            }
          } else {
            throw new Error("Array of callbacks must have at least 1 element");
          }
        } else {
          throw new Error('"callback" type must be a function or array');
        }
      } else {
        throw new Error('"eventName" type must be a string');
      }
    },
    _use(type, eventName, callback) {
      if (eventName !== undefined) {
        if (callback !== undefined) {
          this._useSingle(type, eventName, callback);
        } else if (typeof eventName === "object" && !Array.isArray(eventName)) {
          let eventNames = eventName;
          Object.entries(eventNames).forEach(([key, value]) => {
            this._useSingle(type, key, value);
          });
        } else if (
          typeof eventName === "object" &&
          Array.isArray(eventName) &&
          type === "remove"
        ) {
          let eventNames = eventName;
          if (eventNames.length) {
            if (
              eventNames.every((_eventName) => typeof _eventName === "string")
            ) {
              eventNames.forEach((_eventName) => this._remove(_eventName));
            } else {
              throw new Error("Array of eventNames must contain only strings");
            }
          } else {
            throw new Error("Array of eventNames must have at least 1 element");
          }
        } else if (typeof eventName === "string" && type === "remove") {
          this._remove(eventName);
        } else {
          let allowedTypes =
            type === "remove" ? "Object / Array / String" : "Object";
          throw new Error(
            `If you use this function only with 1 parameter, it must be ${allowedTypes}`
          );
        }
      } else {
        throw new Error(`This function must contain at least 1 parameter`);
      }
    },
    on(eventName, callback) {
      this._use("add", eventName, callback);
    },
    on(eventName, callback) {
      this._use("remove", eventName, callback);
    },
    emit(eventName, ...args) {
      this._call(eventName, args);
    },
  };
  
  export function createEventEmitter(debug = false) {
    return Object.assign({}, EventEmitter, {
      _events: new Map(),
      _debug: debug,
    });
  }
  
  export default EventEmitter;