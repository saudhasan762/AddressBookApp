class AddressBook{

    get name(){ return this._name}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw "Invalid Name!";
    }

    get phoneNumber(){ return this._phoneNumber}
    set phoneNumber(phoneNumber){
        let nameRegex = RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$'); 
        if(nameRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number!";
    }

    get address(){ return this._address}
    set address(address) {
        let nameRegex = RegExp('^[A-Z a-z 0-9]{4,}');
        if(nameRegex.test(address))
            this._address = address;
        else throw "Invalid Address";
    }

    get city(){return this._city}
    set city(city){this._city = city}
    
    get state(){return this._state}
    set state(state){this._state = state}
    
    get zip() { return this._zip}
    set zip(zip) { 
        let nameRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(nameRegex.test(zip))
            this._zip = zip;
        else throw 'Invalid Zip';
    }

    toString(){
        return "name=" +this.name+ ", phoneNumber=" +this.phoneNumber+ ", address=" +this.address+
                ", city=" +this.city+ ", state=" +this.state+ ", zip=" +this.state;
    }
}