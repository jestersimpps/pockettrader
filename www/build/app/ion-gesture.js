/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as assert, c as now } from './chunk-63df273d.js';

class PanRecognizer {
    constructor(direction, threshold, maxAngle) {
        this.dirty = false;
        this.isPan = 0;
        const radians = maxAngle * (Math.PI / 180);
        this.isDirX = direction === 'x';
        this.maxCosine = Math.cos(radians);
        this.threshold = threshold * threshold;
    }
    start(x, y) {
        this.startX = x;
        this.startY = y;
        this.isPan = 0;
        this.dirty = true;
    }
    detect(x, y) {
        if (!this.dirty) {
            return false;
        }
        const deltaX = (x - this.startX);
        const deltaY = (y - this.startY);
        const distance = deltaX * deltaX + deltaY * deltaY;
        if (distance < this.threshold) {
            return false;
        }
        const hypotenuse = Math.sqrt(distance);
        const cosine = ((this.isDirX) ? deltaX : deltaY) / hypotenuse;
        if (cosine > this.maxCosine) {
            this.isPan = 1;
        }
        else if (cosine < -this.maxCosine) {
            this.isPan = -1;
        }
        else {
            this.isPan = 0;
        }
        this.dirty = false;
        return true;
    }
    isGesture() {
        return this.isPan !== 0;
    }
    getDirection() {
        return this.isPan;
    }
}

