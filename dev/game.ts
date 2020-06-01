/// <reference path="tree.ts"/>

class Game {
    
    private trees:Tree[] = []
    public bullets:Bullet[] = []
 
    constructor() {
        // de game heeft trees nodig
        for (let i = 0; i < 3; i++) {
            let x = Math.random() * innerWidth
            let y = Math.random() * (innerHeight - 100)
            this.trees.push(new Tree(x,y,this))
            this.trees[i].move()
        }


        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen

        for (const tree of this.trees) {
            tree.move()
        }

        for (const bullet of this.bullets) {
            bullet.move()
        }
        
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }

    addBullet(x:number,y:number){
        this.bullets.push(new Bullet(x,y))
    }
} 

window.addEventListener("load", () => new Game())