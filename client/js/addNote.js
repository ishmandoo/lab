Template.addNote.events({
  'click button':function(){
    Notes.insert(
      {name:'untitled note',
      content:'new note',
      createdAt:new Date()},
      function (err, id) {
        Router.go("/notes/"+id)
      }
    )
  }
});
