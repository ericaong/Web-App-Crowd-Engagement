$(function() {
	let BASE_URL = "https://cxa17-school15.sensorup.com/v1.0";

	$.ajax({
		url : BASE_URL + '/Datastreams(6)' + '/Observations?'
			+ '$top=1000' + '&' + '$skip=0',
		method : "GET",
		crossDomain : true,
		success: function(data, status, jqXHR) {
			console.log(data)

		},
		error : function(jqXHR, status, error) {
			console.log(error)
		}
	});

	$.ajax({
		url : BASE_URL + '/Datastreams(9)' + '/Observations?'
			+ '$top=1000' + '&' + '$skip=0',
		method : "GET",
		crossDomain : true,
		success: function(data, status, jqXHR) {
			console.log(data)

		},
		error : function(jqXHR, status, error) {
			console.log(error)
		}
	});

	$.ajax({
		url : BASE_URL + '/Datastreams(12)' + '/Observations?'
			+ '$top=1000' + '&' + '$skip=0',
		method : "GET",
		crossDomain : true,
		success: function(data, status, jqXHR) {
			console.log(data)

		},
		error : function(jqXHR, status, error) {
			console.log(error)
		}
	})

	$('#ajax-satisfaction').on('click', function() {
		$.get(BASE_URL + '/Datastreams(9)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {
				console.log(Number(response.value[0].result));
				$(myChart1.data.data[0]).html(response.value[0].result);
		});
	});

	$('#ajax-satisfaction2').on('click', function() {
		$.get(BASE_URL + '/Datastreams(12)/Observations' 
			+ '?' + '$orderby=phenomenonTime' + '&'
			+ '$select=result', function(response, status) {
				console.log(Number(response.value[0].result));
				$(myChart1.data.data[1]).html(response.value[0].result);
		});
	});

	// $('#ajax-ultrasonic').on('click', function() {
	// 	$.get(BASE_URL + '/Datastreams(990578)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			console.log(Number(response.value[0].result));
	// 			$('#dwell-h3').html(response.value[0].result);
	// 	});
	// });

	//Likes sensor id is 9
	//Dislikes sensor id is 12
	let ctx1 = $("#chart-satisfaction");

	let myChart1 = new Chart(ctx1, {
	    type: 'bar',
	    data: {
	    	responsive: true,
	        labels: ["Likes", "Dislikes"],
	        datasets: [{
	            label: 'Number of Votes',
	            data: [],
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


	// let ctx2 = $("#chart-motion");

	// let myChart2 = new Chart(ctx2, {
	// 	type: 'line',
	// 	data: {
	// 		labels: [],
	// 		datasets: [{
	// 			responsive: true,
	// 			data: [0, 1],
	// 			backgroundColor: 'rgba(0, 0, 0, 0)',
	// 			borderColor: 'rgba(54, 162, 235, 1)',
	// 			borderWidth: 1
	// 		}]
	// 	},
	// 	options: {
	// 		showLines: true,
	// 		elements: {
	// 			line: {
	// 				tension: 0
	// 			}
	// 		}
	// 	}
	// });
	// //This is for my motion sensor with Datastream id of 990584
	// //Posting on myChart2
	// let previousTimeForChart2;

	// $.get(BASE_URL + '/Datastreams(990584)/Observations'
	// 	+ '?' + '$orderby=phenomenonTime' + '&' 
	// 	+ '$select=phenomenonTime', function(response, status) {
	// 		let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
	// 		previousTimeForChart2 = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();

	// 		if (time === previousTimeForChart2) {
	// 			//do nothing
	// 			console.log('They are equal')
	// 		} else {
	// 			addData(myChart2, time, response.value[0].result);
	// 			myChart2.update()
	// 			previousTimeForChart2 = time;
	// 		}

	// 	});

	// //This is for motion sensor with Datastream id of 990584
	// //Posting on myChart2
	// setInterval(function() {
	// 	$.get(BASE_URL + '/Datastreams(990584)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result, phenomenonTime', function(response, status) {
	// 			let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
	// 			addData(myChart2, time, response.value[0].result);
	// 			myChart2.update()
	// 	});
	// }, 3000);



	//This is for touch 1 (Likes) with Datastream id of 9
	// Posting on myChart1
	var likes = 0;
	var dislikes = 0;
	$.ajax({
		url: BASE_URL + '/Datastreams(9)' + '/Observations?'+ '$top=1000' + '&' + '$skip=0',
		method: "GET",
		crossDomain: true,
		success: function(data, status, jqXHR) {
			data.value.forEach(function(e) {
				if (Number(e.result) === 1) {
					likes ++;
				}
			})
			myChart1.data.datasets[0].data.push(likes);
			myChart1.update();

			$.ajax({
				url: BASE_URL + '/Datastreams(12)' + '/Observations?'+ '$top=1000' + '&' + '$skip=0',
				method: "GET",
				crossDomain: true,
				success: function(data, status, jqXHR) {
					data.value.forEach(function(e) {
						if (Number(e.result) === 1) {
							dislikes ++;
						}
					})
					myChart1.data.datasets[0].data.push(dislikes);
					myChart1.update();
				}
			});
		}
	})


	// setInterval(function() {
	// 	$.get(BASE_URL + '/Datastreams(9)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			addData(myChart1, response.value[0].result);
	// 			myChart1.update()
	// 	});
	// }, 3000);

	// //This is for touch 2 (Dislikes) with Datastrean id of 12
	// // Posting on myChart1
	// setInterval(function() {
	// 	$.get(BASE_URL + '/Datastreams(12)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result', function(response, status) {
	// 			addData(myChart1, response.value[0].result);
	// 			myChart1.update()
	// 	});
	// }, 3000);

	// setInterval(function() {
	// 	$.get(BASE_URL + '/Datastreams(990584)/Observations' 
	// 		+ '?' + '$orderby=phenomenonTime' + '&'
	// 		+ '$select=result, phenomenonTime', function(response, status) {
	// 			let time = (new Date(response.value[0].phenomenonTime)).toLocaleTimeString();
	// 			addData(myChart1, time, response.value[0].result);
	// 			myChart1.update()
	// 	});
	// }, 3000);



	function addData(chart, data) {
	    chart.data.datasets.forEach((dataset) => {
	    	console.log(dataset);
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

	function addDataWithLabel(chart, label, data) {
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data);
		});
		chart.update();
	}

	$.ajax({
		url : BASE_URL + '/Datastreams(18)' + '/Observations?'
			+ '$top=1000' + '&' + '$skip=0',
		method : "GET",
		crossDomain : true,
		success: function(data, status, jqXHR) {
			$('.footfallUpdatable').html(String(data.value.length));
			console.log(data.value.length);

		},
		error : function(jqXHR, status, error) {
			console.log(error)
		}
	});

	$.ajax({
		url : BASE_URL + '/Datastreams(15)' + '/Observations?'
			+ '$top=1000' + '&' + '$skip=0',
		method : "GET",
		crossDomain : true,
		success: function(data, status, jqXHR) {
			$('.motionUpdatable').html(String(data.value.length));
			console.log(data.value.length);

		},
		error : function(jqXHR, status, error) {
			console.log(error)
		}
	});

	function isoToDate(time) {
		dateTime = time.split("T");
		date = dateTime[0].split("-");
		year = Number(date[0]);
		month = Number(date[1]);
		day = Number(date[2]);
		if (dateTime[1].includes("+") === true) {
			timeUTC = dateTime[1].split("+");
			time = timeUTC[0].split(":");
			hour = Number(time[0]);
			minute = Number(time[1]);
			second = Number(time[2]);
			utc = timeUTC[1].split(":");
			addedHours = Number(utc[0]);
			addedMinutes = Number(utc[1]);
		} else if (dateTime[1].includes("Z") === true) {
			timeUTC = dateTime[1].slice(0, dateTime[1].length - 1);
			time = timeUTC[0].split(":");
			hour = Number(time[0]);
			minute = Number(time[1]);
			second = Number(time[2]);
			addedHours = 0;
			addedMinutes = 0;
		} else {
			time = timeUTC[0].split(":");
			hour = Number(time[0]);
			minute = Number(time[1]);
			second = Number(time[2]);
			addedHours = 0;
			addedMinutes = 0;
		}
		let toReturn = new Date(year, month, date, hour, minute, second);
		return toReturn
	}

	var dwellTimes = [];
	var dwellTime = 0;

	$.ajax({
		url : BASE_URL + '/Datastreams(6)' + '/Observations?'
			+ '$top=1000' + '&' + '$skip=0',
		method : "GET",
		crossDomain : true,
		success: function(data, status, jqXHR) {
			for (let i=0;i<data.value.length;i++){
				if (Number(data.value[i].result)<120){
					dwellTime+=7;
				}
				else if (dwellTime>0){
					dwellTimes.push(dwellTime);
					dwellTime = 0;
				}
			}
		},
		error : function(jqXHR, status, error) {
			console.log(error)
		}
	}).done(function() {
		console.log(dwellTimes);
		let averageDwellTime = dwellTimes.reduce(function(a,b){
			return a+b;
		}) / dwellTimes.length;

		$('#dwell-h3').html(averageDwellTime);

	});
});






























