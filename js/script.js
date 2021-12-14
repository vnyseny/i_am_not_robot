const body = document.querySelector("body");
const heading = document.createElement("h3");
const imageContainer = document.createElement("div");
const verificationContainer = document.createElement("div");
const verifyBtn = document.createElement("button");
const result = document.createElement("span");

body.append(heading);
body.append(imageContainer);
body.append(verificationContainer);

verificationContainer.append(verifyBtn);
verificationContainer.append(result);

heading.innerText = "Please select similar Images.";
verifyBtn.innerText = "Verify";
result.innerText = "Result";

imageContainer.className = "imageContainer";
verificationContainer.className = "verificationContainer";

let imgArr = ["img1", "img2", "img3", "img4", "img5"];
imgArr.push(imgArr[Number.parseInt(Math.random() * imgArr.length)]);

let selectCount = 0;

for (let data of imgArr) {
  let node = document.createElement("img");
  node.className = data;
  imageContainer.append(node);
  node.addEventListener("click", function () {
    if (this.classList.contains("selected")) {
      selectCount--;
      this.classList.remove("selected");
    } else {
      if (selectCount < 2) {
        selectCount++;
        this.classList.add("selected");
      }
    }
  });
}
verifyBtn.addEventListener("click", function () {
  const selected = document.querySelectorAll(
    "body .imageContainer img.selected"
  );
  if (selected.length < 2) {
    alert("Select atleast two images.");
  } else {
    result.innerText =
      selected[0].className == selected[1].className
        ? "Verified"
        : "Not Verifed";
  }
});
