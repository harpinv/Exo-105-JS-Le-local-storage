let result = document.getElementById('result');

const storage = window.localStorage;
storage.setItem('theme', 'Black');
storage.setItem('type', 'Materiel');
storage.setItem('police de caractère', '18px');

function retourne() {
    let value1 = storage.getItem('theme');
    let value2 = storage.getItem('type');
    let value3 = storage.getItem('police de caractère');
    result.innerHTML += "Thème " + value1 + ", type " + value2 + " et police de caractères " + value3 + "<br>";
    console.log("Thème " + value1 + ", type " + value2 + " et police de caractères " + value3);
}

retourne();

storage.setItem('theme', 'Red');
storage.setItem('type', 'Bloc');
storage.setItem('police de caractère', '27px');

retourne();