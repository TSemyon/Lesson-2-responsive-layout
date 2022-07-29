window.addEventListener('DOMContentLoaded', () => {

    /* Получение элементов */
    const itemService = document.querySelectorAll('.item-service')
    const getInTouchItem = document.querySelectorAll('.getintouch__item')
    const header = document.querySelector('.header')

    /* Анимация карточек из блока Service */
    itemService.forEach((item, i) => {
        item.addEventListener('mouseenter', (event) => {
            event.target.classList.add('active')
            document.querySelectorAll('.item-service__text')[i].classList.add('active')
            document.querySelectorAll('svg path')[i].classList.add('active')
        })
    })  
    itemService.forEach((item, i) => {
        item.addEventListener('mouseleave', (event) => {
            event.target.classList.remove('active')
            document.querySelectorAll('.item-service__text')[i].classList.remove('active')
            document.querySelectorAll('svg path')[i].classList.remove('active')
        })
    })

    /* Анимация карточек из блока Get in touch */
    getInTouchItem.forEach((item, i) => {
        item.addEventListener('mouseenter', (event) => {
            event.target.classList.add('active')
            document.querySelectorAll('.getintouch-svg')[i].classList.add('active')
            document.querySelectorAll('.item-getintouch__button')[i].classList.add('active')
        })
    })
    getInTouchItem.forEach((item, i) => {
        item.addEventListener('mouseleave', (event) => {
            event.target.classList.remove('active')
            document.querySelectorAll('.getintouch-svg')[i].classList.remove('active')
            document.querySelectorAll('.item-getintouch__button')[i].classList.remove('active')
        })
    })

    /* Фиксация шапки при скролле */
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY
        if (scrollDistance > 0 && !header.classList.contains('fixed')) {
            header.classList.toggle('fixed')
            document.querySelector('.header__container').classList.add('animation')
        } else if (scrollDistance <= 0) {
            header.classList.toggle('fixed')
            document.querySelector('.header__container').classList.remove('animation')
        }
    })

    /* Анимация элементов сайта */

    document.querySelectorAll('.header-block__title').forEach(item => {
        item.classList.add('item-animation')
    })
    document.querySelectorAll('.header-block__sub-title').forEach(item => {
        item.classList.add('item-animation')
    })
    document.querySelectorAll('.advantages__item').forEach(item => {
        item.classList.add('item-animation')
    })


    function onEntry(entry) {
        let scrollDistance = window.scrollY
        entry.forEach(change => {
        if (change.isIntersecting && scrollDistance >= 0) {
            change.target.classList.add('animation');
        } else if (change.isIntersecting && scrollDistance < window.clientHeight) {
            change.target.classList.remove('animation');
        }
        });
    }
    let options = { threshold: [0.2] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.item-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }


    setTimeout(() => {
    setTimeout(() => {
        document.querySelectorAll('.animation-second').forEach(item => {
            item.classList.add('animation')
        })
    }, 500)
    document.querySelectorAll('.animation-first').forEach(item => {
        item.classList.add('animation')
    })
    }, 300)

































    /* Step это число делится на время получается шаг с которым доходит до числа за минуту 

    А время это число поделить ша наг
    */





    // const time = 1000;


    // function outNum(num, elem) {
    //     let step = Math.round(time / num)
    //     let e = document.querySelector('.test');
    //     n = 0;
    //     let t = Math.round(time / (num / step));
    //     let interval = setInterval(() => {
    //         n = n + step;
    //         if (n == num) {
    //         clearInterval(interval);
    //         }
    //         e.innerHTML = n;
    //     }, t);
    // }

    // outNum(422,'.test');


    // console.log(Math.round(400))








    /* АНИМАЦИЯ НА КЛИК */


    // getInTouchItem.forEach((item, i) => {
    //     item.addEventListener('click', (event) => {
    //         getInTouchItem.forEach(item => {
    //             if(item.classList.contains('active')) {
    //                 item.classList.remove('active')
    //                 document.querySelectorAll('.getintouch-svg').forEach(item => {
    //                     item.classList.remove('active_svg')
    //                 })
    //             }
    //         })
    //         if (event.target.classList.contains('getintouch__item')) {
    //             event.target.classList.toggle('active')
    //             document.querySelectorAll('.getintouch-svg')[i].classList.add('active_svg')
    //         }
    //     })
    // })
}) 












