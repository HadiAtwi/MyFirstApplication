// Listen for form submit
document.getElementById('myform').addEventListener('submit',saveNote);
//Save bookmark
function saveNote(e){
    //Get form variables
    var siteTitle= document.getElementById('title').value;
    var siteContent= document.getElementById('content').value;
   if(!validate(siteTitle,siteContent)){
       return false;
}
    validate(siteTitle,siteContent)
    
    var note={
        title:siteTitle,
        content:siteContent
    }
    //Test if bookmarks is null
    if(localStorage.getItem('bookmarks')=== null){
        //Init array
        var bookmarks=[];
        //Add to array
        bookmarks.push(note);
        //Set to LocalStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{
        //Get bookmarks from local storage
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        //Add to array
        bookmarks.push(note);
        
        //Set to Local Storage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
         
    }
    document.getElementById("myform").reset();
    //validate form
    
    //reget notes
    getNotes();
    //Prevent form from submitting 
    e.preventDefault();
}
function getNotes(){
    //Get bookmarks from local storage
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    //Get output id
    var bookmarksResults=document.getElementById('bookmarksResults');
    //Build Output
    bookmarksResults.innerHTML='';
    for(var i=0; i<bookmarks.length;i++){
        var title=bookmarks[i].title;
        var content=bookmarks[i].content;
        bookmarksResults.innerHTML+='<div class="container">'+

            '<h3>'+'<ul id="myUL" style="list-style-type: none;">'+'<li>'+'<a href="#">'+title+'</a>'+'</li>'+'</ul>'+'</h3>'+
        '<p>'+content+'</p>'+
        '<h3>'+'<a onclick="deleteBookmark(\''+title+'\')" class="btn btn-danger" href="#">Delete</a>'+
        '</h3>'+
        '</div>';
    }
}
function deleteBookmark(title){
     var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0; i<bookmarks.length;i++){
        if(bookmarks[i].title==title)
            bookmarks.splice(i,1);
    }
     //setting new array
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    getNotes();
} 
function validate(siteTitle, siteContent){
   
    if(!siteTitle || !siteContent){
        alert("Please fill in the fields below");
        return false;
    }
    return true;
}
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}