let demo = document.getElementById('demo');

const string_check = (str1) => {
    if(str1 === null || str1 === undefined || str1.substring(0, 2) === 'Java') {
        return str1;
    }
    return 'Java' + str1;
}

demo.innerText = string_check('script');