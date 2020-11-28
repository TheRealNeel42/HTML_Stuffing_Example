var file ='ZWNobyAiVGhpcyBzaGVsbCBmaWxlIHdhcyBzdHVmZmVkIjs=';

var _bstring = window.atob(file);
var size = _bstring.length;
var bytes = new Uint8Array(size);
for (var i = 0; i < size; i++)
{ 
  bytes[i] = _bstring.charCodeAt(i); 
}
var data = bytes.buffer;
var blob = new Blob([data], {type: 'octet/stream'});
var fileName = 'stuffed.sh';

if(window.navigator.msSaveOrOpenBlob) 
{
  window.navigator.msSaveBlob(blob,fileName);
}
else 
{
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}