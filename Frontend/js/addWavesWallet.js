

const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

const seed = Waves.Seed.create();

console.log(seed.keyPair); // Генерит ПРИВАТНЫЙ и ПУБЛИЧНЫЙ КЛЮЧ



var encrypted = CryptoJS.SHA256("Привет");


// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify('Privet'), 'secret key 123');

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log(decryptedData);