// Generated CODE, PLEASE EDIT WITH CARE
"use strict";
var Bytes = require("../stdlib/bytes");
var Caml_string = require("../runtime/caml_string");

function escaped(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1; i<= i_finish; ++i){
    var c = s[i];
    var $js;
    var exit = 0;
    if (c >= 14) {
      if (c !== 34) {
        if (c !== 92) {
          exit = 1;
        }
        else {
          $js = 2;
        }
      }
      else {
        $js = 2;
      }
    }
    else {
      if (c >= 11) {
        if (c >= 13) {
          $js = 2;
        }
        else {
          exit = 1;
        }
      }
      else {
        if (c >= 8) {
          $js = 2;
        }
        else {
          exit = 1;
        }
      }
    }
    if (exit === 1) {
      $js = Caml_string.caml_is_printable(c) ? 1 : 4;
    }
    n += $js;
  }
  if (n === s.length) {
    return Bytes.copy(s);
  }
  else {
    var s$prime = Caml_string.caml_create_string(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1; i$1<= i_finish$1; ++i$1){
      var c$1 = s[i$1];
      var exit$1 = 0;
      var switcher = -34 + c$1;
      if (!(58 < (switcher >>> 0))) {
        if (56 < (-1 + switcher >>> 0)) {
          s$prime[n] = /* "\\" */92;
          ++ n;
          s$prime[n] = c$1;
        }
        else {
          exit$1 = 1;
        }
      }
      else {
        if (switcher >= -20) {
          exit$1 = 1;
        }
        else {
          switch (34 + switcher) {
            case 8 : 
                s$prime[n] = /* "\\" */92;
                ++ n;
                s$prime[n] = /* "b" */98;
                break;
            case 9 : 
                s$prime[n] = /* "\\" */92;
                ++ n;
                s$prime[n] = /* "t" */116;
                break;
            case 10 : 
                s$prime[n] = /* "\\" */92;
                ++ n;
                s$prime[n] = /* "n" */110;
                break;
            case 0 : 
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 11 : 
            case 12 : 
                exit$1 = 1;
                break;
            case 13 : 
                s$prime[n] = /* "\\" */92;
                ++ n;
                s$prime[n] = /* "r" */114;
                break;
            
          }
        }
      }
      if (exit$1 === 1) {
        if (Caml_string.caml_is_printable(c$1)) {
          s$prime[n] = c$1;
        }
        else {
          s$prime[n] = /* "\\" */92;
          ++ n;
          s$prime[n] = 48 + (c$1 / 100 | 0);
          ++ n;
          s$prime[n] = 48 + (c$1 / 10 | 0) % 10;
          ++ n;
          s$prime[n] = 48 + c$1 % 10;
        }
      }
      ++ n;
    }
    return s$prime;
  }
}

exports.escaped = escaped;
/* No side effect */
