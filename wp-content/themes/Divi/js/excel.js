
var name = "罗敏 王小猫 周长英  潘祖银      刘玉珍   陈爱莲 蔡莉 周长英    刘治华  胡兆艺   艾薇薇  余晴霞    吴米多  刘治华  周长英  黄春云 张宝怡 刘治华  周长英  袁婷 赵凤云 赵凤云 杨柳 袁婷 刘洁 甜蜜 陈颖 李文婷 刘娜 谢兵兵 王成霞 张艳君 马静 肖湘贻 张琼 田聪 刘冬 张寰 蔡莉 廖鹏云  方娜  胡国庆 赵凤云 胡兆艺 Amy  钱笑  王敏  周长英  刘静芬 吕开艳 周长英    潘祖银    黄玮  张彩云 陈辰  熊英 文娟华 魏莉蓉 赵宏丽  赵宏丽  邓甜甜";
var nameArr = name.split(" ");


var num = "TM004345894301 TM004345893701 TM004345878201  TM004345878001      TM004345875901   TM004345875601 TM004345870701 TM004345869901    TM004345869201  TM004345405201   TM004345404001  TM004345402901    TM004345401201  TM004345398201  TM004345397701  TM004345185201 TM004345184901 TM004345184701  TM004345184401  TM004345072601 TM004345071501 TM004345071301 TM004345071201 TM004345071101 TM004345070901 TM004345070801 TM004345068901 TM004345068801 TM004345068601 TM004345068501 TM004345068401 TM004345068201 TM004345068101 TM004345065501 TM004345065401 TM004345065301 TM004345065201 TM004345065101 TM004345065001 TM004345064901  TM004344888201  TM004344885501 TM004344878701 TM004344877901 TM004344877801  TM004341916601  TM004341915501  TM004341915201 TM004341912701 TM004341696001    TM004341695301    TM004341693601  TM004341692201 TM004341692101  TM004341692001 TM004341691901 TM004341691801 TM004341691701  TM004341691601  TM004341691501";
var numArr = num.split(" ");

function findNum(name, index) {

	var userName = document.getElementById("recName").value; 
	

	 if(name == userName && userName != ""){
		
	 	var ans = numArr[index];
	 	return ans; 
	}
	else{
		return "n";
	}

	


	// var position = nameArr.indexOf(userName);
	// if(position!=-1){
	// 	var ans = numArr[position];
	// 	document.getElementById("name").innerHTML = ans;
	// }
	// else{
	// 	document.getElementById("name").innerHTML = "没有找到对应单号。";
	// }

}

function getNum(){
	// document.getElementById("name").innerHTML = nameArr.map(findNum);
	var arrAns = nameArr.map(findNum);
	var ans = [];
	var j = 0;
	for(var i =0; i<arrAns.length; i++){
		
		if(arrAns[i] != "n"){
			
			ans[j] = arrAns[i];
			j++;
		}
	}

	if(ans.length>=1){
		document.getElementById("name").innerHTML = ans+"<br>请复制单号后点击<p style=\"color:blue;\"><a href='http://www.expresstochina.com/'><u>http://www.expresstochina.com</u></a></p>查询";
	}
	else{
		document.getElementById("name").innerHTML = "没有找到对应单号";
	}
}



