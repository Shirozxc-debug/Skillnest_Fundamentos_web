console.log("Prueba de conexion JS...")

var likesRei = 0;
var likesAsuka = 0;
var likesShinji = 0;

var rei = document.getElementById("rei");
var btn_rei = document.getElementById("btn_rei");

rei.onclick = function () {
    likesRei = likesRei + 1;
    textoLikesRei.innerText = likesRei + " like(s)";
};

var asuka = document.getElementById("asuka");
var btn_asuka = document.getElementById("btn_asuka");

asuka.onclick = function () {
    shinji= likesAsuka + 1;
    btn_shinji.innerText = likesAsuka + " like(s)";
};

var textoLikesShinji = document.getElementById("shinji");
var botonLikeShinji = document.getElementById("btn_shinji");

shinji.onclick = function () {
    likesShinji = likesShinji + 1;
    textoLikesShinji.innerText = likesShinji + " like(s)";
};