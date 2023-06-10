function highlightWords(paragraph, colours) {
  const content = document.querySelector("#content");
  const selectTag = document.createElement("select");
  selectTag.setAttribute("id", "colourSelected");
  content.appendChild(selectTag);
  colours.forEach((el) => {
    const currentColour = el;
    const option = document.createElement("option");
    option.value = currentColour;
    option.innerText = currentColour;
    option.setAttribute("id", "option");
    selectTag.appendChild(option);
  });
  const pTag = document.createElement("p");
  content.appendChild(pTag);
  const newParagraph = paragraph.split(" ");
  newParagraph.forEach((el) => {
    const spanTag = document.createElement("span");
    spanTag.setAttribute("id", "spanId");
    content.appendChild(spanTag);
    spanTag.innerText = el + " ";
    pTag.appendChild(spanTag);
    spanTag.addEventListener("click", function myFunction(event) {
      var idColour = document.getElementById("colourSelected").value;
      spanTag.style.backgroundColor = idColour;
    });
  });
  const resetBtn = document.createElement("button");
  content.appendChild(resetBtn);
  resetBtn.innerText = "reset";
  resetBtn.addEventListener("click", function resetFunc() {
    window.location.reload();
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "red", "none"];
/*
const content = document.querySelector("#content");
const selectTag = document.createElement("select");
content.appendChild(selectTag);
const option = document.createElement("option");
option.innerText = "option1";
selectTag.appendChild(option);
const p = document.createElement("p");
content.appendChild(p);
*/
highlightWords(paragraph, colours);
