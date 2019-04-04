//userImage地址
var dataURL;

function updateUserImg() {
	$("#updateuserImg").change(function() {
		var $file = $(this);
		var fileObj = $file[0];
		var windowURL = window.URL || window.webkitURL;
		var $img = $("#preview");
		if(fileObj && fileObj.files && fileObj.files[0]) {
			dataURL = windowURL.createObjectURL(fileObj.files[0]);
			$img.attr('src', dataURL);
		} else {
			dataURL = $file.val();
			var imgObj = document.getElementById("preview");
			// 两个坑:
			// 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
			// 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
			imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
			imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

		}
	});
}

function updateAllUserImg() {
	$(".img-circle").attr('src', dataURL);
}
$(".card-body li").click(function() {
	$("#carouselControls").css("display", "none");
	$(".main-rightpage").css("display", "flex");
	$(".hidepage-item-label").text($(this).text());
})
$(".hidepage-item-name").click(function() {
	$(".Item-inform").css("display", "block");
})

var liNum = $("#lyric .tabPane ul").children("li");
var a=liNum.length;
//console.log("长度:"+liNum.length+"  type:"+typeof(liNum.length));
var b = new Array();
function del() {
	for(i = 0; i <a; i++) {
		b[i] = parseInt($("#li"+i).css("top"));
	}
}
setTimeout("del()", 1);
function rolTab() {
	for(i = 0; i <a; i++) {
		b[i] = b[i] - 1;
		if(b[i] == -60) {
			p = (i + 1) % a;
			$("#li"+i).html($("#li"+p).html());
			$("#li"+i).css("top","420px");
			b[i] = 420;
		}
		$("#li"+i).css("top",b[i] + "px");
	}
}
setInterval("rolTab()", 24);
