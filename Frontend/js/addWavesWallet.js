

const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

const seed = Waves.Seed.create();

console.log(seed.keyPair.privateKey); // Генерит ПРИВАТНЫЙ и ПУБЛИЧНЫЙ КЛЮЧ

function Encription() {
    var serverString = $('input[name="serverString"]').val(); // Строка, которую надо скрестить с публичным адресом и зашифровать
    var privateKey = $('input[name="privateKey"]').val();     // Строка с приватным ключом
    
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(privateKey), serverString); // Шифруем ключ + private key
    
    $('input[name=endKey]').val(ciphertext.toString());                     // Показываем шифрокод в 3-й строчке              
    
    var takeCipher = $('input[name=endKey]').val();                         // Получаем значение шифрокода

    var bytes  = CryptoJS.AES.decrypt(takeCipher.toString(), serverString); // Дешифруем   
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));      // В норм формат переводим

    console.log(decryptedData);
    }
