# Vanilla-JS-libraries

ToDo

- https://github.com/jshjohnson/Choices (custom select)

Nice to use

- https://github.com/jashkenas/underscore (functional programming helpers)
- https://github.com/chmln/flatpickr (datapicker)
- https://github.com/dbushell/Pikaday (datapicker)
- https://github.com/moment/moment (parse, validate, manipulate, and display dates)
- https://github.com/eligrey/FileSaver.js (file loader)

Polyfills

- https://github.com/tonipinel/object-fit-polyfill (object-fit similar to background-size: cover|contain)

Code example

- [].forEach.call(NodeList, function(item){console.log(item)}) (use forEach for nodeList)
- [...NodeList].forEach() (if es6 compiler exist)
- NodeList.prototype.forEach = function (cb) {
      var length = this.length;
      for (var i = 0; i < length; i++) {
          cb && cb(this[i]);
      }
  }

Bundlers

https://github.com/vvasilik/Vanilla-JS-libraries/tree/master/Bundlers
