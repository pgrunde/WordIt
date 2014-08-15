$(document).ready(function(){

  var phraseCount = 5;

  var wordArr = [];
  var finalString = "javascript:var words=[";

  $('.add').on("click",function(){
    phraseCount += 1;
    $('.all-phrases').append('<div class="phrase-n-count"><p class="count">'+ phraseCount.toString() +'.</p><input class="phrase" id="search_word" name="search[word]" type="text"></div>');
  });

  $('.remove').on("click", function(){
    $('.phrase-n-count').last().remove();
    if(phraseCount >= 0){
    phraseCount -=1;
    }
  });

  $('.create').on("click",function(){
    wordArr = [];
    finalString = "javascript:var words=[";
    $('.phrase').each(function(){
      wordArr.push($(this).val());
    });
    for(var i = 0; i < wordArr.length; i++) {
      if (i == wordArr.length - 1) {
        finalString += "'" + wordArr[i] + " '"
      } else {
        finalString += "'" + wordArr[i] + " ',"
      }
    }
    finalString += "];function wordit(node){if(node.nodeType===Node.TEXT_NODE){var text=node.textContent;var iam=text.replace(/\\b(\\w\\S*\\s?){1,3}/ig,function(){var idx=Math.floor(Math.random()*words.length);return words[idx];});node.textContent=iam;return;}else if(node.nodeType===Node.ELEMENT_NODE){for(var i=0;i<node.childNodes.length;++i){wordit(node.childNodes[i]);}return;}else{return;}}wordit(document.body);"
    console.log(finalString);
    $('.bookmark a').attr('href', finalString);
    $('.bookmark').slideDown();
  });

});
