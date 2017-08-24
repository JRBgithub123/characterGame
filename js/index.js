$(function(){
	var keyGame={
		init:function(){
			this.tip=$('.tip');
			this.char=$('.char');
			this.account=$(".account");
			this.false=$(".false");
			this.true=$(".true");
			this.correct=$(".correct");
			this.timer=$('.timer');

			this.keycode=65;

			this.num=0;  //记录输入总个数
			this.numFalse=0;//记录错误的个数
			this.numTrue=0;//记录正确的个数

			this.keydown();

		},
		keydown:function(){

			var that=this;
			//键盘点击事件要绑定document
			$(document).keydown(function(e){
				that.num++;
				//e为键盘事件对象  e.which得到键码 65-90
				if(e.which==that.keycode){
					that.nextC();
					that.numTrue++;
					that.true.html("正确个数"+that.numTrue);
				}else if(e.which!=that.keycode){
					that.numFalse++;
					that.false.html("错误个数"+that.numFalse);
				}
				that.char.html(String.fromCharCode(e.which));
				that.account.html("总计"+that.num);
				that.correct.html("正确率"+(that.numTrue/that.num*100).toFixed(2)+"%");

			})
		},
		nextC:function(){
			var that=this;
			//得到65-90 之间的数字
			//65-90  => 0-25 + 65
			var num=parseInt(Math.random()*1000%26+65);
			this.keycode=num;
			this.tip.html(String.fromCharCode(num));
		}



	}

	keyGame.init();

	var n=60;
	var timer;
	timer=setInterval(function(){
		n--;

    	if(n<=10&&n>0){
			$(".timer").addClass("color");
		}else if(n<=0){
			$(".content").html("请停止答题");
			clearInterval(timer);
		}

		$(".timer").html("倒计时"+n)
	},1000)


});