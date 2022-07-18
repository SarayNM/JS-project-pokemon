class Pokemon {
  constructor(name, health, magic, skills) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = []; //it can be stored in an array
  }



  
  //learnAttackSkill should take an attack object as an argument
  learnAttackSkill(attack) {
    // The specific attacks should be created using the attackSkill constructor function
    return this.skills.push(attack);
    //and then internally added to that Pokemon's 'skills' array
  }
  //pokemon method to show healt & magic left
  showStatus(health, magic) {
    return `${this.name} status /nhealth: ${this.health} /nmagic: ${this.magic}`;
  }


  attack(index, enemy) {
    if (this.health <= 0) {
      //if the attacker is dead, cannot launch an attack
      console.log(`${this.name} you are dead, cannot launch a new attack! `);
    } else {
      //will start the attack,1st checkt the attacker has enough magic for the specific attack and also make sure the enemy is still alive
      if (this.magic >= this.skills[index].magic && enemy.health) {
console.log("the fihgt can start");
      }
    }
  }


  getMagic() {
    this.magic.push(20);
  }
}

//second constructor function to create new attacks
//attack = +damage = -magic
class AttackSkill {
  constructor(nameAttack, damage, magic) {
    this.nameAttack = nameAttack;
    this.damage = damage;
    this.magic = magic;
  }
}

//pokemons
let pikachu = new Pokemon("pikachu", 120, 80); //has to use the method learnattackskill to learn a new skill
let bulbasur = new Pokemon("bulbasur", 95, 105);
let butterfree = new Pokemon("butterfree", 100, 100);
let rattata = new Pokemon("rattata", 90, 60);

console.log(bulbasur, pikachu, butterfree, rattata);

//skills
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let bodySlam = new AttackSkill("body slam", 10, 10  );
let crunch = new AttackSkill("crunch", 10, 30);


//pokemons learning attaks
pikachu.learnAttackSkill(lightning);
pikachu.attack(0, bulbasur); //why just 0 works?
pikachu.getMagic;//doesnt work!
rattata.learnAttackSkill(crunch);
rattata.attack(0, pikachu);
pikachu.showStatus();

