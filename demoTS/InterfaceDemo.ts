interface Isports {
    play(): void;
}
class Cricket implements Isports {
    play() {
        console.log("I am playing cricket");
    }
}
class Football implements Isports {
    play() {
        console.log("I am playing football");
    }
}
var x = new Cricket();
x.play();
var x = new Football();
x.play();
