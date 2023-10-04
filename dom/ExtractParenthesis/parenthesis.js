function extract(content) {
    let contentElement = document.getElementById('content').textContent.trim();

    let str = '';
    let counter = 0;
    let result = [];
    
    for(let i = 0; i < contentElement.length; i++) {
        if(contentElement[i] == '(') {
            counter = 1;
            continue;
        }
        
        if(contentElement[i] == ')') {
            result.push(str);
            str = '';
            counter = 0;
        }
        
        if(counter == 1) {
            str += contentElement[i];
        }
    }

   return result.join('; ');
}