const BLOCK_ALL = {
    disable: ['menu-swipe', 'goback-swipe'],
    disableScroll: true
};
class Gesture {
    constructor() {
        this.positions = [];
        this.lastTouch = 0;
        this.hasCapturedPan = false;
        this.hasStartedPan = false;
        this.hasFiredStart = true;
        this.isMoveQueued = false;
        this.disabled = false;
        this.attachTo = 'child';
        this.autoBlockAll = false;
        this.disableScroll = false;
        this.direction = 'x';
        this.gestureName = '';
        this.gesturePriority = 0;
        this.passive = true;
        this.maxAngle = 40;
        this.threshold = 10;
        this.detail = {
            type: 'pan',
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            event: undefined,
            data: undefined,
        };
    }
    async componentWillLoad() {
        if (this.isServer) {
            return;
        }
        this.gesture = await this.gestureCtrl.create({
            name: this.gestureName,
            priority: this.gesturePriority,
            disableScroll: this.disableScroll
        });
    }
    componentDidLoad() {
        if (this.isServer) {
            return;
        }
        // in this case, we already know the GestureController and Gesture are already
        // apart of the same bundle, so it's safe to load it this way
        // only create one instance of GestureController, and reuse the same one later
        this.pan = new PanRecognizer(this.direction, this.threshold, this.maxAngle);
        this.disabledChanged(this.disabled);
        if (this.autoBlockAll) {
            this.gestureCtrl.componentOnReady()
                .then(ctrl => ctrl.createBlocker(BLOCK_ALL))
                .then(blocker => this.blocker = blocker);
        }
    }
    componentDidUnload() {
        if (this.blocker) {
            this.blocker.destroy();
            this.blocker = undefined;
        }
        if (this.gesture) {
            this.gesture.destroy();
        }
    }
    disabledChanged(isDisabled) {
        this.enableListener(this, 'touchstart', !isDisabled, this.attachTo, this.passive);
        this.enableListener(this, 'mousedown', !isDisabled, this.attachTo, this.passive);
        if (isDisabled) {
            this.abortGesture();
        }
    }
    // DOWN *************************
    onTouchStart(ev) {
        this.lastTouch = now(ev);
        if (this.pointerDown(ev, this.lastTouch)) {
            this.enableMouse(false);
            this.enableTouch(true);
        }
        else {
            this.abortGesture();
        }
    }
    onMouseDown(ev) {
        const timeStamp = now(ev);
        if (this.lastTouch === 0 || (this.lastTouch + MOUSE_WAIT < timeStamp)) {
            if (this.pointerDown(ev, timeStamp)) {
                this.enableMouse(true);
                this.enableTouch(false);
            }
            else {
                this.abortGesture();
            }
        }
    }
    pointerDown(ev, timeStamp) {
        if (!this.gesture || this.hasStartedPan || !this.hasFiredStart) {
            return false;
        }
        const detail = this.detail;
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        this.positions.length = 0;
        assert(this.hasFiredStart, 'fired start must be false');
        assert(!this.hasStartedPan, 'pan can be started at this point');
        assert(!this.hasCapturedPan, 'pan can be started at this point');
        assert(!this.isMoveQueued, 'some move is still queued');
        assert(this.positions.length === 0, 'positions must be emprty');
        // Check if gesture can start
        if (this.canStart && this.canStart(detail) === false) {
            return false;
        }
        // Release fallback
        this.gesture.release();
        // Start gesture
        if (!this.gesture.start()) {
            return false;
        }
        this.positions.push(detail.currentX, detail.currentY, timeStamp);
        this.hasStartedPan = true;
        if (this.threshold === 0) {
            return this.tryToCapturePan();
        }
        this.pan.start(detail.startX, detail.startY);
        return true;
    }
    // MOVE *************************
    onTouchMove(ev) {
        this.lastTouch = this.detail.timeStamp = now(ev);
        this.pointerMove(ev);
    }
    onMoveMove(ev) {
        const timeStamp = now(ev);
        if (this.lastTouch === 0 || (this.lastTouch + MOUSE_WAIT < timeStamp)) {
            this.detail.timeStamp = timeStamp;
            this.pointerMove(ev);
        }
    }
    pointerMove(ev) {
        // fast path, if gesture is currently captured
        // do minimun job to get user-land even dispatched
        if (this.hasCapturedPan) {
            if (!this.isMoveQueued && this.hasFiredStart) {
                this.isMoveQueued = true;
                this.calcGestureData(ev);
                this.queue.write(this.fireOnMove.bind(this));
            }
            return;
        }
        // gesture is currently being detected
        const detail = this.detail;
        this.calcGestureData(ev);
        if (this.pan.detect(detail.currentX, detail.currentY)) {
            if (this.pan.isGesture()) {
                if (!this.tryToCapturePan()) {
                    this.abortGesture();
                }
            }
        }
    }
    fireOnMove() {
        // Since fireOnMove is called inside a RAF, onEnd() might be called,
        // we must double check hasCapturedPan
        if (!this.hasCapturedPan) {
            return;
        }
        const detail = this.detail;
        this.isMoveQueued = false;
        if (this.onMove) {
            this.onMove(detail);
        }
    }
    calcGestureData(ev) {
        const detail = this.detail;
        updateDetail(ev, detail);
        const currentX = detail.currentX;
        const currentY = detail.currentY;
        const timestamp = detail.timeStamp;
        detail.deltaX = currentX - detail.startX;
        detail.deltaY = currentY - detail.startY;
        detail.event = ev;
        const timeRange = timestamp - 100;
        const positions = this.positions;
        let startPos = positions.length - 1;
        // move pointer to position measured 100ms ago
        while (startPos > 0 && positions[startPos] > timeRange) {
            startPos -= 3;
        }
        if (startPos > 1) {
            // compute relative movement between these two points
            const frequency = 1 / (positions[startPos] - timestamp);
            const movedY = positions[startPos - 1] - currentY;
            const movedX = positions[startPos - 2] - currentX;
            // based on XXms compute the movement to apply for each render step
            // velocity = space/time = s*(1/t) = s*frequency
            detail.velocityX = movedX * frequency;
            detail.velocityY = movedY * frequency;
        }
        else {
            detail.velocityX = 0;
            detail.velocityY = 0;
        }
        positions.push(currentX, currentY, timestamp);
    }
    tryToCapturePan() {
        if (this.gesture && !this.gesture.capture()) {
            return false;
        }
        this.hasCapturedPan = true;
        this.hasFiredStart = false;
        // reset start position since the real user-land event starts here
        // If the pan detector threshold is big, not reseting the start position
        // will cause a jump in the animation equal to the detector threshold.
        // the array of positions used to calculate the gesture velocity does not
        // need to be cleaned, more points in the positions array always results in a
        // more acurate value of the velocity.
        const detail = this.detail;
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp;
        if (this.onWillStart) {
            this.onWillStart(this.detail).then(this.fireOnStart.bind(this));
        }
        else {
            this.fireOnStart();
        }
        return true;
    }
    fireOnStart() {
        assert(!this.hasFiredStart, 'has fired must be false');
        if (this.onStart) {
            this.onStart(this.detail);
        }
        this.hasFiredStart = true;
    }
    abortGesture() {
        this.reset();
        this.enable(false);
        if (this.notCaptured) {
            this.notCaptured(this.detail);
        }
    }
    reset() {
        this.hasCapturedPan = false;
        this.hasStartedPan = false;
        this.isMoveQueued = false;
        this.hasFiredStart = true;
        if (this.gesture) {
            this.gesture.release();
        }
    }
    // END *************************
    onTouchCancel(ev) {
        this.lastTouch = this.detail.timeStamp = now(ev);
        this.pointerUp(ev);
        this.enableTouch(false);
    }
    onMouseUp(ev) {
        const timeStamp = now(ev);
        if (this.lastTouch === 0 || (this.lastTouch + MOUSE_WAIT < timeStamp)) {
            this.detail.timeStamp = timeStamp;
            this.pointerUp(ev);
            this.enableMouse(false);
        }
    }
    pointerUp(ev) {
        const hasCaptured = this.hasCapturedPan;
        const hasFiredStart = this.hasFiredStart;
        this.reset();
        if (!hasFiredStart) {
            return;
        }
        const detail = this.detail;
        this.calcGestureData(ev);
        // Try to capture press
        if (hasCaptured) {
            if (this.onEnd) {
                this.onEnd(detail);
            }
            return;
        }
        // Not captured any event
        if (this.notCaptured) {
            this.notCaptured(detail);
        }
    }
    // ENABLE LISTENERS *************************
    enableMouse(shouldEnable) {
        this.enableListener(this, 'document:mousemove', shouldEnable, undefined, this.passive);
        this.enableListener(this, 'document:mouseup', shouldEnable, undefined, this.passive);
    }
    enableTouch(shouldEnable) {
        this.enableListener(this, 'touchmove', shouldEnable, this.attachTo, this.passive);
        this.enableListener(this, 'touchcancel', shouldEnable, this.attachTo, this.passive);
        this.enableListener(this, 'touchend', shouldEnable, this.attachTo, this.passive);
    }
    enable(shouldEnable) {
        this.enableMouse(shouldEnable);
        this.enableTouch(shouldEnable);
    }
    static get is() { return "ion-gesture"; }
    static get properties() { return {
        "attachTo": {
            "type": String,
            "attr": "attach-to"
        },
        "autoBlockAll": {
            "type": Boolean,
            "attr": "auto-block-all"
        },
        "canStart": {
            "type": "Any",
            "attr": "can-start"
        },
        "direction": {
            "type": String,
            "attr": "direction"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "disableScroll": {
            "type": Boolean,
            "attr": "disable-scroll"
        },
        "enableListener": {
            "context": "enableListener"
        },
        "gestureCtrl": {
            "connect": "ion-gesture-controller"
        },
        "gestureName": {
            "type": String,
            "attr": "gesture-name"
        },
        "gesturePriority": {
            "type": Number,
            "attr": "gesture-priority"
        },
        "isServer": {
            "context": "isServer"
        },
        "maxAngle": {
            "type": Number,
            "attr": "max-angle"
        },
        "notCaptured": {
            "type": "Any",
            "attr": "not-captured"
        },
        "onEnd": {
            "type": "Any",
            "attr": "on-end"
        },
        "onMove": {
            "type": "Any",
            "attr": "on-move"
        },
        "onStart": {
            "type": "Any",
            "attr": "on-start"
        },
        "onWillStart": {
            "type": "Any",
            "attr": "on-will-start"
        },
        "passive": {
            "type": Boolean,
            "attr": "passive"
        },
        "queue": {
            "context": "queue"
        },
        "threshold": {
            "type": Number,
            "attr": "threshold"
        }
    }; }
    static get listeners() { return [{
            "name": "touchstart",
            "method": "onTouchStart",
            "disabled": true,
            "passive": true
        }, {
            "name": "mousedown",
            "method": "onMouseDown",
            "disabled": true,
            "passive": true
        }, {
            "name": "touchmove",
            "method": "onTouchMove",
            "disabled": true,
            "passive": true
        }, {
            "name": "document:mousemove",
            "method": "onMoveMove",
            "disabled": true,
            "passive": true
        }, {
            "name": "touchcancel",
            "method": "onTouchCancel",
            "disabled": true,
            "passive": true
        }, {
            "name": "touchend",
            "method": "onTouchCancel",
            "disabled": true,
            "passive": true
        }, {
            "name": "document:mouseup",
            "method": "onMouseUp",
            "disabled": true,
            "passive": true
        }]; }
}
const MOUSE_WAIT = 2500;
function updateDetail(ev, detail) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    let x = 0;
    let y = 0;
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
}

