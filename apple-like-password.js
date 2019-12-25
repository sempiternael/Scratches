var length = ( 6 * 3 ) - 2; // Sets the length to 16
var output = '';

function apple(length) {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    for (var i = 0; i <= length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        if(i % 6 == 0 && i/5 != 0) output += "-"; // Chunks the password into 3 sections of 6
	output += chars.substring(rnum,rnum+1);
    }
    console.log(output);
}

apple(length);
