document.addEventListener("DOMContentLoaded", function () {
  const reviews = [
    {
      product: "Smartwatch",
      productImage: "img.jpeg",
      customer: "Ritchard Dawkins",
      customerImage: "customer1.jpeg",
      ratingImage: "./images/5.jpg",
      review: "This Fibre is fantastic!.",
      status: "Approved",
      time: "just now",
    },
    {
      product: "iPhone 13 Pro Max",
      productImage: "./images/iphone.jpeg",
      customer: "John Doe",
      customerImage: "./images/man2.jpeg",
      ratingImage: "./images/5.jpg",
      review: "Great product for the price.",
      status: "Pending",
      time: "2 hours ago",
    },

    {
      product: "Apple MacBook Pro 13",
      productImage: "./images/mac.jpeg",
      customer: "John Doe",
      customerImage: "customer1.jpeg",
      ratingImage: "./images/3star.jpg",
      review: "Great product for the price.",
      status: "Approved",
      time: "2 hours ago",
    },

    {
      product: "Apple iMac 24",
      productImage: "img.jpeg",
      customer: "John Doe",
      customerImage: "customer1.jpeg",
      ratingImage: "./images/2.jpg",
      review: "Great product for the price.",
      status: "Pending",
      time: "2 hours ago",
    },
    {
      product: "razor kraken v3",
      productImage: "img.jpeg",
      customer: "John Doe",
      customerImage: "customer1.jpeg",
      ratingImage: "./images/5.jpg",
      review: "Great product for the price.",
      status: "Pending",
      time: "2 hours ago",
    },

    {
      product: "Another Product",
      productImage: "img.jpeg",
      customer: "John Doe",
      customerImage: "customer1.jpeg",
      ratingImage: "./images/3star.jpg",
      review: "Great product for the price.",
      status: "Pending",
      time: "2 hours ago",
    },
  ];

  const table = document.querySelector("table");
  const imageStyle =
    "width: 30px; height: 30px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); display:fex; align-item: center;";
  const starStyle = "width: 75px; height: 30px;";

  const tableRows = reviews
    .map(
      (review) => `
      <tr>
        <td style = "color:rgba(121, 143, 228, 1); display:flex; align-item:center"><img src="${
          review.productImage
        }" style = "${imageStyle}" >${review.product}</td>
        <td style = "color:rgba(121, 143, 228, 1);  align-items:center"><img src="${
          review.customerImage
        }" style = "${imageStyle}" >${review.customer}</td>
        <td><img src ="${review.ratingImage}" style = "${starStyle}"></td>
        <td>${review.review}</td>
       <td>${
         review.status === "Approved"
           ? '<div id ="approved">Approved</div>'
           : review.status === "Pending"
           ? '<div id="pending">Pending</div>'
           : review.status
       }</td>
        <td>${review.time}</td>
      </tr>
    `
    )
    .join("");

  table.innerHTML += tableRows;
});

function searchFn() {
  let input, filter, table, tr, td, txtValue;

  input = document.getElementById("search-product");
  filter = input.value.toUpperCase();
  table = document.getElementById("search-table");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    // Check the Products Name
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      let shouldDisplay = txtValue.toUpperCase().includes(filter);

      // Check the status (Approved or Pending)
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        shouldDisplay =
          shouldDisplay || txtValue.toUpperCase().includes(filter);
      }

      tr[i].style.display = shouldDisplay ? "" : "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const leftMenu = document.querySelector(".left-menu");

  menuToggle.addEventListener("click", function () {
    leftMenu.classList.toggle("show-menu");
  });
});
