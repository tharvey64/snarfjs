// Turn this into a function with options for each type of matcher
module.exports = function(options){
    return {
        toBeAFunction: function(util, customEqualityTesters){
            return {
                compare: function(actual){
                    var result = {};
                    result.pass = typeof actual === "function";
                    if (!result.pass){
                        result.message = "Expected " + options.variable + " to be a function"
                    }
                    return result;
                },
            };//end of return
        },
        toBeAString: function(util, customEqualityTesters){
            return {
                compare: function(actual){
                    var result = {};
                    var actualConstructor = actual.constructor;
                    result.pass = actualConstructor === String;
                    if (!result.pass){
                        var typeOf = actualConstructor.name || actualConstructor.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];
                        result.message = "Expected " + actual.toString() + " to be a String. Found " + typeOf + " instead.";
                    }
                    return result;
                },
            };//end of return
        },
        toBeABoolean: function(util, customEqualityTesters){
            return {
                compare: function(actual){
                    var result = {};
                    var actualConstructor = actual.constructor;
                    result.pass = actualConstructor === Boolean;
                    if (!result.pass){
                        var typeOf = actualConstructor.name || actualConstructor.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];
                        result.message = "Expected " + actual.toString() + " to be a Boolean. Found " + typeOf + " instead.";
                    }
                    return result;
                },
            };//end of return
        },
        toBeANumber: function(util, customEqualityTesters){
            return {
                compare: function(actual){
                    var result = {};
                    var actualConstructor = actual.constructor;
                    result.pass = actualConstructor === Number;
                    if (!result.pass){
                        var typeOf = actualConstructor.name || actualConstructor.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];
                        result.message = "Expected " + actual.toString() + " to be a Number. Found " + typeOf + " instead.";
                    }
                    return result;
                },
            };//end of return
        },
        toBeAnArray: function(util, customEqualityTesters){
            return {
                compare: function(actual){
                    var result = {};
                    var actualConstructor = actual.constructor;
                    result.pass = actualConstructor === Array;
                    if (!result.pass){
                        var typeOf = actualConstructor.name || actualConstructor.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];
                        result.message = "Expected " + actual.toString() + " to be an Array. Found " + typeOf + " instead.";
                    }
                    return result;
                },
            };//end of return
        },
        toBeDefined: function(util, customEqualityTesters){
            return {
                compare: function(actual){
                    var result = {};
                    result.pass = void 0 !== actual;
                    if (!result.pass){
                        result.message = "Expected `" + options.variable + "` to be defined.";
                    }
                    return result;
                },
            };
        },
        toMatchString: function(util, customEqualityTesters){
            return {
                compare: function(actual, expected){
                    var result = {};
                    result.pass = expected === actual;
                    if (!result.pass){
                        result.message = "Expected Output:\n" + expected + "\nActual Output:\n" + actual;
                    }
                    return result;
                },
            };
        },
        toMatchArray: function(util, customEqualityTesters){
            return {
                compare: function(actual, expected){
                    var result = {};
                    result.pass = true;
                    if (expected.length != actual.length){
                        result.pass = false;
                    }
                    else{
                        for(var idx = expected.length; idx-- > 0;){
                            if(expected[idx] !== actual[idx]){
                                result.pass = false;
                                break;
                            }
                        }
                    }
                    if (!result.pass){
                        result.message = "Expected Array:\n[" + expected.toString() + "]\nActual Array:\n[" + actual.toString() + "]";
                    }
                    return result;
                },
            };
        },
        toReturnValue: function(util, customEqualityTesters){
            return {
                compare: function(actual, expected){
                    var result = {};
                    result.pass = expected.asymmetricMatch(actual);
                    if (!result.pass){
                        result.message = "Expected `" + options.variable + "` to return a value. Instead it returned `"+ actual + "`." ;
                    }
                    return result;
                },
            };
        },
        toOnlyContain: function(util, customEqualityTesters){
            return {
                compare: function(actual, expected){
                    var result = {};
                    result.pass = true;
                    if (actual.length < expected.length){
                        result.pass = false;
                    }
                    else {
                        for(var idx = actual.length; idx-- > 0;){
                            if(!util.contains(expected, actual[idx])){
                                result.pass = false;
                                break;
                            }
                        }
                    }
                    if (!result.pass){
                        result.message = "Expected `[" + actual + "]` to only contain `[" + expected + "]`." ;
                    }
                    return result;
                },
            };
        },
    };
};//end of module.exports