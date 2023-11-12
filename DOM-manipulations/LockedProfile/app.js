function lockedProfile() {
    let firstBtn = document.getElementsByTagName('button')[0];
    let user1HiddenInfo = document.getElementById('user1HiddenFields');

    let secondBtn = document.getElementsByTagName('button')[1];
    let user2HiddenInfo = document.getElementById('user2HiddenFields');

    let thirdBtn = document.getElementsByTagName('button')[2];
    let user3HiddenInfo = document.getElementById('user3HiddenFields');

    firstBtn.addEventListener('click', () => {
        let selected = document.querySelector('input[name="user1Locked"]:checked');

        if(selected.value == 'unlock') {
            user1HiddenInfo.style.display = 'inline-block';
            if(firstBtn.textContent == 'Show more') {
                firstBtn.textContent = 'Hide it';
            } else {
                firstBtn.textContent = 'Show more';
                user1HiddenInfo.style.display = 'none';
            }
        }
    });

    secondBtn.addEventListener('click', () => {
        let selected = document.querySelector('input[name="user2Locked"]:checked');

        if(selected.value == 'unlock') {
            user2HiddenInfo.style.display = 'inline-block';
            if(secondBtn.textContent == 'Show more') {
                secondBtn.textContent = 'Hide it';
            } else {
                secondBtn.textContent = 'Show more';
                user2HiddenInfo.style.display = 'none';
            }
        }
    });

    thirdBtn.addEventListener('click', () => {
        let selected = document.querySelector('input[name="user3Locked"]:checked');

        if(selected.value == 'unlock') {
            user3HiddenInfo.style.display = 'inline-block';
            if(thirdBtn.textContent == 'Show more') {
                thirdBtn.textContent = 'Hide it';
            } else {
                thirdBtn.textContent = 'Show more';
                user3HiddenInfo.style.display = 'none';
            }
        }
    });
}