var input = document.querySelector("#counter"),
    chara = document.querySelector("#chara"),
    remain = document.querySelector("#rem");


input.addEventListener("keyup", () => {
    let p = input.value.length;
    if (input.value.trim() !== "") {
        chara.innerHTML = `No of character(s) counted: ${p}`;
        remain.innerHTML = `Remaining character threshold: ${input.getAttribute('maxlength') - p}`;

    }
    else {
        chara.innerHTML = `No of character(s) counted: ${input.getAttribute('minlength')}`;
        remain.innerHTML = `Remaining character threshold: ${input.getAttribute('maxlength')}`;

    }
})