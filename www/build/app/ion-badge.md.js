/*! Built with http://stenciljs.com */
const { h } = window.App;

class Badge {
    static get is() { return "ion-badge"; }
    static get host() { return {
        "theme": "badge"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-badge {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding: 3px 8px;\n  text-align: center;\n  display: inline-block;\n  min-width: 10px;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: baseline;\n  contain: content; }\n\nion-badge:empty {\n  display: none; }\n\n.badge-md {\n  border-radius: 4px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.badge-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.badge-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.badge-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.badge-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.badge-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.badge-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.badge-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.badge-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.badge-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}

export { Badge as IonBadge };
