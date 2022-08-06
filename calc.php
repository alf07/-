<?php
	header('Content-type: application/json');
	if($_POST) {
		
        $obj = $_POST['trackDetails'];
		$data = json_decode($obj);
		
		$startDate = $data->startDate;
		$sum = $data->sum;
		$term = $data->term;
		$percent = $data->percent;
		$sumAdd = $data->sumAdd;
		if (empty($sumAdd)) {
			$sumAdd2 = 0;
		} else {
			$sumAdd2 = $sumAdd;
		}
		
		$daysN = 30;// надо высчитать
		$daysY = 365;
		
		//расчет по  формуле umN = sumN-1 + (sumN-1 + sumAdd) * daysN * (percent / daysY)
		$result = (int)$sum + ((int)$sum + (int)$sumAdd2) * (int)$daysN * ((int)$percent /(int) $daysY);
		$fin_result = round($result, 2);
		
        echo json_encode($fin_result);
    }
