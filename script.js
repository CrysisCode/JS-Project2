function clickMe(button) {
    let element = button.innerText;
    console.log(element);
    console.log(button);
    document.querySelector('.paragraph').innerText = button.innerText;

}

function selectLinks() {
    let oneLink = document.querySelector('.inner-div span .myLink');
    console.log(oneLink);
    let rightLink = document.querySelectorAll('.myLink');
    console.log(rightLink[1]);
}

function manipulateLinks() {
    let link2 = document.querySelector('.drugi-link');
    let link1 = link2.previousElementSibling; //prethodni slican element
    let link3 = link2.nextElementSibling; //slijedeci slicam element

    console.log(link2.innerText);
    console.log(link1.innerText);
    console.log(link3.innerText);

    let links = document.querySelector('.links');
    console.log(links.closest('div'));

    link2.setAttribute('href', 'https://www.meraba.com'); //postavlja nove atribute elementu

    console.log(link2.getAttribute('data-test')); //uzeli smo vrijednost atributa data-test iz html elementa
    link2.removeAttribute('data-test'); //ovako brišemo atribut i njegovu vrijednost iz elementa

    

}