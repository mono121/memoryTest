document.getElementById('file').onchange = function(){
    
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function(progressEvent){    
      var fileLines = this.result.split(/\r\n|\n/);

      for(var line = 0; line < fileLines.length-1; line++){
        test.innerHTML += `<h3 class='meaning'> ${fileLines[line]} </h3>`;
      }
    };
    reader.readAsText(file);
  };