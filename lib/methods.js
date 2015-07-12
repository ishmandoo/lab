Meteor.methods({
  newFile: function(id){
    Notes.insert(
    {name:'untitled note',
    content:'new note',
    createdAt:new Date()},
    function (err, id) {
      var newFileList = this.fileList.push(id);
      Template.update(id,{$set: {fileList:newFileList}})
    });
  },
  newDirectory: function(id){
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
