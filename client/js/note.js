Template.note.events({
  'change .title': function(event,context) {
    Notes.update(this._id, {$set:{name:event.target.value}});
  }
});

Template.note.onRendered(function(){
  var editor = $('#summernote');
  editor.summernote({
    onChange: function(content, $editable) {
      Notes.update(Session.get('note'),{$set: {content: content}});
    }
  });
  editor.code(this.content)
});
