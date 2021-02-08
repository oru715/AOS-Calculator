function updateForm() {

    document.getElementById("id_inputs_circle").hidden = true;
    document.getElementById("id_inputs_triangle").hidden = true;
    document.getElementById("id_inputs_rectangle").hidden = true;
    document.getElementById("id_inputs_cylinder").hidden = true;

    let shape = document.getElementById("id_shapes").value;
    console.log({shape})
    switch (shape) {

        case "circle":
            document.getElementById("id_inputs_circle").hidden = false;
            break;
        case "triangle":
            document.getElementById("id_inputs_triangle").hidden = false;
            break;
        case "rectangle":
            document.getElementById("id_inputs_rectangle").hidden = false;
            break;
        case "cylinder":
            document.getElementById("id_inputs_cylinder").hidden = false;
            break;
    }
}
function calculateArea() {
    let shape = document.getElementById("id_shapes").value;
    let radius, height
    let area = 0;
    switch (shape) {
        case "circle":
             radius = document.getElementById("id_radius").value;
            area = Math.PI * radius * radius;
            break;
        case "triangle":
            let base = document.getElementById("id_base").value;
             height = document.getElementById("id_height").value;
            area = base * height / 2;
            break;
        case "rectangle":
            let length = document.getElementById("id_length").value;
            let width = document.getElementById("id_width").value;
            area = length * width
            break;
        case "cylinder":
             radius = document.getElementById("id_radius").value;
             height = document.getElementById("id_height").value;
             area = Math.PI * 2 * radius * radius + Math.PI * 2 * radius * height
            break;
    }
    document.getElementById("id_result").innerHTML = "Area =" + area;
}







