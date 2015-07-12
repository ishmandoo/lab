Template.layout.helpers({
  directories:function(){
    console.log(Directories.find({_id:"55a1f2c05447a5814f2784be"}).fetch())
    return Directories.find({_id:"55a1f2c05447a5814f2784be"}).fetch()
  },
  files:function(ids){
    return Notes.find({_id: {$in: ids}})
  }
});
