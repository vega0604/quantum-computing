function move(id){

    currentContainer = id
    const element = document.querySelector(id);
    const offset = 16 * 6;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
    });
}