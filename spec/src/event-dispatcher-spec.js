var chai = require('chai')
var spies = require('chai-spies');

chai.use(spies);

var expect = chai.expect;

var EventDispatcher = require("event-dispatcher");

describe("EventDispatcher", function() {
  var eventType = 'some-event';
  var dispatcher = null;

  beforeEach(function() {
    dispatcher = new EventDispatcher();
  });

  it("exists", function() {
    var dispatcher = new EventDispatcher();
    expect(dispatcher).to.be.ok;
  });

  describe(".trigger a given event", function() {
    var eventData = 'SomeData';
    var eventPayload = null;
    var responder = null;

    beforeEach(function() {
      var handleEvent = function(payload) { eventPayload = payload;}
      responder = { 
        handleEvent: handleEvent,
        handleEvent2: handleEvent,
        handleEvent3: handleEvent
      };
    });

    describe("given 1 handler registered for the given event", function(){
      beforeEach(function() {
        handler = chai.spy(responder.handleEvent);
        dispatcher.on(eventType, handler);
        dispatcher.trigger(eventType, eventData);
      });
      it("calls a handler registered for an event", function() {
        expect(handler).to.have.been.called.once;
      });
      it("calls a handler registered for an event with the event payload", function() {
        expect(handler).to.have.been.called.with(eventData);
      });
    })
    describe("given multiple handler registered for the given event", function(){
      beforeEach(function() {
        handler = chai.spy(responder.handleEvent);
        handler2 = chai.spy(responder.handleEvent2);
        handler3 = chai.spy(responder.handleEvent3);
        dispatcher.on(eventType, handler);
        dispatcher.on(eventType, handler2);
        dispatcher.on('ignored-event', handler3);
        dispatcher.trigger(eventType, eventData);
      });

      it("calls multiple handlers registered for an event", function() {
        expect(handler).to.have.been.called.once;
        expect(handler2).to.have.been.called.once;
      });

      it("does not call handlers that registered for a different event", function() {
        expect(handler).to.have.been.called();
        expect(handler2).to.have.been.called();
        expect(handler3).not.to.have.been.called();
      });
    })
  });
  describe(".on", function() {
    var badRegisteration = null;
    var goodRegisteration = null;
    beforeEach(function(){
      badHandlerFunction = 5;
      goodHandlerFunction = function(payload){var x = payload};
      badRegisteration = function(){ dispatcher.on(eventType, badHandlerFunction); }
      goodRegisteration = function(){ dispatcher.on(eventType, goodHandlerFunction); }
    })
    it("throws an exception if the handler is not a function", function(){
      expect(goodRegisteration).not.to.throw();
      expect(badRegisteration).to.throw();
    });
  });
});
