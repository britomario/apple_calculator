var memory = 0;
var memorycalc;
var flag = false;
var c = false;

var screen = function(value){
    if(value == '.' && flag){
        return;
    }
    if(c == true){
		$('#screen').val('');
		c = false;
	}
   var r = $('#screen').val() + value
   if(value == '.'){
    flag = true;
   } else {
    r = r * 1
   }
   $('#screen').val(r);
}

var calculate = function(value){
    if(memory){
        result()
    }
    flag = false;
    c = true;
    memory = $('#screen').val()
    memorycalc = value;
}

var result = function(){
    if(memory == 0)
    return;
    c = true;
    var r;
    switch(memorycalc){
        case '+':
            r = Number(memory) + Number($('#screen').val());
            break;
        case '-':
            r = memory - $('#screen').val();
            break;
        case '*':
            r = memory * $('#screen').val();
            break;
        case '/':
            r = memory / $('#screen').val();
            break;
    }
    screen(r)
    c = true;
    flag = false;
    memory = 0;
}

$('#clear').click(function(){
    memory = 0
    $('#screen').val(memory)
})

$('#backspace').click(function(){
    var len = $('#screen').val().length;
    $('#screen').val($('#screen').val().slice(0, len - 1));
})

$('#sign').click(function(){
    $('#screen').val($('#screen').val() * -1)
})

$('.digit').click(function(e){
    screen(e.target.value)
})

$('#divide, #multiply, #substract, #plus').click(function(e){
    calculate(e.target.value)
})

$('#equal').click(function() {
	result();
});