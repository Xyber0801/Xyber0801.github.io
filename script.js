function copyText(button) {
    let text = button.parentElement.textContent;

    navigator.clipboard.writeText(text);
}