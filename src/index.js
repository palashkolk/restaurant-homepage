import './style.css';

import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

//  if (process.env.NODE_ENV !== 'production') {
//    console.log('Looks like we are in development mode!');
//  }

function createNavigation() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent="Home";
    homeBtn.addEventListener('click', ()=>switchTab(loadHome()));

    const menuBtn = document.createElement('button');
    menuBtn.textContent="Menu";
    menuBtn.addEventListener('click', ()=>switchTab(loadMenu()));

    const contactBtn = document.createElement('button');
    contactBtn.textContent="Contact";
    contactBtn.addEventListener('click', ()=>switchTab(loadContact()));

    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)

    return nav;
}

function switchTab(tabContentElement){
    const content = document.getElementById('content')

    const currentTab=content.querySelector('.tab-content');
    if(currentTab){
        currentTab.remove();
    }

    content.appendChild(tabContentElement);

}

const mainContent = document.getElementById('content');
mainContent.appendChild(createNavigation());
mainContent.appendChild(loadHome());
