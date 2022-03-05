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
  constructor(direct) {
    this.direct = direct ?? true;
  }

  encrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    } 


    message = message.toUpperCase();
    key = key.toUpperCase();
    let str = '', x = 0;
    
    message.split('').forEach((l, i)=> {
        if (l.charCodeAt() >= 65 && l.charCodeAt() <= 90) {
          str += String.fromCharCode((l.charCodeAt(l) + key.charCodeAt(x % key.length) - 130) % 26 + 65);
          x++;
        }
        else str += l;
    });
 
    return this.direct ? str : str.split('').reverse().join('');  
  }

  decrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    } 

    message = message.toUpperCase();
    key = key.toUpperCase();
    let str = '', x = 0;

    message.split('').forEach((l, i)=> {
      if (l.charCodeAt() >= 65 && l.charCodeAt() <= 90) {
        str += String.fromCharCode((l.charCodeAt() + 26 - key.charCodeAt(x % key.length)) % 26 + 65);
        x++;
      }
      else str += l;
    });
  
    return this.direct ? str : str.split('').reverse().join('');  
  }

}

module.exports = {
  VigenereCipheringMachine
};
