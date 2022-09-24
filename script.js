const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)

        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })
})
let options = {
    root: null,
    rootMargin: '400px',  // higher it is more eagerly the new DOM element gets appended
    threshold: 1.0
  }

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if(!lastCard.isIntersecting){return}
    loadMoreCards();
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))
}, options)

lastCardObserver.observe(document.querySelector('.card:last-child'))

cards.forEach(card => {
    observer.observe(card)
})


const cardcontainer = document.querySelector('.card-container');

const loadMoreCards = () => {
    for(i = 0; i < 3; i++){
        const card = document.createElement('div')
        card.textContent = 'card new ';
        card.classList.add('card')
        card.classList.add('cardnew')
        observer.observe(card)
        cardcontainer.append(card)
    }
}