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

	let ctx2 = $("#chart-motion");

	let myChart2 = new Chart(ctx2, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				data: [0, 1],
				backgroundColor: 'rgba(0, 0, 0, 0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}]
		},
		options: {
			showLines: true,
			elements: {
				line: {
					tension: 0
				}
			}
		}
	});
	//This is for my motion sensor with Datastream id of 990584
	//Posting on myChart2
	let previousTimeForChart2;

	$.get(BASE_URL + '/Datastreams(990584)/Observations'
		+ '?' + '$orderby=phenomenonTime' + '&' 
		+ '$select=phenomenonTime', function(response, status) {
			previousTimeForChart2 = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();

			if (time === previousTimeForChart4) {
				//do nothing
				console.log('They are equal')
			} else {
				addData(myChart2, time, response.value[0].result);
				myChart2.update()
				previousTimeForChart2 = time;
			}

		})

	//This is for motion sensor with Datastream id of 990584
	//Posting
	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990584)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result, phenomenonTime', function(response, status) {
				let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
				addData(myChart2, time, response.value[0].result);
				myChart2.update()
		});
	}, 3000);

	setInterval(function() {
		$.get(BASE_URL + '/Datastreams(990584)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result, phenomenonTime', function(response, status) {
				let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
				addData(myChart1, time, response.value[0].result);
				myChart1.update()
		});
	}, 3000);



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

	$('#search-button')..on('click', function(e) {
		e.preventDefault();
		let text = $('#search-bar').val();
		console.log(text);

	}
}























});

