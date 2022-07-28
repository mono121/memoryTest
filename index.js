var fileContentArray
var fileLines
var currentLine = 0;

//fileの中身を１行ずつ配列に格納
document.getElementById('file').onchange = function(){
    
var file = this.files[0];
var reader = new FileReader();

reader.onload = function(progressEvent){    
    fileContentArray = this.result.split(/\r\n|\n/);
    fileLines = fileContentArray.length;
};
reader.readAsText(file);
};

//単語、意味の順に表示
const nextWord = () => {

    if(currentLine===fileLines){
        alert('テスト終了')  
    }else{
        if(currentLine%2 >0){
            test.innerHTML += `<h2 class='meaning'> ${fileContentArray[currentLine]} </h2>`;
        }else{
            test.innerHTML = `<h2 class='word'> ${fileContentArray[currentLine]} </h2>`;
        }
        currentLine++;
        console.log(currentLine)
    }
}

const beforeWord = () => {

        test.innerHTML = '';
        if(currentLine%2 >0) currentLine-=3
        else currentLine-=2

        test.innerHTML = `<h2 class='word'> ${fileContentArray[currentLine]} </h2>`;
        currentLine++;
    }