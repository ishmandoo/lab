Template.directory.helpers({
  directories:function(ids){
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
      var newFileList = dir.fileList;
      newFileList.push(id);
      Directories.update(dir._id,{$set: {fileList:newFileList}})
    });
  },
  "click #newDir": function() {
    var dir = this;
    Directories.insert(
    {name:'directory',
    fileList: [],
    dirList: []},
    function (err, id) {
      var newDirList = dir.dirList;
      newDirList.push(id);
      Directories.update(dir._id,{$set: {dirList:newDirList}})
    });
  }
});


Template.directory.rendered = function(){
  console.log(this)
  this.$('.ui.accordion').first().accordion({
    duration:0,
    closenested:false
  });
  //  selector: {
  //    trigger: ".menuIcon"
  //  }
  //})
  this.$('.ui.dropdown').dropdown()
};
