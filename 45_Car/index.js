// function Create_Car(manufacturer, model, ...options){
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Create_Car(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var my_Car = Create_Car("Toyota", "Corrolla", { colour: "Black", year: "2024" });
console.log(my_Car);
