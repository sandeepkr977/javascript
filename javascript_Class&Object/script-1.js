var Address = function() {
    this.houseNo = undefined;
    this.street = undefined;
    this.city = undefined;
    this.state = undefined;
    this.pincode = undefined;
};

Address.prototype.setHouseNo = function(house) {
    this.houseNo = house;
}

Address.prototype.setStreet = function(street) {
    this.street = street;
}

Address.prototype.setCity = function(city) {
    this.city = city;
}

Address.prototype.setState = function(state) {
    this.state = state;
}

Address.prototype.setPincode = function(pin) {
    this.pincode = pin;
}
var Name = function() {
    this.fname = undefined;
    this.lname = undefined;
};

Name.prototype.setfname = function(f) {
    this.fname = f;
};

Name.prototype.setlname = function(l) {
    this.lname = l;
};

var Student = function() {
    this.name = new Name();
    this.contactNo = undefined;
    this.address = new Address();
};

Student.prototype.setName = function(f, l) {
    this.name.setfname(f);
    this.name.setlname(l);
};

Student.prototype.setAddress = function(house, street, city, state, pin) {
    this.houseNo = house;
    this.street = street;
    this.city = city;
    this.state = state;
    this.pincode = pin;
}

Student.prototype.getName = function() {
    return this.name;
};




var student = new Student();
student.setName("sandeep", "kumar");
student.contactNo = 4534564;
student.setAddress("f-192", "NanakPura, South Moti Bagh", "New Delhi", "Delhi", 110021);
console.log(student);