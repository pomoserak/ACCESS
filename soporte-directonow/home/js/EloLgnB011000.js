//Variables control SHA-2
var urlSha2="";
var flagSha2="";
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciones ajax para cargar dinámicamente la imagen del identificador por teclado virtual
//Se puede utilizar para futuras acciones de cargar dinámicamente la respuesta de alguna llamada al servidor,
//o para cargar alguna html o jsp sin llamar al servidor, cambiando el método POST por GET
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getXMLHttpRequest(){
var xmlhttp=false;
try {
xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {
xmlhttp = false;
}
}
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
xmlhttp = new XMLHttpRequest();
}
return xmlhttp;
}
function TraerContenido(datos,contenedor){
divResultado = document.getElementById(contenedor);
ajax=getXMLHttpRequest();
ajax.open("POST", datos);
ajax.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
ajax.onreadystatechange=function(){
if(ajax.readyState==1){
divResultado.innerHTML="<img style='center' src='../imatge/ajax-loader_big.gif'/>"
}else if(ajax.readyState==4){
divResultado.innerHTML=ajax.responseText;
}
}
ajax.send(null)
}
function TraerContenidoQwerty(datos,contenedor){
cambioTecladoQwerty()
divResultado = document.getElementById(contenedor);
ajax=getXMLHttpRequest();
ajax.open("POST", datos);
ajax.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
ajax.onreadystatechange=function(){
if(ajax.readyState==1){
divResultado.innerHTML="<img style='center' src='../imatge/ajax-loader_big.gif'/>"
}else if(ajax.readyState==4){
divResultado.innerHTML=ajax.responseText;
}
}
ajax.send(null)
}
//////////////////////////////////////////
//Funciones para la gestión de las cookies
//////////////////////////////////////////
function guardarCookie(nombre,valor,caducidad,ruta,dominio){
var today = new Date();
today.setTime( today.getTime() );
var cad = new Date( today.getTime() + (caducidad) );
document.cookie = nombre + "=" + escape(valor)
+ ((cad == null || cad == "") ? "" : ("; expires=" + cad.toGMTString()))
+ ((dominio == null || dominio == "") ? "" : ("; domain=" + dominio))
+ ((ruta == null || ruta == "") ? "" : ("; path=" + ruta))
}
function eliminarCookie(nombre, ruta, dominio) {
var cad = new Date(1970, 1, 1, 0, 0, 0); //Das un valor anterior para que haya caducado ya y no vuelva a aparecer
document.cookie = nombre + "="
+ ((cad == null || cad == "") ? "" : ("; expires=" + cad.toGMTString()))
+ ((dominio == null || dominio == "") ? "" : ("; domain=" + dominio))
+ ((ruta == null || ruta == "") ? "" : ("; path=" + ruta))
}
function getCookie(name) {var begin=document.cookie.indexOf(name+"=");if(begin==-1) return null; var end=document.cookie.indexOf(";",begin); if(end==-1) end=document.cookie.length; return document.cookie.substring(document.cookie.indexOf("=",begin)+1,end);}
//////////////////////////////////////////////
//Funciones para la validación del pin y el id
//////////////////////////////////////////////
function validar2(pin,lonpas){
var error = false;
if ((pin.value=="") || (pin.value=="null")){
//Inserción de errores
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[13] + "</li>";
error = true;
}
if(error == true){
mHTML+="</ul>";
document.getElementById("capaErrorPW").style.display='block';
document.getElementById("capaErrorPW").innerHTML = mHTML;
}else{
document.getElementById("capaErrorPW").style.display='none';
}
return error;
}
function validateHere(id,seed,pin,iter,pinenc,lon,lonpas){
var errorID = false;
var errorPW = false;
var error = false;
if (id.value.length==0){
//Inserción de errores ID
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[6] + "</li>";
errorID = true;
}
if ((pin.value=="") || (pin.value=="null")){
//Inserción de errores PW
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[13] + "</li>";
errorPW = true;
}
if (pin.value.length<4 || pin.value.length>lonpas){
//Inserción de errores PW
if(errorPW == false){
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[9] + "</li>";
}else{
mHTML+="<li>" + errors[9] + "</li>";
}
errorPW = true;
}
autenticate(seed,iter,pin,pinenc,lon);
//funciona=false;
if(errorID == true){
mHTML+="</ul>";
document.getElementById("capaErrorID").style.display='block';
document.getElementById("capaErrorID").innerHTML = mHTML;
error = true;
}else{
document.getElementById("capaErrorID").style.display='none';
}
if(errorPW == true){
mHTML+="</ul>";
document.getElementById("capaErrorPW").style.display='block';
document.getElementById("capaErrorPW").innerHTML = mHTML;
error = true;
}else{
document.getElementById("capaErrorPW").style.display='none';
}
return error;
}
function validateCLOHere(id,seed,pin,iter,pinenc,a,b){
var errorID = false;
var errorPW = false;
var error = false;
if (id.value.length==0){
//Inserción de errores ID
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[6] + "</li>";
errorID = true;
}
if ((pin.value=="") || (pin.value=="null")){
//Inserción de errores PW
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[1] + "</li>";
errorPW = true;
}
if (pin.value.length!=4){
//Inserción de errores PW
if(errorPW == false){
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[3] + "</li>";
}else{
mHTML+="<li>" + errors[3] + "</li>";
}
errorPW = true;
}
if (!EsValid(pin.value)){
if(errorPW == false){
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[2] + "</li>";
}else{
mHTML+="<li>" + errors[2] + "</li>";
}
errorPW = true;
}else{
autenticate(seed,iter,pin,pinenc,8);
//funciona=false;
}
if(errorID == true){
mHTML+="</ul>";
document.getElementById("capaErrorID").style.display='block';
document.getElementById("capaErrorID").innerHTML = mHTML;
error = true;
}else{
document.getElementById("capaErrorID").style.display='none';
}
if(errorPW == true){
mHTML+="</ul>";
document.getElementById("capaErrorPW").style.display='block';
document.getElementById("capaErrorPW").innerHTML = mHTML;
error = true;
}else{
document.getElementById("capaErrorPW").style.display='none';
}
return error;
}
////////////////////////////////////////////
//Funciones propias de la pantalla del login
////////////////////////////////////////////
function cambioTecladoVirtual(){
// TECLADO NORMAL - NONE
document.getElementById("linkTecladoNormal").style.display='none';
document.getElementById("introducirLiteralNormal").style.display='none';
// TECLADO VIRTUAL - BLOCK
document.getElementById("linkTecladoVirtual").style.display='block';
document.getElementById("introducirLiteralVirtual").style.display='block';
document.getElementById("introducirTecladoVirtual").style.display='block';
document.getElementById("introducirLineaSup").className='lineaSupBotonBorrar';
if(document.forms["INPUTS"].ID.value==''){
if(document.getElementById("recordar") != null){
document.getElementById("recordar").checked = false;
}
}
if(document.getElementById("recordar") != null){
if(document.getElementById("recordar").checked){
document.forms["INPUTS"].pin1.focus();
}else{
document.forms["INPUTS"].ID.focus();
}
}
}
function cambioTecladoNormal(){
// TECLADO NORMAL - BLOCK
document.getElementById("linkTecladoNormal").style.display='block';
document.getElementById("introducirLiteralNormal").style.display='inline';
// TECLADO VIRTUAL - NONE
document.getElementById("linkTecladoVirtual").style.display='none';
document.getElementById("introducirLiteralVirtual").style.display='none';
document.getElementById("introducirTecladoVirtual").style.display='none';
document.getElementById("introducirLineaSup").className='';
if(document.forms["INPUTS"].ID.value==''){
if(document.getElementById("recordar") != null){
document.getElementById("recordar").checked = false;
}
}
if(document.getElementById("recordar") != null){
if(document.getElementById("recordar").checked){
document.forms["INPUTS"].pin1.focus();
}else{
document.forms["INPUTS"].ID.focus();
}
}
}
function cambioTecladoVirtualPin(){
// TECLADO NORMAL - NONE
document.getElementById("pin1").removeAttribute("readOnly", true); //Correccion teclado login
document.getElementById("linkTecladoNormal2").style.display='none';
document.getElementById("introducirLiteralNormal").style.display='none';
document.getElementById("introducirPasswordVirtual").style.display='none';
document.getElementById("botonBorrarPass").style.display='none';
//document.getElementById("introducirPasswordVirtual").style.display='none';introducirPasswordVirtual
// TECLADO VIRTUAL - BLOCK
document.getElementById("linkTecladoVirtual2").style.display='block';
//document.getElementById("introducirLiteralVirtual").style.display='block';
document.getElementById("introducirTecladoVirtual2").style.display='block';
//document.getElementById("introducirLineaSup").className='lineaSupBotonBorrar';
//Se borra el campo del pin para que se pueda introducir completo de nuevo con el teclado virtual
document.forms["INPUTS"].pin1.value='';
}
function cambioTecladoNormalPin(){
document.getElementById("pin1").setAttribute("readOnly", 'true'); //Correccion teclado login
// TECLADO NORMAL - BLOCK
document.getElementById("linkTecladoNormal2").style.display='block';
document.getElementById("introducirLiteralNormal").style.display='inline';
document.getElementById("introducirPasswordVirtual").style.display='block';
document.getElementById("botonBorrarPass").style.display='block';
// TECLADO VIRTUAL - NONE
document.getElementById("linkTecladoVirtual2").style.display='none';
//document.getElementById("introducirLiteralVirtual").style.display='none';
document.getElementById("introducirTecladoVirtual2").style.display='none';
//document.getElementById("introducirLineaSup").className='';
document.getElementById("enlaceBotonAceptar").href="javascript:buttonAcep('normal');";
//Se borra el campo del pin para que se pueda introducir completo de nuevo con el teclado normal
document.forms["INPUTS"].pin1.value='';
}
function cambioTecladoAccesible(){
document.getElementById("pin1").removeAttribute("readOnly", true); //Correccion teclado login
document.getElementById("linkTecladoNormal2").style.display='none';
document.getElementById("textoPasswordVirtual").style.display='none';
document.getElementById("textoPasswordNormal").style.display='block';
document.getElementById("introducirPasswordVirtual").style.display='none';
document.getElementById("lineaSupBotonPass").style.classname='';
document.getElementById("botonBorrarPass").style.display='none';
document.getElementById("accesibleEnlace").style.display='none';
document.getElementById("linkTecladoNormal").style.display='none';
document.getElementById("enlaceBotonAceptar").href="javascript:buttonAcep('accesible');";
document.getElementById("destinoTecladoVirtual").style.display='none';
document.getElementById("destinoTecladoVirtual2").style.display='none';
document.getElementById("linkTecladoVirtual").style.display='none';
document.getElementById("linkTecladoVirtual2").style.display='none';
document.getElementById("textoPinNoAccesible").style.display='none';
document.getElementById("textoPinAccesible").style.display='block';
if (document.forms["INPUTS"].ID.value.length < 21)
{
aux = document.forms["INPUTS"].ID.value;
}
document.forms["INPUTS"].ID.value= aux;
if(document.forms["INPUTS"].ID.value=='')
{
if(document.getElementById("recordar") != null)
{
document.getElementById("recordar").checked = false;
}
}
//Se borra el campo del pin para que se pueda introducir completo de nuevo con el teclado accesible
document.forms["INPUTS"].pin1.value='';
document.getElementById("pin1").focus();
}
function cambioTecladoQwerty(){
document.getElementById("textoPasswordVirtual").style.display='none';
document.getElementById("textoPasswordNormal").style.display='block';
document.getElementById("introducirPasswordVirtual").style.display='none';
document.getElementById("lineaSupBotonPass").style.classname='';
document.getElementById("botonBorrarPass").style.display='none';
//document.getElementById("accesibleEnlace").style.display='none';
//document.getElementById("linkTecladoNormal").style.display='none';
document.getElementById("enlaceBotonAceptar").href="javascript:buttonAcep('accesible');";
if (document.forms["INPUTS"].ID.value.length < 21)
{
aux = document.forms["INPUTS"].ID.value;
}
document.forms["INPUTS"].ID.value= aux;
if(document.forms["INPUTS"].ID.value=='')
{
if(document.getElementById("recordar") != null)
{
document.getElementById("recordar").checked = false;
}
}
document.getElementById("pin1").focus();
}
function pulsarImagen(tecla,lugar){
//Primero comprobamos que no intente introducir el PIN con el ID vacío
var error = false;
var id = '';
id = document.forms["INPUTS"].ID.value;
var error2 =false;
if(lugar!=1 && id==''){
//Inserción de errores
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[6] + "</li>";
mHTML+="</ul>";
error2 = true;
}else{
if(lugar==0){//Input B
if (document.forms["INPUTS"].pin1.value.length < 17){
aux = document.forms["INPUTS"].pin1.value;
document.forms["INPUTS"].pin1.value= aux + tecladoCryp[tecla] + "";
//document.forms["INPUTS"].pin1.focus();
}
}
else if(lugar==1){//Input ID2
document.forms["INPUTS"].recordar.checked=false;
if (document.forms["INPUTS"].ID.value.length < 20){
aux = document.forms["INPUTS"].ID.value;
document.forms["INPUTS"].ID.value= aux + tecladoCrypID[tecla] + "";
var elemento = document.getElementById("ID");
//elemento.focus();
if(typeof document.selection != 'undefined' && document.selection){        //IE
var str = document.selection.createRange();
str.move("character", document.forms["INPUTS"].ID.value.length);
str.select();
}
else if(typeof elemento.selectionStart != 'undefined'){                    //FF
elemento.setSelectionRange(document.forms["INPUTS"].ID.value.length,document.forms["INPUTS"].ID.value.length);
}
}
} else if(lugar==2){//Input B, teclado qwerty
if (document.forms["INPUTS"].pin1.value.length < 17){
aux = document.forms["INPUTS"].pin1.value;
document.forms["INPUTS"].pin1.value= aux + tecladoCrypPass[tecla] + "";
//document.forms["INPUTS"].B.focus();
}
}
document.getElementById("capaErrorID").style.display='none';
}
if(error2){
document.getElementById("capaErrorID").style.display='block';
document.getElementById("capaErrorID").innerHTML=mHTML;
}
}
function DetectaEnter( evnt ) {
var ret=0;
if ( (!(evnt)) && (document.all) ) {
evnt=self.event;
if (evnt.keyCode==13) {
ret=1;
evnt.cancelBubble=true;
evnt.returnValue=false;
}
}
else if (evnt) { if (evnt.which==13) { ret=1; } }
if (ret) {
var b = document.forms["INPUTS"].entrar;
if ( !b.disabled ) b.onclick();
return false;
}
return true;
}
function DetectaTab(evnt,capa){
var ret=0;
if (isW3C) { //Firefox
if (evnt.which==9) {
ret=1;
evnt.stopPropagation();
evnt.preventDefault();
}
}else { //IE, Chrome...
if (evnt.keyCode==9) {
ret=1;
evnt.cancelBubble=true;
evnt.returnValue=false;
}
}
if (ret) {
tabula(capa);
}
}
function tabula(capa){
var id = document.forms["INPUTS"].ID.value;
var error = false;
if(id == ""){
//Inserción de errores
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[6] + "</li>";
mHTML+="</ul>";
error = true;
}
if(error == true){
document.getElementById("capaErrorID").style.display='block';
document.getElementById("capaErrorID").innerHTML=mHTML;
}else{
document.getElementById("capaErrorID").style.display='none';
document.forms["INPUTS"].pin1.focus();
}
}
function pulsaTeclaID(){
document.forms["INPUTS"].recordar.checked=false;
return true;
}
function buttonDelID(){
document.forms["INPUTS"].ID.value="";
document.forms["INPUTS"].recordar.checked=false;
//document.forms["INPUTS"].ID.focus();
}
function buttonDelPW(){
document.forms["INPUTS"].pin1.value="";
//document.forms["INPUTS"].B.focus();
}
function prohibidoPulsarTecla(evnt,lugar){
var key = evnt.keyCode || evnt.which;
if (key != 9){
//Inserción de errores
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[14] + "</li>";
mHTML+="</ul>";
if(lugar=='ID')
{
if(document.getElementById("introducirTecladoVirtual").style.display=='block')
{
document.getElementById("capaErrorID").style.display='block';
document.getElementById("capaErrorID").innerHTML = mHTML;
}
}
else
{ // PASSWORD
if(document.getElementById("introducirPasswordVirtual").style.display=='block')
{
document.getElementById("capaErrorPW").style.display='block';
document.getElementById("capaErrorPW").innerHTML = mHTML;
}
}
}
}
function buttonAcep2(tipoTeclado){
//Se pone la imagen 10 que corresponde a la original
var id = '';
id = document.forms["INPUTS"].ID.value;
document.forms["INPUTS"].pin1.value=document.forms["INPUTS"].pin1.value.toUpperCase();
var error = false;
if(id == ""){
//Inserción de errores
mHTML = "<ul style='list-style:none;margin-top:0px;margin-bottom:3px;'>";
mHTML+="<li>" + errors[6] + "</li>";
mHTML+="</ul>";
error = true;
}
if(error == true){
document.getElementById("capaErrorID").style.display='block';
document.getElementById("capaErrorID").innerHTML=mHTML;
}else{
document.getElementById("capaErrorID").style.display='none';
if(tipoTeclado=='normal'){
document.forms["LGN"].FLAG_TECLAT.value = 'S';
}else if(tipoTeclado=='accesible'){
document.forms["LGN"].FLAG_TECLAT.value = 'N';
}
}
gestionCookie();
}
function linkCandado(url) {
//window.open(opt,'','fullscreen=yes,resizable=yes,scrollbars=yes');
params =  'top=0, left=0'
params += ', width='+screen.width+', height='+screen.height;
//params += ', fullscreen=yes';
newwin=window.open(url,'windowname4', params);
if (window.focus) {newwin.focus()}
}
function cambiaEstiloInput(elemento){
if (elemento.className=='in-NoFocus'){
elemento.className='in-Focus';
}else{
elemento.className='in-NoFocus';
}
}
function enterPassword(evnt)
{
if(document.getElementById('introducirPasswordVirtual').style.display=='block')
{
prohibidoPulsarTecla(evnt,'PW');
// no se propaga la pulsacion
if (isW3C)
{ //Firefox
evnt.stopPropagation();
evnt.preventDefault();
}
else
{ //IE, Chrome...
evnt.cancelBubble=true;
evnt.returnValue=false;
}
return false;
}
}
/////////////////////////////////////
//Funciones para el botón desplegable
/////////////////////////////////////
document.button_zindex = 1;
function getObject(objId){
var obj = null;
with (document){ if (getElementById)
obj = getElementById(objId); }
return obj;
}
function muestraIdiomas(parent){
obj = getObject(parent);
if (obj.flag != true){
var idflch = document.getElementById('flch');
idflch.src = '../imatge/boton-desplegable/bg-flecha-on.gif';
document.button_zindex++;
MM_changePropObj(obj, '', "zIndex", document.button_zindex);
obj.flag = true;
document.getElementById("despl").style.display='block';
}else{
var idflch = document.getElementById('flch');
idflch.src = '../imatge/boton-desplegable/bg-flecha-off.gif';
obj.flag = false;
document.getElementById("despl").style.display='none';
}
return false;
}
function MM_changePropObj(obj,x,theProp,theValue) { //v9.0
if (obj){
if (theValue == true || theValue == false)
eval("obj.style."+theProp+"="+theValue);
else eval("obj.style."+theProp+"='"+theValue+"'");
}
}
//////////////////
//ELOGENB000002.JS
//////////////////
var errores;
function InicializaErrores() {
errores = new Array;
}
function AddError( mensaje_error ) {
errores[errores.length] = mensaje_error;
}
//////////////////
//ELOGFIB000100.JS
//////////////////
function isMac(){
return (navigator.platform.indexOf("Mac")!=-1);
}
function openW(src,nom,anch,alto,scrl,stts,tol,loct,dirs,menu,coph,resz){
xpos=(screen.width-anch)/2;
ypos=((screen.height-alto)/2)-25;
w = "location=" + loct + ",directories=" + dirs + ",menubar=" + menu + ",copyhistory=" + coph + ",resizable=" + resz + ",scrollbars=" + scrl + ",status=" + stts + ",toolbar=" + tol;
w += ",screenx=" + xpos + ",screeny=" + ypos + ",left=" + xpos + ",top=" + ypos + ",width=" + anch + ",height=" + alto;
return window.open(src,nom,w);
}
function adW(src,t,w,h){
switch (t){
case 0:op=w+','+h+',0,0,0,0,0,0,0,0';break;
case 1:op='600,400,1,0,1,0,0,0,0,1';break;
case 2:op='600,400,1,0,0,0,0,0,0,0';break;
case 3:op=w+','+h+',1,0,0,0,0,0,0,0';break;
case 4:op=w+','+h+',1,0,1,1,0,1,1,1';break;
}
eval('openW(src,"new_win"+(Math.floor(1000*Math.random())+1),'+op+')')
}
//////////////////
//ELOLGNB000103.JS
//////////////////
function revertir(oper,f){
var letrasHex = "0123456789ABCDEF"
var result=""
for(it=0;it<16;it++){
var numBase10 = parseInt(f.A.value.charAt(it),16)
var numBase10Mask = parseInt(f.D.value.charAt(it),16)
var resultado;
if ('+' == oper)
{
resultado = numBase10 - numBase10Mask
if (resultado<0) resultado = 16 + resultado
}
else{ resultado = numBase10 + numBase10Mask;}
if (resultado <= 9)	result = result + resultado.toString()
else	result = result + letrasHex.charAt(resultado%16).toString()
}
return result
}
var funciona=true
function integer(n){return n%(0xffffffff+1)}
function shr(a,b){
a=integer(a)
b=integer(b)
if (a-0x80000000>=0){
a=a%0x80000000
a>>=b
a+=0x40000000>>(b-1)
} else
a>>=b
return a
}
function shl1(a){
a=a%0x80000000
if (a&0x40000000==0x40000000)
{
a-=0x40000000
a*=2
a+=0x80000000
} else
a*=2
return a
}
function shl(a,b){
a=integer(a)
b=integer(b)
for (var i=0;i<b;i++) a=shl1(a)
return a
}
function and(a,b){
a=integer(a)
b=integer(b)
var t1=(a-0x80000000)
var t2=(b-0x80000000)
if (t1>=0)
if (t2>=0)
return ((t1&t2)+0x80000000)
else
return (t1&b)
else
if (t2>=0)
return (a&t2)
else
return (a&b)
}
function or(a,b){
a=integer(a)
b=integer(b)
var t1=(a-0x80000000)
var t2=(b-0x80000000)
if (t1>=0)
if (t2>=0)
return ((t1|t2)+0x80000000)
else
return ((t1|b)+0x80000000)
else
if (t2>=0)
return ((a|t2)+0x80000000)
else
return (a|b)
}
function xor(a,b){
a=integer(a)
b=integer(b)
var t1=(a-0x80000000)
var t2=(b-0x80000000)
if (t1>=0)
if (t2>=0)
return (t1^t2)
else
return ((t1^b)+0x80000000)
else
if (t2>=0)
return ((a^t2)+0x80000000)
else
return (a^b)
}
function not(a){
a=integer(a)
return (0xffffffff-a)
}
var state=new Array(4)
var count=new Array(2)
count[0]=0
count[1]=0
var buffer=new Array(64)
var transformBuffer=new Array(16)
var digestBits=new Array(16)
var S11=7
var S12=12
var S13=17
var S14=22
var S21=5
var S22=9
var S23=14
var S24=20
var S31=4
var S32=11
var S33=16
var S34=23
var S41=6
var S42=10
var S43=15
var S44=21
function F(x,y,z){
return or(and(x,y),and(not(x),z))
}
function G(x,y,z){
return or(and(x,z),and(y,not(z)))
}
function H(x,y,z){
return xor(xor(x,y),z)
}
function I(x,y,z){
return xor(y ,or(x ,not(z)))
}
function rotateLeft(a,n){
return or(shl(a,n),(shr(a,(32 - n))))
}
function FF(a,b,c,d,x,s,ac){
a=a+F(b,c,d) + x + ac
a=rotateLeft(a,s)
a=a+b
return a
}
function GG(a,b,c,d,x,s,ac){
a=a+G(b,c,d) +x + ac
a=rotateLeft(a,s)
a=a+b
return a
}
function HH(a,b,c,d,x,s,ac){
a=a+H(b,c,d) + x + ac
a=rotateLeft(a,s)
a=a+b
return a
}
function II(a,b,c,d,x,s,ac){
a=a+I(b,c,d) + x + ac
a=rotateLeft(a,s)
a=a+b
return a
}
function transform(buf,offset){
var a=0,b=0,c=0,d=0
var x=transformBuffer
a=state[0]
b=state[1]
c=state[2]
d=state[3]
for (i=0; i < 16; i++){
x[i]=and(buf[i*4+offset],0xff)
for (j=1; j < 4; j++){
x[i]+=shl(and(buf[i*4+j+offset] ,0xff),j * 8)
}
}
a=FF (a,b,c,d,x[0],S11,0xd76aa478)
d=FF (d,a,b,c,x[1],S12,0xe8c7b756)
c=FF (c,d,a,b,x[2],S13,0x242070db)
b=FF (b,c,d,a,x[3],S14,0xc1bdceee)
a=FF (a,b,c,d,x[4],S11,0xf57c0faf)
d=FF (d,a,b,c,x[5],S12,0x4787c62a)
c=FF (c,d,a,b,x[6],S13,0xa8304613)
b=FF (b,c,d,a,x[7],S14,0xfd469501)
a=FF (a,b,c,d,x[8],S11,0x698098d8)
d=FF (d,a,b,c,x[9],S12,0x8b44f7af)
c=FF (c,d,a,b,x[10],S13,0xffff5bb1)
b=FF (b,c,d,a,x[11],S14,0x895cd7be)
a=FF (a,b,c,d,x[12],S11,0x6b901122)
d=FF (d,a,b,c,x[13],S12,0xfd987193)
c=FF (c,d,a,b,x[14],S13,0xa679438e)
b=FF (b,c,d,a,x[15],S14,0x49b40821)
a=GG (a,b,c,d,x[1],S21,0xf61e2562)
d=GG (d,a,b,c,x[6],S22,0xc040b340)
c=GG (c,d,a,b,x[11],S23,0x265e5a51)
b=GG (b,c,d,a,x[0],S24,0xe9b6c7aa)
a=GG (a,b,c,d,x[5],S21,0xd62f105d)
d=GG (d,a,b,c,x[10],S22,0x2441453)
c=GG (c,d,a,b,x[15],S23,0xd8a1e681)
b=GG (b,c,d,a,x[4],S24,0xe7d3fbc8)
a=GG (a,b,c,d,x[9],S21,0x21e1cde6)
d=GG (d,a,b,c,x[14],S22,0xc33707d6)
c=GG (c,d,a,b,x[3],S23,0xf4d50d87)
b=GG (b,c,d,a,x[8],S24,0x455a14ed)
a=GG (a,b,c,d,x[13],S21,0xa9e3e905)
d=GG (d,a,b,c,x[2],S22,0xfcefa3f8)
c=GG (c,d,a,b,x[7],S23,0x676f02d9)
b=GG (b,c,d,a,x[12],S24,0x8d2a4c8a)
a=HH (a,b,c,d,x[5],S31,0xfffa3942)
d=HH (d,a,b,c,x[8],S32,0x8771f681)
c=HH (c,d,a,b,x[11],S33,0x6d9d6122)
b=HH (b,c,d,a,x[14],S34,0xfde5380c)
a=HH (a,b,c,d,x[1],S31,0xa4beea44)
d=HH (d,a,b,c,x[4],S32,0x4bdecfa9)
c=HH (c,d,a,b,x[7],S33,0xf6bb4b60)
b=HH (b,c,d,a,x[10],S34,0xbebfbc70)
a=HH (a,b,c,d,x[13],S31,0x289b7ec6)
d=HH (d,a,b,c,x[0],S32,0xeaa127fa)
c=HH (c,d,a,b,x[3],S33,0xd4ef3085)
b=HH (b,c,d,a,x[6],S34,0x4881d05)
a=HH (a,b,c,d,x[9],S31,0xd9d4d039)
d=HH (d,a,b,c,x[12],S32,0xe6db99e5)
c=HH (c,d,a,b,x[15],S33,0x1fa27cf8)
b=HH (b,c,d,a,x[2],S34,0xc4ac5665)
a=II (a,b,c,d,x[0],S41,0xf4292244)
d=II (d,a,b,c,x[7],S42,0x432aff97)
c=II (c,d,a,b,x[14],S43,0xab9423a7)
b=II (b,c,d,a,x[5],S44,0xfc93a039)
a=II (a,b,c,d,x[12],S41,0x655b59c3)
d=II (d,a,b,c,x[3],S42,0x8f0ccc92)
c=II (c,d,a,b,x[10],S43,0xffeff47d)
b=II (b,c,d,a,x[1],S44,0x85845dd1)
a=II (a,b,c,d,x[8],S41,0x6fa87e4f)
d=II (d,a,b,c,x[15],S42,0xfe2ce6e0)
c=II (c,d,a,b,x[6],S43,0xa3014314)
b=II (b,c,d,a,x[13],S44,0x4e0811a1)
a=II (a,b,c,d,x[4],S41,0xf7537e82)
d=II (d,a,b,c,x[11],S42,0xbd3af235)
c=II (c,d,a,b,x[2],S43,0x2ad7d2bb)
b=II (b,c,d,a,x[9],S44,0xeb86d391)
state[0] +=a
state[1] +=b
state[2] +=c
state[3] +=d
}
function init(){
count[0]=count[1]=0
state[0]=0x67452301
state[1]=0xefcdab89
state[2]=0x98badcfe
state[3]=0x10325476
for (i=0; i < digestBits.length; i++)
digestBits[i]=0
}
function update(b){
var index,i
index=and(shr(count[0],3) ,0x3f)
if (count[0]<0xffffffff-7)
count[0] += 8
else{
count[1]++
count[0]-=0xffffffff+1
count[0]+=8
}
buffer[index]=and(b,0xff)
if (index>=63){
transform(buffer,0)
}
}
function finish(){
var bits=new Array(8)
var padding
var i=0,index=0,padLen=0
for (i=0; i < 4; i++){
bits[i]=and(shr(count[0],(i * 8)),0xff)
}
for (i=0; i < 4; i++){
bits[i+4]=and(shr(count[1],(i * 8)),0xff)
}
index=and(shr(count[0],3) ,0x3f)
padLen=(index < 56) ? (56 - index) : (120 - index)
padding=new Array(64)
padding[0]=0x80
for (i=0;i<padLen;i++)
update(padding[i])
for (i=0;i<8;i++)
update(bits[i])
for (i=0; i < 4; i++){
for (j=0; j < 4; j++){
digestBits[i*4+j]=and(shr(state[i],(j * 8)) ,0xff)
}
}
}
function hexa(n){
var hexa_h="0123456789abcdef"
var hexa_c=""
var hexa_m=n
for (hexa_i=0;hexa_i<8;hexa_i++){
hexa_c=hexa_h.charAt(Math.abs(hexa_m)%16)+hexa_c
hexa_m=Math.floor(hexa_m/16)
}
return hexa_c
}
var ascii="01234567890123456789012345678901"+
" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
"[\\]^_`abcdefghijklmnopqrstuvwxyz{|}"+
"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"+
"¿ÀÂÃÄÅÆÇÈÉÊËÌÎÑÒÓÔÕÖ×ØÙÚÛÜ"+
"Þßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
var hash=new Array(8)
function MD5(input)
{
var l,s,k
init()
for (k=0;k<input.length;k++){
l=input.charAt(k)
update(ascii.lastIndexOf(l))
}
finish()
ka=kb=kc=kd=0
for (i=0;i<4;i++) ka+=shl(digestBits[15-i],(i*8))
for (i=4;i<8;i++) kb+=shl(digestBits[15-i],((i-4)*8))
for (i=8;i<12;i++) kc+=shl(digestBits[15-i],((i-8)*8))
for (i=12;i<16;i++) kd+=shl(digestBits[15-i],((i-12)*8))
s=hexa(kd)+hexa(kc)+hexa(kb)+hexa(ka)
return s
}
function MD5ByteArray()
{
var s,k
init()
for (k=0;k<hash.length;k++){
update(hash[k])
}
finish()
ka=kb=kc=kd=0
for (i=0;i<4;i++) ka+=shl(digestBits[15-i],(i*8))
for (i=4;i<8;i++) kb+=shl(digestBits[15-i],((i-4)*8))
for (i=8;i<12;i++) kc+=shl(digestBits[15-i],((i-8)*8))
for (i=12;i<16;i++) kd+=shl(digestBits[15-i],((i-12)*8))
s=hexa(kd)+hexa(kc)+hexa(kb)+hexa(ka)
return s
}
var passphrase=""
var newpass=""
function otpfoldregs(){
var ac,bd,i
ac=xor (kd,kb)
bd=xor(kc,ka)
for (i=3; i > -1; i--){
hash[i]=and (ac,0xff)
ac=shr(ac,8)
}
for (i=7; i > 3; i--){
hash[i]=and(bd,0xff)
bd=shr(bd,8)
}
}
function Otp(n,huella,clau){
var tmpseq=n
var mdc=MD5(huella+clau)
otpfoldregs(mdc)
while (tmpseq > 1){
mdc=MD5ByteArray()
otpfoldregs(mdc)
tmpseq--
}
return (hexa(hash[0]).substring(6,8)+hexa(hash[1]).substring(6,8)+hexa(hash[2]).substring(6,8)+hexa(hash[3]).substring(6,8)+hexa(hash[4]).substring(6,8)+hexa(hash[5]).substring(6,8)+hexa(hash[6]).substring(6,8)+hexa(hash[7]).substring(6,8))
}
function space(nu){
var sp=""
for (var s=1;s<=nu;s++){
sp=sp+" "
}
return sp
}
function EsValid (st){
var nstr="0123456789"
if (st.length>0){
for (var f=0; f<st.length; f++){
chr=st.charAt(f)
if (nstr.indexOf(chr,0)==-1){
return false
}
}
return true
} else{ return false}
}
function autenticate(seed,iter,pin,pinenc,lon){
if (lon==null||lon=="") lon=8
var seq=iter.value
var seedww =seed.value
var passphrase=pin.value
var pas=passphrase+space(lon-parseInt(pin.value.length))
if (passphrase.length<lon) otp=Otp(parseInt(seq,10),seedww,pas)
else otp=Otp(parseInt(seq,10),seedww,passphrase)
pinenc.value=otp
}
//////////////////
//ELOLGNB000500.JS
//////////////////
//Funcio per enviar el formulari d'alta online
function submit_form_aol(){
document.forms["PETICION"].PN.value="AON";
document.forms["PETICION"].PE.value="1";
document.forms["PETICION"].submit()
}
//Funcio per enviar el formulari de reactivacio de pin
function submit_olvido(){
window.open('','r_PIN1','width=850,height=800,scrollbars=yes,status=yes,resizable=yes,toolbar=yes,location=0,menubar=no,Location=yes')
with (document.forms['PETICION']){
PN.value="RPL"
PE.value="1"
target="r_PIN1"
submit()
}
}
//Funcio per canviar d'idioma
function submit_idioma(i) {
with (document.forms["LGN_IDIOMA"]){
if ((i!='01')&&(i!='02')) {
IDIOMA.value="02"
}
else IDIOMA.value=i
IDIOMA2.value=i
submit()
}}
//Funcio que es crida en el onload del login
function arranque(){
if (isMac()) setTimeout('inicia()',1000)
else inicia()
}
function sha2OK(tipoTeclado){
setCookieSHA2("SHAOK");
buttonAcep2(tipoTeclado);
}
function sha2KO(tipoTeclado){
setCookieSHA2("SHAKO");
buttonAcep2(tipoTeclado);
}
function checkImage(src,tipoTeclado){
var img=new Image();
img.onload = function() {
sha2OK(tipoTeclado);
}
img.onerror = function() {
sha2KO(tipoTeclado);
}
img.src=src+"?_="+(new Date().getTime());
}
function checkSHA2(src, tipoTeclado){
checkImage(src,tipoTeclado);
}
