const shadows = document.querySelectorAll(".shadow")
const options = document.querySelectorAll(".option");



//Losowanie 
function sss() {
    let lot = Math.floor(Math.random() * 4);

    let choise = options[lot].classList.remove("invisible");

    this.addEventLisener("dragstart", dragStart);
    this.addEventLisener("dragend", dragEnd);


    function dragStart() {
        setTimeout(() => this.classList = "invisible", 4000)
    }

    function dragEnd() {

    }
}



sss()