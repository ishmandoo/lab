Template.addNote.events({
  'click button':function(){
    Notes.insert(
      {name:'untitled',
      content:'',
      createdAt:new Date()},
      function (err, id) {
        Router.go("/notes/"+id)
      }
    )
  }
});
