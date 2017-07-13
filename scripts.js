$(function() {
	let BASE_URL = "http://scratchpad.sensorup.com/OGCSensorThings/v1.0";

	// $('#ajax-ultrasonic').on('click', function() {
	// 	$.get(BASE_URL + '/Datastreams(990578)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response.value[0].result));
	// 			$('#dwell-h3').html(response.value[0].result);
	// 	});
	// });
	
	let ctx1 = $("#chart-satisfaction");

	let myChart1 = new Chart(ctx1, {
	    type: 'bar',
	    data: {
	        labels: ["Likes", "Dislikes"],
	        datasets: [{
	            label: 'Number of Votes',
	            data: [19, 5],
	            backgroundColor: [
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(255, 99, 132, 0.2)',
	            ],
	            borderColor: [
	                'rgba(75, 192, 192, 1)',
	                'rgba(255,99,132,1)',
	                
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});

	
	function addData(chart, label, data) {
	    chart.data.labels.push(label);
	    chart.data.datasets.forEach((dataset) => {
	        dataset.data.push(data);
	    });
	    chart.update();
	}

	function removeData(chart) {
	    chart.data.labels.pop();
	    chart.data.datasets.forEach((dataset) => {
	        dataset.data.pop();
	    });
	    chart.update();
}























});

