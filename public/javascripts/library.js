function format(str, ...args) {
  return str.split("%%").reduce((aggregate, chunck, i) => aggregate + chunck + (args[i] || ""), "");
}

String.prototype.format = function () {
  var formatted = this;

  for (var arg in arguments) {
    formatted = formatted.replace("{" + arg + "}", arguments[arg]);
  }

  return formatted;
};
