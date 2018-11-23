// Listen for form submit
document.getElementById('myform').addEventListener('submit',saveNote);
//Save bookmark
function saveNote(e){
    var siteTitle= document.getElementById('title').value;
    var siteContent=document.getElementById('content').value;
    var note={
        title:siteTitle,
        content:siteContent
    }
    if(localStorage.getItem('notes')===null){
       var notes=[];
        notes.push(note);

        localStorage.setItem('notes',JSON.stringify(notes));
    }else{
        var notes=JSON.parse(localStorage.getItem(notes));
        notes.push(note);
        localStorage.setItem('notes',JSON.stringify(notes));
        
    }
    e.preventDefault();
}
function getNote(){
    var notes=JSON.parse(localStorage.getItem(note));
    var notesResults= document.getElementById('notesResults');
    notesResults.innerHTML='';
    for(var i=0; i<notes.length;i++){
        var title=notes[i].title;
        var content=notes[i].content;
        notesResults.innerHTML+='<div>'+'<h3>'+title+'</h3>'+'</div>'+
        '<a onclick="deleteBookmark(\''+title+'\')" class="btn btn-danger" href="#">Delete</a>'+
        '</h3>'+
        '</div>';
    }
}
