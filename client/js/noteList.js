Template.noteList.helpers({
  notes: function () {
    return Notes.find({});
  }
});
Template.noteList.rendered=function(){
  var self=this;
  self.$('.ui.accordion').accordion()
}
