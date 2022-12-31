var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "initial value";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(newName){
    bestCustomer = newName;
}

function changeLeastFavoriteCustomer(newName){
    leastFavoriteCustomer = newName;
}

