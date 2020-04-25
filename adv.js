window.onload = function(){
	var d = document.getElementById("d");
	var c = d.getContext("2d");
	c.font = "30px BIZ UDPGothic";
	c.textAlign = "center";
	c.fillStyle = "white";
	c.fillText("日曜数学 Advent Calendar", 300, 200);
}