Template.directory.helpers({
  directories:function(ids){
    return Directories.find({_id: {$in: ids}})
  },
  files:function(ids){
    return Notes.find({_id: {$in: ids}})
  }
});



Template.directory.events({
  "click #newFile": function() {
    Notes.insert(
    {name:'untitled note',
    content:'new note',
    createdAt:new Date()},
    function (err, id) {
      var newFileList = this.fileList.push(id);
      Template.update(id,{$set: {fileList:newFileList}})
    });
  },
  "click #newDir": function() {
    Notes.insert(
    {name:'directory',
    fileList: [],
    dirList: []},
    function (err, id) {
      var newDirList = this.dirList.push(id);
      Template.update(id,{$set: {dirList:newDirList}})
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
