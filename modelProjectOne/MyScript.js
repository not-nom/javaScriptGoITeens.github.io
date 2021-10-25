let form = document.querySelector("#formular")
function hello(){
    document.body.classList.toggle('show-nav');
}
function forma() {
    form.classList.add("displalist");
    form.classList.add("none");
}
function closeWindow() {
    form.classList.remove("displalist");
    form.classList.remove("none");
}