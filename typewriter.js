var i = 0;
var typeSpeed = 150;
var type_id = document.getElementById("type");
var text = type_id.innerHTML;
text = text.replaceAll(" ","\xa0").replaceAll("\<br>",'\n');
type_id.innerHTML = "";
type_id.style.display = "inline";

function starttyping(){
	if(i < text.length){
		type_id.innerText += text.charAt(i);
		i++;
		setTimeout(starttyping, typeSpeed);
	}
}