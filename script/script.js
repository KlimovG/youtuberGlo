'use strict';
document.addEventListener('DOMContentLoaded', () => {

    // экранная клавиатура
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyBoard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top  ? '' : '50%';
        };

        const typing = event => {
            let target = event.target;

            if( target.tagName.toLowerCase() === 'button'){
                searchInput.value += target.textContent.trim();
            }

            // if( target.getElementById === 'keyboard-backspace'){
            //     searchInput.value += target.textContent;
                
            // }
            // backspace реализовать и пробел
        };

        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyBoard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);

    }

    // menu
    {

        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            sidebarMenu.classList.toggle('rollUp');
        });

        sidebarMenu.addEventListener('click', e => {
            let target = e.target;

            target = target.closest('a[href="#"]');

            if(target) {
                const parentTarget = target.parentElement;
                sidebarMenu.querySelectorAll('li').forEach(elem => {

                    // elem.classList
                    if (elem === parentTarget) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');

                    }
                });
            }
        });
    }

    // modal 
    {
        const divYoutuber = document.createElement('div');
    }








});