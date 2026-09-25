/* =========================================
   SAFE TEXT ANIMATION PREPARATION
========================================= */

function prepareTextAnimation() {
    const animatedElements = document.querySelectorAll(".animated-heading, .animate-text");
    animatedElements.forEach(element => {
        if (!element.dataset.originalHTML) {
            element.dataset.originalHTML = element.innerHTML;
        }
    });
}

function resetAnimatedText(slideElement) {
    const animatedElements = slideElement.querySelectorAll(".animated-heading, .animate-text");
    animatedElements.forEach(element => {
        if (element.dataset.originalHTML) {
            element.innerHTML = element.dataset.originalHTML;
        }
    });
}

function animateSlideText(slideElement) {
    resetAnimatedText(slideElement);
    const animatedElements = slideElement.querySelectorAll(".animated-heading, .animate-text");
    
    let globalCharIndex = 0;

    animatedElements.forEach(element => {
        const processNode = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.nodeValue;
                if (!text.trim()) return;

                const fragment = document.createDocumentFragment();
                const words = text.split(/(\s+)/);

                words.forEach(word => {
                    if (/^\s+$/.test(word)) {
                        fragment.appendChild(document.createTextNode(word));
                    } else if (word.length > 0) {
                        const wordSpan = document.createElement("span");
                        wordSpan.className = "word";

                        for (let i = 0; i < word.length; i++) {
                            const charSpan = document.createElement("span");
                            charSpan.className = "char";
                            charSpan.textContent = word[i];
                            charSpan.style.animationDelay = `${globalCharIndex * 0.025}s`;
                            globalCharIndex++;
                            wordSpan.appendChild(charSpan);
                        }
                        fragment.appendChild(wordSpan);
                    }
                });

                node.parentNode.replaceChild(fragment, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                Array.from(node.childNodes).forEach(processNode);
            }
        };

        Array.from(element.childNodes).forEach(processNode);
    });
}
