describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwqyz" con offest 33', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwqyz",33),"hijklmnopqrstuvwxyzabcdefg")
    });
  });

    it('debería retornar "0123456789" para "3456789012" con offest 33', () => {
    assert.equal(cipher.encode("3456789012",33),"0123456789")});
   
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")});
  });

    it('debería ser una función', () => {
    assert.equal(typeof cipher.decode, 'function');
  });

    it('debería retornar "abcdefghijklmnopqrstuvwqyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwqyz")
    });
 });
  
    it('debería retornar "0123456789" para "3456789012" con offest 33', () => {
      assert.equal(cipher.decode("3456789012",33),"0123456789")});

describe('cipher.createCipherWithOffset', () => {

   it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() => {
      assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
      assert.equal(typeof cipher.createCipherWithOffset(33).encode, 'function');
      assert.equal(typeof cipher.createCipherWithOffset(33).decode, 'function');
    });
  });
