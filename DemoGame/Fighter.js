class Fighter {
    name;
    hp;
    damage;

    constructor(name) { //string
        this.name = name;
        this.hp = 100;
        this.damage = 0;
    }

    attack(fighter) { //fighter là object
        this.damage = Math.floor(Math.random() * 18) + 2;
        if(this.getCrit()){
            this.damage = this.damage * 2;
            fighter.hp -= this.damage;
            alert(this.name + " đánh với sát thương "+this.damage+" damage.CRIT!!!!");
        }else {
            fighter.hp -= this.damage;
            alert(this.name + " đánh với sát thương "+this.damage+" damage");
        }

        if (fighter.hp <= 0) {
            alert(this.name + " vả vỡ mồm " + fighter.name);
        }
    }

    getCrit(){
        // let rand = Math.random()*100;
        // if(rand > 70){
        //     return true;
        // }
        // return false;

        return Math.random() > 0.5;
    }
}
