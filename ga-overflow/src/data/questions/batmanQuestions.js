const questions = [
  {
    "id":1,
    "title": "Batman's JavaScript Interrogation: The Dark DOM Rises",
    "description": "Seeking the elusive Bat-Signal on a web page, Batman commands you to use JavaScript to locate and unveil the Bat-Signal element by its unique ID.Where is the Bat-Signal displayed on the web page?",
    "codeSnippet": "nconst batSignal = document.getElementById('bat-signal');\n\nconsole.log(batSignal);\nconst batcomputerData = ['GCPD Files', 'Arkham Asylum Records','Wayne Enterprises Financials'];\nconsole.log(batcomputerData);"
  },
  {
    "id":2,
    "title": "Batman's JavaScript Conundrum: Gotham Arrays Unleashed",
    "description": "Batman, utilizing the Batcomputer's array of crucial data, challenges you to extract valuable information for the greater good of Gotham., Can you extract vital information from the Batcomputer's array of encrypted data?\nconst batcomputerData = ['GCPD Files', 'Arkham Asylum Records', 'Wayne Enterprises Financials'];\nconsole.log(batcomputerData);",
    "codeSnippet": "function batDecryptor(message) {\n// Top-secret decryption algorithm\nreturn message.split('').reverse().join('');}"
  },
  {
    "id":3,
    "title": "Batman's JavaScript Riddle: The Cryptic Function Challenge",
    "description": "Batman requires your assistance in decrypting a mysterious message. Use the Bat-Decryptor function to unveil the hidden truth.",
    "codeSnippet": "Decrypt the message using the Bat-Decryptor function.\nfunction batDecryptor(message) {\n  // Top-secret decryption algorithm\n  return message.split('').reverse().join('');\n}\n\nconst encryptedMessage = 'taM si eman yM';\nconst decryptedMessage = batDecryptor(encryptedMessage);\nconsole.log(decryptedMessage);\n    const encryptedMessage = 'taM si eman yM';\nconst decryptedMessage = batDecryptor(encryptedMessage);\nconsole.log(decryptedMessage);"
  },
  {
    "id":4,
    "title": "Batman's JavaScript Puzzle: The Dark Async Knight",
    "description": "In the urgency to summon the Dark Knight, Batman commands you to implement asynchronous code using the Bat-Signal Service to ensure the signal is lit promptly.",
    "codeSnippet": "function lightBatSignal() {\nreturn new Promise((resolve) => {\nsetTimeout(() => {\nresolve('Bat-Signal Lit');\n}, 2000);\n});\n}\nasync function summonBatman() {\nconst signalStatus = await lightBatSignal();\nconsole.log(signalStatus);\n}\nsummonBatman();"
  },
  {
    "id":5,
    "title": "Batman's JavaScript Showdown: The Justice League of Objects",
    "description": "Batman commands the creation of a trusty Batmobile object with essential properties and methods to assist him in his quest for justice.",
    "codeSnippet": "class Batmobile {\nconstructor(model, speed) {\nthis.model = model;\nthis.speed = speed;\n}\n\naccelerate() {\nconsole.log(`${this.model} accelerating to ${this.speed} mph`);\n}\n\ndeployGrapplingHook() {\nconsole.log('Grappling hook deployed');\n}\n}\nconst tumbler = new Batmobile('Tumbler', 120);\ntumbler.accelerate();\ntumbler.deployGrapplingHook();"
  }
];

export default questions;
