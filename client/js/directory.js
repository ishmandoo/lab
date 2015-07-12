Template.directory.helpers({
  directories:function(ids){
    console.log(Directories.find({_id: {$in: ids}}).fetch())
    return Directories.find({_id: {$in: ids}}).fetch()
  },
  files:function(ids){
    return Notes.find({_id: {$in: ids}}).fetch()
  }
});



Template.directory.events({
  "click #newFile": function() {
    var dir = this;
    Notes.insert(
    {name:'untitled note',
    content:'new note',
    createdAt:new Date()},
    function (err, id) {
      var newFileList = dir.fileList.push(id);
      Directories.update(dir.id,{$set: {fileList:newFileList}})
    });
  },
  "click #newDir": function() {
    var dir = this;
    Notes.insert(
    {name:'directory',
    fileList: [],
    dirList: []},
    function (err, id) {
      var newDirList = dir.dirList.push(id);
      Directories.update(dir.id,{$set: {dirList:newDirList}})
    });
  }
});

Template.directory.rendered=function(){
  this.$('.ui.accordion').accordion({
    selector: {
      trigger: "#menuIcon"
    }
  })
  this.$('.ui.dropdown').dropdown()
}
