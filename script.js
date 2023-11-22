import { names } from './base.js'



let a = document.querySelectorAll("a");
let edit = document.querySelectorAll(".edit")
let name = document.querySelector(".name")
let discription = document.querySelector(".discription")
let end = document.querySelector(".end")
let nameirussia = document.querySelector(".nameirussia")
let edits = document.querySelector(".edits")

for (let i = 0; i < a.length; i++) {
    a[i].onclick = function (event) {
        event.preventDefault();
        for (let j = 0; j < a.length; j++) {
            if (j !== i && a[j].classList.contains('active')) {
                a[j].classList.remove('active');
            }
        }

        if (a[i].classList.contains('active')) {
        } else {
            let textContent = a[i].textContent;

            let foundObject = names.find(obj => obj.name === textContent);

            a[i].classList.add('active');

            name.innerHTML = foundObject.name
            discription.innerHTML = foundObject.description
            end.innerHTML = foundObject.end
            nameirussia.innerHTML = foundObject.nameinrissa
            edits.innerHTML = ""

            for (let index = 0; index < foundObject.points.length; index++) {
                const element = foundObject.points[index];
                let newEdit = document.createElement("p");
                let indexf = index + 1
                newEdit.classList.add("edit");
                newEdit.textContent = indexf + ". " + element;
                edits.appendChild(newEdit);
            }
        }
    }
}


