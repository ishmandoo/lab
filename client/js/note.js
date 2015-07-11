Template.note.events({
  'change .title': function(event,context) {
    Notes.update(this._id, {$set:{name:event.target.value}});
  },
  'change #summernote': function(event, context) {
    console.log('change');
  }
});

Template.note.rendered = function(){
  console.log("test")
  var editor = $('#summernote')
  editor.summernote();
  editor.code(this.content)
}
