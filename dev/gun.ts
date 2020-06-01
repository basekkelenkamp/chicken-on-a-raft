/// <reference path="chicken.ts"/>

class Gun {
    
    public div: HTMLElement
    private x:number
    private y:number
    private gameInstance:Game

    constructor(chicken:Chicken, g: Game) {
        this.div = document.createElement("gun")
        chicken.div.appendChild(this.div)

        this.x = 20
        this.y = 40

        this.gameInstance = g
        
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)"

        this.fire()
    }

    public fire():void {
        // de globale positie van de gun kan je uitrekenen met getBoundingRect
        let rect:ClientRect = this.div.getBoundingClientRect()
        console.log("plaats een kogel op " + rect.left + " , " + rect.top)
        
        // maak hier een bullet en voeg die toe aan de bullets array van de game (niet van de gun!)
        this.gameInstance.addBullet(rect.left,rect.top)
    }

}