var registeredHandlers = {}

var handlersFor = function(eventType) {
  handlers = registeredHandlers[eventType];
  if(!handlers) handlers = registeredHandlers[eventType] = []
  return handlers;
}

function EventDispatcher() {
};

/* on(eventType, handerFunction)
 * Registers a handerFunction that will be called
 * whenever an event of evenType is triggered.
 *
 * When an event of eventType is triggered the
 * handlerFunction will be called with the event's payload:
 *   handlerFunction(payload) { ... }
 *
 * Example Usage:
 * dispatcher = new EventDispatcher()
 * changeColor = function(color){ document.body.style.color = color;}
 * dispatcher.on('highlight', changeColor)
 */
EventDispatcher.prototype.on = function(eventType, handler) {
  handlers = handlersFor(eventType);
  if('function' != typeof handler) throw("The given handler is not a function");
  handlers.push(handler);
};

/* trigger(eventType, payload)
 * Fires an event of type: eventType.
 *
 * Any handler that is registered for eventType will be invoked
 * with the payload
 *
 * Example Usage:
 * dispatcher = new EventDispatcher()
 * dispatcher.trigger('highlight', 'yellow')
 */
EventDispatcher.prototype.trigger = function(eventType, payload) {
  handlers = registeredHandlers[eventType];
  if(!handlers || 0 == handlers.length) return;
  for(var i=0; i<handlers.length; i++) {
    h = handlers[i];
    h(payload);
  }
};


module.exports = EventDispatcher;
