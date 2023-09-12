let deposit = (user, amount) => {
    user.balance += amount
}

let withdraw = (user, amount) => {
    if (user.balance >= amount) {
        user.balance -= amount
    }
    else{
        console.log("Insufficient balance");
    }
}

let user = { name: "Rishabh", balance: 100 };
deposit(user,2)
console.log(user);
// Output -> { name: "Rishabh", balance: 22 }

withdraw(user,6)
console.log(user);