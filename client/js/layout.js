Template.layout.helpers({
  directories:function(){
    //console.log(Directories.find(new Meteor.Collection.ObjectID('55a20b615447a5814f2784bf')).fetch())
    return Directories.find('1').fetch();
  },
  files:function(ids){
    return Notes.find({_id: {$in: ids}})
  }
});
