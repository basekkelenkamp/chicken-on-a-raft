# Een kip op een vlot

![Chickens](docs/images/fireatwill.png?raw=true "Fire at will")

## Opdracht

- Maak meerdere vlotten aan in game.ts
- Plaats op elk vlot een aantal kippen naast elkaar
- ⚠️ Het HTML element van de kip append je aan het HTML element van het vlot! Dus niet aan `document.body`
- Game roept de update functie van de vlotten aan en een vlot roept de update functie van zijn kippen aan.

## Opdracht

- We gaan de kip bewapenen. Geef de kip een Gun. De gun heeft een `public fire(){}` functie.
- Geef de kip een `click` event listener.
- Als je op de kip klikt roep je de `fire()` functie van de gun aan. Gebruik console.log om te zien of alles werkt.

## Bonus opdracht

- De gun vuurt kogels af. Deze kogels voegen we toe aan de main game, en niet aan de gun!
- De main game moet dus een array voor bullets krijgen, en een `addBullet` functie. De gun moet die functie aanroepen.
- De game roept de update functie van de bullets en de rafts aan.
- De bullet moet de x en y positie van de kip op het vlot weten, om op de goede plek gezet te worden. In onderstaande code kan je zien hoe je van een div de positie in het scherm kan opvragen.

## UML

![UML](docs/images/uml.png?raw=true "UML")

# Voorbeeldcode

Via de constructor kan je een verwijzing naar de game doorgeven aan zijn children. In dit voorbeeld kan de chicken de gameover functie van de game aanroepen:
```
class Game {
    constructor(){
        let raft = new Raft(this)
    }
    public gameOver(){
        console.log("game over man!")
    }
}
class Raft {
    private game:Game
    constructor(g:Game){
        this.game = g
        let chicken = new Chicken(this.game)
    }
}
class Chicken {
    private game:Game
    constructor(g:Game){
        this.game = g
        this.game.gameOver()
    }
}
```

## Code Snippets
```
// click listener
this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e))

// positie en afmeting van een object
let rect:ClientRect = this.div.getBoundingClientRect()
```

### Theme Song

[Chicken on a raft](http://chickenonaraft.com)
