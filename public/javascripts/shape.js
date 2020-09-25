var Point = {
  x: 100,
  y: 100,
  radius: 10,
  color: "orange",
  draw: function (context) {
    context.beginPath();

    context.strokeStyle = this.color;

    context.lineWidth = 2;

    context.arc(this.x, this.y, this.radius, 0, 360, false);

    context.stroke();
  },
};

function Circle(x, y, radius, color) {
  this.x = x;

  this.y = y;

  this.radius = radius;

  this.color = color;

  Circle.prototype.draw = function (context, angle) {
    context.beginPath();

    context.strokeStyle = this.color;

    context.arc(x, y, this.radius, (Math.PI / 180) * angle, (Math.PI / 180) * 360, false);

    context.closePath();

    context.stroke();
  };
}

// Encapsulation
// Inheritance
function Rectangle(x, y, width, height, color) {
  this.x = x;

  this.y = y;

  var _width = width;

  this.getWidth = function () {
    return x;
  };

  this.setWidth = function (width) {
    if (width > 0) {
      _width = width;
    } else {
      throw "Negative value entered.";
    }
  };

  var _height = height;

  this.getHeight = function () {
    return y;
  };

  this.setHeight = function (height) {
    if (height > 0) {
      _height = height;
    } else {
      throw "Negative value entered.";
    }
  };

  this.color = color;

  Rectangle.prototype.draw = function (context, isFill) {
    if (isFill) {
      context.fillStyle = this.color;

      context.fillRect(this.x, this.y, _width, _height);
    } else {
      context.strokeStyle = this.color;

      context.strokeRect(this.x, this.y, _width, _height);
    }
  };
}

function Squre(x, y, size, color) {
  this.base = Rectangle;

  this.base(x, y, size, size, color);

  Squre.prototype = Rectangle.prototype;

  Squre.prototype.constructor = Rectangle;
}

function BarGraph(x, y, width, height, color) {
  this.x = x;

  this.y = y;

  this.width = width;

  this.height = height;

  this.color = color;

  BarGraph.prototype.draw = function (context, value) {
    context.clearRect(this.x, this.y, this.width, this.height);

    //context.beginPath();

    context.strokeStyle = this.color;

    context.strokeRect(this.x, this.y, this.width, this.height);

    context.fillStyle = this.color;

    context.fillRect(this.x, this.y, this.width, value);

    //===================================================================
    context.font = "24px sans-serif";

    context.fillStyle = "white";

    context.textAlign = "center";

    context.textBaseline = "center";

    var result = "{0}{1}".format(parseInt(value), "mm");

    context.fillText(result, this.x + this.width / 2, this.y + this.height / 2);

    //context.closePath();
  };
}

function LineGraph(x, y, width, height, color) {
  this.x = x;

  this.y = y;

  this.width = width;

  this.height = height;

  this.color = color;

  var points = new Array();

  var yOffset = 0;

  var xScale = 4;

  var max = width / xScale;

  var lineWidth = 1;

  this.getLineWidth = function () {
    return lineWidth;
  };

  this.setLineWidth = function (arg) {
    if (arg > 0) {
      lineWidth = arg;
    } else {
      throw "Negative value entered.";
    }
  };

  LineGraph.prototype.add = function (value) {
    if (points.length <= max) {
      points.push([points.length, value]);
    } else {
      points.shift();

      points.push([points.length, value]);
    }
  };

  LineGraph.prototype.draw = function (context) {
    context.clearRect(this.x, this.y, this.width, this.height);

    context.strokeStyle = this.color;

    context.lineWidth = lineWidth;

    context.beginPath();

    for (var i = 0; i < points.length - 1; i++) {
      context.moveTo(i * xScale, points[i][1] + yOffset);

      context.lineTo((i + 1) * xScale, points[i + 1][1] + yOffset);

      context.stroke();
    }

    context.closePath();
  };
}
