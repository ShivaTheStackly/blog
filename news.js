document.getElementById("newsForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const description = document.getElementById("description").value;

  const newsList = JSON.parse(localStorage.getItem("newsList")) || [];

  newsList.push({ title, image, description });
  localStorage.setItem("newsList", JSON.stringify(newsList));

  alert("News added successfully!");
  this.reset();
});
