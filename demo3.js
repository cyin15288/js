$(function(){
	/*var date=new Date();
	date.setDate((date.getDate()+7));
	document.cookie='user='+encodeURIComponent('陈印')+';expires='+date;
	alert(decodeURIComponent(document.cookie));
	$('div').bind({
		mouseout:function(){
			alert("out");
		},
		mouseover:function(){
			alert("over");
		}
	});
		$('input').click(function(e){
		e.stopPropagation();
		console.log(e);
		alert('input');
	});
	$('div').click(function(){
		alert('div');
	});
	$(document).click(function(){
		alert('document');
	});
		$('a').click(function(event){
		//event.preventDefault();
		alert('baidu.com');
		return false;
	});
	$('input').click(function(e){
		//e.stopPropagation();
		console.log(e);
		alert('input');
		return false;
	});
	$('div').click(function(){
		alert('div');
	});
	$(document).click(function(){
		alert('document');
	});
$('input').click(function(e,data1,data2,data3){
		alert(data1+'|'+data2+'|'+data3.user);
	}).trigger('click',['123','abc',{user:'dawis'}]);
$('form').triggerHandler('submit');

var box=[{
	title:'a',
	num:1,
	height:175
},{
	title:'b',
	num:1,
	height:175
},{
	title:'c',
	num:1,
	height:175
}];
var json=JSON.stringify(box,['title','num'],4);
alert(json);

*/
var json='[{"name":"a","age":1},{"name":"b","age":2}]';
var box=JSON.parse(json,function(key,value){
	if(key=='name'){
		return 'Mr.'+value;
	}else{
		return value;
	}
});
console.log(box[0].name);
});
