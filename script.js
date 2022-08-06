// календарь вешаем на input
$( function() {
    $( "#datav" ).datepicker({
		dateFormat: "dd.mm.yy",
		maxDate: "5y",
		minDate: "0"
	});
});
function toogle(){
    if($('#popolneniev').css('display') == 'none')
        $('#popolneniev').show();
    else
        $('#popolneniev').hide();
}
// по клику на кнопку собираем данные 
$( document ).ready(function(){

	$( "button" ).on( "click", function(){ 
	
		var datav = $("#datav").val();
		var srokv = $("#srokv").val();
		var sumav = $("#sumav").val();
		var procentv = $("#procentv").val();
		var popolneniev = $("#popolneniev").val();
		
		//проверяем поля на соответствие условиям 
		//и сбрасываем на мин. и макс если не соответствуют
		if (srokv > 60){
			var srokv = $("#srokv").val('60');
		} else if (srokv < 1){
			var srokv = $("#srokv").val('1');
		}
		
		if (sumav > 3000000){
			var sumav = $("#sumav").val('3000000');
		} else if (sumav < 1000){
			var sumav = $("#sumav").val('1000');
		}
		
		if (popolneniev > 3000000){
			var popolneniev = $("#popolneniev").val('3000000');
		} else if (popolneniev <= 0){
			var popolneniev = $("#popolneniev").val('0');
		}
		
		if (procentv > 100){
			var procentv = $("#procentv").val('100');
		} else if (procentv < 3){
			var procentv = $("#procentv").val('3');
		}
		
		// формируем строку json 
		let data = {
		  startDate: datav,
		  sum: sumav,
		  term: srokv,
		  percent: procentv,
		  sumAdd: popolneniev
		};

		let jsonobj = JSON.stringify(data);
		
		// отправляем данные в обработчик  и получаем ответ
		$.ajax({
			type:'post',
			url:'calc.php',
			data: {trackDetails:jsonobj},
			dataType: "json",
			success: function(response) {
				console.log('SUCCESS BLOCK');
				$( "#result" ).text( response + '  руб.');
				console.log(response);
			},
			error: function(response) {
				console.log('ERROR BLOCK');
				console.log(response);
			}
		});
	});
   
});
