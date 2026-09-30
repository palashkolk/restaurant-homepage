export function loadMenu(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Our premium Selection";

    const item = document.createElement('div');
    item.classList.add('menu-item');
    item.innerHTML = `<h3>DOM manipulation curry</h3><p>Freshly query-selected pasta tossed with event listener sauce.</p>`;

    menuDiv.appendChild(title);
    menuDiv.appendChild(item);

    return menuDiv;

}