function User(name){
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log("Hello, " + who.name);
};

var vasya = new User("����");
var petya = new User("����");

vasya.hello(petya);