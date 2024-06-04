function describe_ciy(nameofcity, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    console.log("".concat(nameofcity, " is in ").concat(country));
}
describe_ciy("KARACHI");
describe_ciy("DEHLI", "INDIA");
describe_ciy("TORONTO", "CANADA");
