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
    console.log(this._id)
    Notes.update(this._id, {$set:{name:event.target.value}});
  }
});
