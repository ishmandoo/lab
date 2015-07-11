/*Template.note.helpers({
  name: function(id) {
    return Notes.findOne({_id:id}).name;
  },
  content: function(id) {
    return Notes.findOne({_id:id}).content;
  }
});*/

Template.note.events({
  'change .title': function(event,context) {
    Notes.update(this._id, {$set:{name:event.target.value}});
  },
  'change .content': function(event,context) {
    console.log(event.target.value)
    Notes.update(this._id, {$set:{content:event.target.value}});
  },
});
