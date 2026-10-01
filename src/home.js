export function loadHome(){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Welcome to The Odin Destination";

    const copy = document.createElement('p');
    copy.textContent = "Crafting new life with the ODIN project";

    homeDiv.appendChild(title);
    homeDiv.appendChild(copy);

    return homeDiv;

}