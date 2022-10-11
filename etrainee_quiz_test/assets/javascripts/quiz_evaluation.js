function log_answers() {
	// returns a dictionary with all submitted answers

	// create dictionary to hold submitted answers
	var ans_dict = {}
	
	// go through all form elements
	for (var element of document.forms[0]) {

		// add new entry to dict if key not yet present
		if (!Object.keys(ans_dict).includes(element.name)) {

			// add entry ot ans_dict based on element type
			switch(element.type) {
			case "radio":
				var element_name = element.name
				// check if there is a selected radio button
				if (document.querySelector('input[name='+element_name+']:checked') !== null){
					// assign value if a button is selected
					var element_radio_val = document.querySelector('input[name='+element_name+']:checked').nextSibling.data
					ans_dict[element.name] = element_radio_val
				} else {
					// assign empty string if button not selected
					ans_dict[element.name] = ""
				}
				break;
			case "select-one":
				var element_name = element.name
				// select all elements with a given name
				var node_list = document.querySelectorAll("select[name="+element_name+"]");
				
				// gather all selected values into a string
				var out_str = ""
				for (var node of node_list) {
					out_str = out_str + " " + node.selectedOptions[0].innerText
				}
				ans_dict[element.name] = out_str
				break;
			case "textarea":
				ans_dict[element.name] = element.value
				break;
			case "range":
				ans_dict[element.name] = element.value
				break;
			case "submit":
				break;
			case "output":
				break;
			}
		}
	}
	return ans_dict
}

function collect_answer_elements() {
	//collects elements where answers are displayed
	
	// dict for collecting elements
	var out_dict = {}

	// loop through all form elements
	for (var element of document.forms[0]) {
		// check if element is used for output
		if (element.type == "output") {
			out_dict[element.id] = element
		}
	}
	return out_dict
}

function log_correct(ans_dict) {
	// collects correct answers from hidden divs
	
	// dict for collecting correct answers
	var out_dict = {}

	// loop through all form elements
	for (var key of Object.keys(ans_dict)) {
		// check if element is used for output
		var new_key = "correct_" + key
		var correct = document.getElementById(new_key).textContent
		out_dict[new_key] = correct
	}
	return out_dict
}

function check_answer(user, correct) {
	// checks if answers are correct
	// santise input
	var user_norm = user.toLowerCase().trim()
	var correct_norm = correct.toLowerCase().trim()
	
	// if answer is correct
	return  user_norm == correct_norm
}

function display_messages(answers, answers_correct, answer_elements) {
	// displays messages
	// go through individual answers
	var ans_count = {correct:0, wrong:0}
	
	for (var [key, value] of Object.entries(answers)) {
		// get correct answer
		var value_correct = answers_correct["correct_" + key]

		// get output element
		var out_element = answer_elements["output_" + key]

		// check answer
		// is the question answered?
		if (value.trim() == "") {
			out_element.value = "Please add an answer"
			out_element["style"] = "background-color: #F7DC6F; padding: 3pt 15pt;"
		// is the answer correct?
		} else if (check_answer(value, value_correct)) {
			ans_count["correct"] = ans_count["correct"] + 1
			out_element.value = "Correct, the answer is " + value_correct
			out_element["style"] = "background-color: #7DCEA0; padding: 3pt 15pt;"
		} else {
			ans_count["wrong"] = ans_count["wrong"] + 1
			out_element.value = "Sorry, the correct answer is " + value_correct
			out_element["style"] = "background-color: #F1948A; padding: 3pt 15pt;"
		}
	}
	display_overall(ans_count)
}

function display_overall(ans_dict) {
	// display the overall results
	
	// get the output element and set its style
	var overall_element = document.getElementById("output_overall")
	overall_element["style"] = "background-color: #D7DBDD; padding: 15pt;"
	// compute the number of answered questions
	var answered_questions = ans_dict["correct"] + ans_dict["wrong"]
	
	overall_element.value = "Congratulations, you had " + ans_dict["correct"] + " answers correct out of " + answered_questions + " answered questions."
}

function evaluate_quiz() {
	// log user answers
	var answers = log_answers()
	
	// log correct responses
	var ans_correct = log_correct(answers)
	
	// collect elements for answers
	var ans_elements = collect_answer_elements()
	
	display_messages(answers, ans_correct, ans_elements)
	
	//console.log(answers)
	//console.log(ans_correct)
	//console.log(ans_elements)
}