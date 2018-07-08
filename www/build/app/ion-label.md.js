/*! Built with http://stenciljs.com */
const { h } = window.App;

class Label {
    getText() {
        return this.el.textContent || '';
    }
    componentDidLoad() {
        this.positionChanged();
    }
    positionChanged() {
        const position = this.position;
        return this.ionStyle.emit({
            [`label-${position}`]: !!position,
        });
    }
    hostData() {
        const position = this.position;
        return {
            class: {
                [`label-${position}`]: !!position,
                [`label-${this.mode}-${position}`]: !!position
            }
        };
    }
    static get is() { return "ion-label"; }
    static get host() { return {
        "theme": "label"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "getText": {
            "method": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "position": {
            "type": String,
            "attr": "position",
            "watchCallbacks": ["positionChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.item-input ion-label {\n  -webkit-box-flex: initial;\n  -ms-flex: initial;\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none; }\n\n[text-wrap] ion-label {\n  white-space: normal; }\n\n.label-fixed {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 100px;\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px; }\n\n.item-label-stacked ion-label,\n.item-label-floating ion-label {\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%; }\n\n.label-stacked,\n.label-floating {\n  margin-bottom: 0; }\n\n.item-label-stacked .input-wrapper,\n.item-label-floating .input-wrapper {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.item-label-stacked ion-select,\n.item-label-floating ion-select {\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  max-width: 100%; }\n\n.label-md {\n  margin: 13px 8px 13px 0;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\n[text-wrap] .label-md {\n  font-size: 14px;\n  line-height: 1.5; }\n\n.item-interactive .label-md {\n  color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999)); }\n\n.label-md-stacked {\n  font-size: 12px; }\n\n.label-md-floating {\n  -webkit-transform: translate3d(0,  27px,  0);\n  transform: translate3d(0,  27px,  0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out; }\n\n.label-md-stacked,\n.label-md-floating {\n  margin-left: 0;\n  margin-bottom: 0; }\n\n.item-input-has-focus .label-md-stacked,\n.item-input-has-focus .label-md-floating {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.item-input-has-focus .label-md-floating,\n.item-input-has-value .label-md-floating {\n  -webkit-transform: translate3d(0,  0,  0) scale(0.8);\n  transform: translate3d(0,  0,  0) scale(0.8); }\n\n.label-md-primary,\n.item-interactive .label-md-primary {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.label-md-secondary,\n.item-interactive .label-md-secondary {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.label-md-tertiary,\n.item-interactive .label-md-tertiary {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.label-md-success,\n.item-interactive .label-md-success {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.label-md-warning,\n.item-interactive .label-md-warning {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.label-md-danger,\n.item-interactive .label-md-danger {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.label-md-light,\n.item-interactive .label-md-light {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.label-md-medium,\n.item-interactive .label-md-medium {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.label-md-dark,\n.item-interactive .label-md-dark {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}

export { Label as IonLabel };
