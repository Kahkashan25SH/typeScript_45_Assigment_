function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I LOVE TYPESCRIPT"; }
    console.log("Make a ".concat(size, " shirt with the ").concat(message, " print on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I LOVE NEXT.JS");
