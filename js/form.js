window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phoneNumber');
    const phoneNumberError = document.querySelector('.phoneNumber-error');
    phoneNumber.addEventListener('input', function() {
        if(phoneNumber.value.length == 0) {
            phoneNumberError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).phoneNumber = phoneNumber.value;
            phoneNumberError.textContent = "";
        } catch (e) {
            phoneNumberError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        if(address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function() {
        if(zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).zip = zip.value;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });
});

const save = () => {
    try {
        let addressBookData = createAddressbook();
    } catch {
        return;
    }
}

const createAddressbook = () => {
    let addressBookData = new AddressBook();
    try {
        addressBookData.name = getInputValueById('#name');
    } catch (e) {
        satTextValue('.text-error', e);
        throw e;
    }

    try {
        addressBookData.phoneNumber = getInputValueById('#phoneNumber');
    } catch (e) {
        satTextValue('.phoneNumber-error', e);
        throw e;
    }

    try {
        addressBookData.address = getInputValueById('#address');
    } catch (e) {
        satTextValue('.address-error', e);
        throw e;
    }

    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');

    try {
        addressBookData.zip = getInputValueById('#zip');
    } catch (e) {
        satTextValue('.zip-error', e);
        throw e;
    }

    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValueById = (id) => {
    let value = document.getElementById(id).value;
    return value;
}