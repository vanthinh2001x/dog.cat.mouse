function MouseEvent(name){
    this.name = name;
    this.dead = false;
}
Mouse.prototype.die = function(){
    this.dead = true;
}
module.exprots = Mouse;