function simple_elevator_handler() {
	// retrieve user input and clean it
    var old_floor; 
    var pre_old = document.getElementById("old-floor").value;
    if (pre_old == '') {
        old_floor = undefined; // try Number('') to see why I do this
    } else {
        old_floor = Number(pre_old);
    };

    var new_floor;
    var pre_new = document.getElementById("new-floor").value;
    if (pre_new == '') {
        new_floor = undefined;
    } else {
        new_floor = pre_new;
    }

    // pass user input through logic
	var result = simple_elevator(old_floor, new_floor);

	// write output to dom
    var display = document.getElementById("delta-floor");
    display.innerHTML = result;
}

function render_simple_elevator(container) {
	// get main container from dom
	var s_e_container = document.getElementById(container);

	// build sub-components
	// instructions div
	var s_e_instructions = document.createElement("p");
	s_e_instructions.innerHTML = "Elevate! enter the current floor (number) and new floor (number)";
		var s_e_restrictions = document.createElement("p");
	s_e_restrictions.innerHTML = "(psst.  There are only 4 floors -> 0, 1, 2, 3)";
	var s_e_instructions_container = document.createElement("div");
	s_e_instructions_container.appendChild(s_e_instructions);
	s_e_instructions_container.appendChild(s_e_restrictions);

	// input div
	var s_e_old_floor = document.createElement("input");
	s_e_old_floor.setAttribute("id", "old-floor");
	var s_e_new_floor = document.createElement("input");
	s_e_new_floor.setAttribute("id", "new-floor");
	var s_e_input_container = document.createElement("div");
	s_e_input_container.appendChild(s_e_old_floor);
	s_e_input_container.appendChild(s_e_new_floor);

	// button
	var s_e_button = document.createElement("button");
	s_e_button.setAttribute("id", "elevate");
	s_e_button.setAttribute("class", "customButtons");
	s_e_button.innerHTML = "Elevate!";

	// display container div
	var s_e_display_explained = document.createElement("p");
	s_e_display_explained.innerHTML = "delta floor: ";
	var s_e_display = document.createElement("p");
	s_e_display.setAttribute("id", "delta-floor");
	var s_e_display_container = document.createElement("div");
	s_e_display_container.appendChild(s_e_display_explained);
	s_e_display_container.appendChild(s_e_display);

	// build it all together
	s_e_container.appendChild(s_e_instructions_container);
	s_e_container.appendChild(s_e_input_container);
	s_e_container.appendChild(s_e_button);
	s_e_container.appendChild(s_e_display_container);

	// attach event listeners
	s_e_button.addEventListener("click", simple_elevator_handler);
}

render_simple_elevator("simple-elevator");


