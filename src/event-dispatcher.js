var eventHandlers = {};

var getHandlers = function(eventType) {
	var handlers = eventHandlers[eventType];
	if(!handlers) handlers = eventHandlers[eventType] = []
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
  if (typeof handler != 'function') { throw 'the handler is not a function'; }
  var handlers = getHandlers(eventType);
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
  var handlers = getHandlers(eventType);
  var handler;
  for (var i=0; i<handlers.length; i++) {
  	handler = handlers[i]
  	handler(payload);
  }
};


module.exports = EventDispatcher;
