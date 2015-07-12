Template.noteItem.helpers({
  formattedDate:function(createdAt){
    return createdAt.toLocaleDateString()
  },
  isActive: function(){
    return (this._id == Session.get('note'));
  }
});

Template.noteItem.events({
  'click .delete':function(){
    Notes.remove(this._id)
  }
});
