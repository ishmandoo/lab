Router.route('/',function(){
  this.render('welcome')
});

Router.configure({
  layoutTemplate:'layout'
});

Router.route('notes', function(){
  this.render('note')
})
Router.route('/notes/:id', function() {
  var note = Notes.findOne({_id: this.params.id})
  console.log(note);
  this.render('note', {data: note})
})
