const button = document.getElementById('bttn');

button.addEventListener('clcik', darken);
function darken(){
    document.body.classList.toggle('darkmode')
}

document.getElementById('fileInput').addEventListener('change', function(e){
    const file = this.files[0]; 
    if(file){
    console.log(file.name);
    console.log(file.size);
    console.log(file.type);}
    else{
        console.log("No file selected.");
    }
});