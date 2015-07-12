Router.route('/',function(){
  this.render('welcome')
});

Router.configure({
  layoutTemplate:'layout',
  waitOn: function() {
  }
});

//Router.route('notes', function(){
//  this.render('note')
//})

Router.route('/notes/:id', function() {
    var note = Notes.findOne({_id: this.params.id});
    this.render('note', {data: note});

    Session.set('note', this.params.id);


    var editor = $('#summernote');
    if (note) {
      editor.code(note.content);
    }
});
