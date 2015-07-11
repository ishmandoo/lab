Template.noteItem.helpers({
  formattedDate:function(createdAt){
    return createdAt.toLocaleDateString()
  }
});

Template.noteItem.events({
  'click .delete':function(){
    Notes.remove(this._id)
  }
});
