function cat(){
    this.stomach = []; 
}
Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
module.exprots = Cat;