class GestureDelegate {
    constructor(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        const captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = undefined;
    }
}
class BlockerDelegate {
    constructor(id, ctrl, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    block() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    }
    unblock() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    }
    destroy() {
        this.unblock();
        this.ctrl = undefined;
    }
}

class GestureController {
    constructor() {
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
        this.capturedId = null;
    }
    create(config) {
        return Promise.resolve(new GestureDelegate(this, this.newID(), config.name, config.priority ? config.priority : 0, !!config.disableScroll));
    }
    createBlocker(opts = {}) {
        return new BlockerDelegate(this.newID(), this, opts.disable, !!opts.disableScroll);
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        const requestedStart = this.requestedStart;
        let maxPriority = -10000;
        requestedStart.forEach(value => {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            this.ionGestureCaptured && this.ionGestureCaptured.emit(gestureName);
            return true;
        }
        requestedStart.delete(id);
        return false;
    }
    release(id) {
        this.requestedStart.delete(id);
        if (this.capturedId && id === this.capturedId) {
            this.capturedId = null;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures.get(gestureName);
        if (!set) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        const set = this.disabledGestures.get(gestureName);
        if (set) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        this.disabledScroll.add(id);
    }
    enableScroll(id) {
        this.disabledScroll.delete(id);
    }
    canStart(gestureName) {
        if (this.capturedId) {
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return !!this.capturedId;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        const disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
    newID() {
        this.gestureId++;
        return this.gestureId;
    }
    static get is() { return "ion-gesture-controller"; }
    static get properties() { return {
        "create": {
            "method": true
        },
        "createBlocker": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "ionGestureCaptured",
            "method": "ionGestureCaptured",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}

export { Gesture as IonGesture, GestureController as IonGestureController };
