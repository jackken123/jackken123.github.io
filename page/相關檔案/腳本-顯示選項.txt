$gameMessage.add('文字');  //顯示文字
$gameMessage.setChoices(['選項1', '選項2', '選項3', ......], #);  //#:表示預設選項(0:第1個,1:第2個,......) 更多選項將......改為'選項X'
$gameMessage.setChoiceCallback(function (choice) { // choice指的是選項['選項1', '選項2', '選項3', ......],0,1,2,......
if(choice === 0){
  執行code;
};
if(choice === 1){
  執行code;
};
})