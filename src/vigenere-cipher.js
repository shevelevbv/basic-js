const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(value=true) {
    this.value = value;
  }

  encrypt(message, key) {
    if (arguments.length != 2 || message === undefined || key === undefined) {
      throw new Error ('Incorrect arguments!')
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultingString = '';
    let pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let slider = 0;
    for (let symbol of message) {
      if (pattern.includes(symbol)) {
        let index = pattern.indexOf(symbol);
        let newPattern = pattern.substring(index) + pattern.substring(0, index);
        let keyIndex = pattern.indexOf(key[slider]);
        symbol = newPattern[keyIndex];
        slider++;
        if (slider >= key.length) {
          slider = 0;
        }
      }
      resultingString += symbol;
    }

    if (!this.value) {
      resultingString = resultingString.split('').reverse().join('');
    }
    return resultingString;
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length != 2 || encryptedMessage === undefined) {
      throw new Error ('Incorrect arguments!')
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let resultingString = '';
    let pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let slider = 0;
    for (let symbol of encryptedMessage) {
      if (pattern.includes(symbol)) {
        let index = pattern.indexOf(key[slider]);
        let newPattern = pattern.substring(index) + pattern.substring(0, index);
        let keyIndex = newPattern.indexOf(symbol);
        symbol = pattern[keyIndex];
        slider++;
        if (slider >= key.length) {
          slider = 0;
        }
      }
      resultingString += symbol;
    }

    if (!this.value) {
      resultingString = resultingString.split('').reverse().join('');
    }
    return resultingString;
  }
}
 
module.exports = {
  VigenereCipheringMachine
};
