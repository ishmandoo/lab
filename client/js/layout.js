Template.layout.helpers({
  directories:function(){
    console.log(Directories.find({_id:Meteor.Collection.ObjectID("55a1f2c05447a5814f2784be")}).fetch())
    return Directories.find({}).fetch()
  },
  files:function(ids){
    return Notes.find({_id: {$in: ids}})
  }
});
