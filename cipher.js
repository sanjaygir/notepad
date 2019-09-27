let cipher = {

  secret: "cat",

  chars: "abcdefghijklmnopqrstuvwxyz",

  convertToNum: function(c){

    		let i = 0;

    		while(i < this.chars.length){

    			if(c == this.chars[i]){
    				return i;
    			}

    			i += 1;
    		}

    		return i;

  },

  createKey: function(s){

  	let j = 0;
    let ss = "";
  	while (j < s.length){

  		ss += this.secret[j % this.secret.length];

  		j += 1;
  	}

    return ss;

  },

  encrypt: function(s){

    	let converted = s.toLowerCase().replace(/\s/g, "spacespace");
      let key = this.createKey(converted);


    	let cipher = "";

    	let i = 0;

    	while (i < converted.length){
    		cipher += this.chars[(this.convertToNum(converted[i]) + this.convertToNum(key[i])) % this.chars.length];

    		i += 1;
    	}

      return cipher;



  },
  decrypt: function(cipher){

      let key = this.createKey(cipher);

    	let plain = "";

    	let i = 0;

    	while (i < cipher.length){

    		if((this.convertToNum(cipher[i]) - this.convertToNum(key[i])) % this.chars.length < 0){
    				 plain += this.chars[this.chars.length + ((this.convertToNum(cipher[i]) - this.convertToNum(key[i])) % this.chars.length)];

    		}
    		else{
    			   plain += this.chars[Math.abs((this.convertToNum(cipher[i]) - this.convertToNum(key[i])) % this.chars.length)];

    		}

    		i += 1;
    	}


      return plain;

  }

};
