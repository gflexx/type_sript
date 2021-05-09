export class Point{
  constructor(public x: number, public y: number){
  }

  draw(){
    console.log('X: ' + this.x + ' Y: ' + this.y);
  }
}
