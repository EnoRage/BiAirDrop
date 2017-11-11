const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

const seed = Waves.Seed.create();
console.log(seed.phrase);