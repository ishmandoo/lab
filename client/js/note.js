Template.note.events({
  'change .title': function(event,context) {
    Notes.update(this._id, {$set:{name:event.target.value}});
  }
});


Template.note.onRendered(function(){
  var editor = $('#summernote');
  editor.summernote({
    onChange: function(content, $editable) {

      //Latex Hack

      var splitarray = content.split('$$');

      if(splitarray.length > 2){
        var latex = splitarray[1];
        var modifiedText = splitarray[0]
        modifiedText = modifiedText + '\<div style="text-align: center;" \>  \<p\> \<img style="text-align: center;" class="latex-image" src="http://chart.apis.google.com/chart?cht=tx&chl='+ latex  + '"\> \</p\>'
        modifiedText =  modifiedText + '\<div class="latex-text" style="display: none; text-align: center;"\>'  + latex + '\</div\> \</div\>'

        for(var i =2; i<splitarray.length; i++){
          modifiedText = modifiedText + splitarray[i]
        }

        editor.code(modifiedText);

        $('.latex-image').on("click", function(event){
          event.stopPropagation();
          var parentdiv = $( this ).parent().parent();
          latexDiv = parentdiv.find('.latex-text')
          latexDiv.css({display: "block"});
          latexText = latexDiv.html();
          latexDiv.html( "$$" + latexText + "$"   );
          this.remove();
          $('.note-image-popover').remove()
          $('.note-control-selection').remove()
          $("#summernote").summernote("focus");
        });
        $('button[data-event="showImageDialog"]').attr('data-toggle', 'image').removeAttr('data-event');

      }

      //End Latex Hack

      Notes.update(Session.get('note'),{$set: {content: content}});

    },
    height: 500
  });
  editor.code(this.content)


});
