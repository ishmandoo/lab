Template.noteList.helpers({
  notes: function () {
    return Notes.find({});
  }
});
