/// <reference path="tree.ts"/>

class Chicken {
    
    public div: HTMLElement
    private x:number
    private y:number
    private width:number
    private height:number

    private gameInstance : Game
    private gun : Gun

    constructor(x:number, y:number, tree:Tree, g:Game) {
        this.div = document.createElement("bird")
        tree.div.appendChild(this.div)
        
        this.x = x
        this.y = y
        this.width = 67
        this.height = 110

        this.gameInstance = g
        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        // maak hier een click listener
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e))
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
    }

    onClick(e:MouseEvent){
        this.gun = new Gun(this,this.gameInstance)
    }

}