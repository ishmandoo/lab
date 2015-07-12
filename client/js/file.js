Template.file.helpers({
  formattedDate:function(createdAt){
    return createdAt.toLocaleDateString()
  }
});

Template.file.events({
  'click .delete':function(){
    Notes.remove(this._id)
  }
});
