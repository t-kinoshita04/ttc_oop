function setup() {
  createCanvas(200, 200);
}

class Asan {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveRight() {
    this.x++;
  }
}

class Bsan {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    // Bさんは1.5倍
    moveRight() {
      this.x += 1.5;
    }
  }

var x = 0;
var a_san = new Asan(50, 100);
var b_san = new Bsan(0, 100);

function draw() {
  // 道
  line(0, 100, 200, 100);
  // 駅
  ellipse(150, 100, 50, 50);
  // Bさん
  ellipse(b_san.x, b_san.y, 10, 10);
  b_san.moveRight();
  // Aさん
  ellipse(a_san.x, a_san.y, 10, 10);
  a_san.moveRight();
}