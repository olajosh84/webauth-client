export default function Faq ({id, question, answer}) {
    
    const toggleAnswer = (e) => {
        const faqs = Array.from(document.querySelectorAll('.faq'));
        let targetEl = e.currentTarget;
        targetEl.parentNode.classList.toggle('show-answer');
        let faqAnswerContainer = targetEl.nextElementSibling;
        let faqAnswerHeight = faqAnswerContainer.firstElementChild.getBoundingClientRect().height;
        if(targetEl.parentNode.classList.contains('show-answer')){
            faqAnswerContainer.style.height = `${faqAnswerHeight}px`;
        } else {
            faqAnswerContainer.style.height = '0px';
        }
        /**remove 'show-answer' class for all except the target element */
        faqs.forEach(faq => {
            if(faq !== targetEl.parentNode){
                faq.classList.remove('show-answer');
                faq.lastElementChild.style.height = '0px';
            }
        })
    }
   
    return (
        <div className="bg-white dark:bg-gray-950 shadow-lg rounded-lg p-3 faq">
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleAnswer}>
                <p className="text-lg first-letter:uppercase">{question}</p>
                <span className="faq-plus-icon">
                    <i className="fa-solid fa-plus"></i>
                </span>
                <span className="faq-minus-icon hidden">
                    <i className="fa-solid fa-minus"></i>
                </span>
            </div>
            <div className="overflow-hidden h-0 transition-all ease-in-out duration-1000">
                <div className="text-sm text-justify border-t py-2 mt-2 faq-answer">
                    {answer} 
                </div>   
            </div>
        </div>
    )
}