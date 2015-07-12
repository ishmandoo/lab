Template.noteList.helpers({
  notes: function () {
    return Notes.find({});
  }
});
Template.noteList.rendered=function(){
  this.$('.ui.accordion').accordion({
    selector: {
      trigger: "#menuIcon"
    }
  })
  this.$('.ui.dropdown').dropdown()
}
