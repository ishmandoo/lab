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
    Notes.update({_id:event.target.attributes.noteid}, {$set:{name:event.target.value}});
  }
});
