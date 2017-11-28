hotkeysDisabled = false;
$('input, textarea').focus(function(){hotkeysDisabled=true;}).blur(function(){hotkeysDisabled=false});
function CheckKeyDown(e) {
if(hotkeysDisabled)
return true;
}
function keyCodeString(e)
{
var keyCodeStrings = {
8: 'backspace',
9: 'tab',
...
222: 'quote'
}
...
s = '';
if(e.ctrlKey) s = s + 'ctrl_';
if(e.altKey) s = s + 'alt_';
return s + keyCodeStrings[e.keyCode];
}

var keyCode = keyCodeString(e);
var selector='a.'+keyCode;
if($(selector).size() > 0)
{
location.href=$(selector).attr('href'); // your favorite load/go method
return false;
}
