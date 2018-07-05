/*! Built with http://stenciljs.com */
const { h } = window.App;

var OrderStatus;
(function (OrderStatus) {
    OrderStatus["open"] = "open";
    OrderStatus["filled"] = "filled";
    OrderStatus["cancelled"] = "cancelled";
    OrderStatus["closed"] = "closed";
    OrderStatus["failed"] = "failed";
})(OrderStatus || (OrderStatus = {}));

export { OrderStatus as a };
