export function loadContact(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Contact us";

    const details = document.createElement('p');
    details.textContent = "Address: 101 Localhost Lane, Wen Server city";

    contactDiv.appendChild(title);
    contactDiv.appendChild(details);

    return contactDiv;

}