$gameMessage.add('��r');  //��ܤ�r
$gameMessage.setChoices(['�ﶵ1', '�ﶵ2', '�ﶵ3', ......], #);  //#:��ܹw�]�ﶵ(0:��1��,1:��2��,......) ��h�ﶵ�N......�אּ'�ﶵX'
$gameMessage.setChoiceCallback(function (choice) { // choice�����O�ﶵ['�ﶵ1', '�ﶵ2', '�ﶵ3', ......],0,1,2,......
if(choice === 0){
  ����code;
};
if(choice === 1){
  ����code;
};
})