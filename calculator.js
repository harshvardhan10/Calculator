function backspace() {
	var value = document.getElementById("disp").value;
	document.getElementById("disp").value = value.substr(0, value.length -1);
}

function result(){
    var value = document.getElementById("disp").value;
    var size = value.length;
    if (value.includes("!")){
        var num = Number(value.substr(0, size-1));
        var f = 1;

        for(i = 2; i <= num; i++)
			f = f*i;
		value = f;
    }

    else if (value.includes("cp")) {
        var num = Number(value.substr(0, size-2));
        let isPrime = true;
            if (num === 1) 
                value = "Not Prime";
            else if (num === 2)
                value = "Prime";
            else if (num > 2) {
                for (let i = 2; i < num; i++) {
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                    value = "Prime";
                else
                    value = "Not Prime";
            }
            else
                value = "Not Prime";
    }
    else
		value = eval(value);
    document.getElementById("disp").value = value;
}
