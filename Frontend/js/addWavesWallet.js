

const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

const seed = Waves.Seed.create();

console.log(seed.keyPair); // Генерит ПРИВАТНЫЙ и ПУБЛИЧНЫЙ КЛЮЧ



var encrypted = CryptoJS.SHA256("Привет");
console.log(encrypted);

var ciphertext = CryptoJS.AES.encrypt("Privet", 'secret key 123');

// var ciphertext = CryptoJS.AES.decrypt(JSON.stringify(data), 'secret key 123');