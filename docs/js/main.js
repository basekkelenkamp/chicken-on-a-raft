"use strict";
var Chicken = (function () {
    function Chicken(x, y, tree, g) {
        var _this = this;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.gameInstance = g;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.addEventListener("click", function (e) { return _this.onClick(e); });
    }
    Chicken.prototype.onClick = function (e) {
        this.gun = new Gun(this, this.gameInstance);
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y, g) {
        this.speed = 0;
        this.chickens = [];
        this.div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.gameInstance = g;
        var xKip = 0;
        for (var i = 0; i < 4; i++) {
            this.chickens.push(new Chicken(xKip, -70, this, this.gameInstance));
            xKip += 100;
        }
    }
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullets = [];
        for (var i = 0; i < 3; i++) {
            var x = Math.random() * innerWidth;
            var y = Math.random() * (innerHeight - 100);
            this.trees.push(new Tree(x, y, this));
            this.trees[i].move();
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var tree = _a[_i];
            tree.move();
        }
        for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
            var bullet = _c[_b];
            bullet.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addBullet = function (x, y) {
        this.bullets.push(new Bullet(x, y));
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken, g) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.gameInstance = g;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        this.gameInstance.addBullet(rect.left, rect.top);
    };
    return Gun;
}());
//# sourceMappingURL=main.js.map