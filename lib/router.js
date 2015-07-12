Router.route('/',function(){
  this.render('welcome')
  var editor = $('#summernote');
  if (editor) {
    editor.destroy();
  }
  Session.set('note','')
});

Router.configure({
  layoutTemplate:'layout',
  notFoundTemplate:'notFound',
  waitOn: function() {
  }
});

//Router.route('notes', function(){
//  this.render('note')
//})


Router.route('/notes/:id', function() {
  var note = Notes.findOne({_id: this.params.id});
  if (note) {
    this.render('note', {data: note});
  } else {
    Router.go('/notes');
  }
  if(  Meteor.isClient  ){
    registerLatexListener();
  }
  if(Session.get('note') != this.params.id && note) //Yeah if you can get in here Backwards typing happens
  {
    Session.set('note', this.params.id);

    var editor = $('#summernote');
    if (note) {
      editor.code(note.content);
    }
  }
});


function registerLatexListener(){
  $('.latex-image').on("click", function(event){
    event.stopPropagation();
    var parentdiv = $( this ).parent().parent();
    console.log(this)
    console.log(parentdiv)
    latexDiv = parentdiv.find('.latex-text')
    latexDiv.css({display: "block"});
    latexText = latexDiv.html();
    latexDiv.html( "$$" + latexText + "$"   );

    console.log("clicked image")
    this.remove();
    $('.note-image-popover').remove()
    $('.note-control-selection').remove()
    $("#summernote").summernote("focus");
  });
}
