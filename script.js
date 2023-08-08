function copyText(button) {
    let text = button.parentElement.textContent;
    // remove 'Copy' (from the button) from the result string
    text = text.trim()
    let result = text.slice(0, text.length -4)
    
    navigator.clipboard.writeText(result);
}