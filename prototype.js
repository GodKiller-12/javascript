function mayank(num) {
    this.num = num * 5;
}

mayank.prototype.reg = function(){
    console.log(this.num);
}

const ret = new mayank(5);
ret.reg();
