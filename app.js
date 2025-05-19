const phones = [
    { brand: "Oppo", stock: 50, sold: 45 },
    { brand: "Vivo", stock: 50, sold: 35 },
    { brand: "Samsung", stock: 35, sold: 20 },
    { brand: "Realme", stock: 60, sold: 45 },
    { brand: "Xiaomi", stock: 60, sold: 50 },
    { brand: "Infinix", stock: 60, sold: 55 }
];


const tableBody = document.getElementById("phone-table");

phones.forEach(phone => {
    const sisa = phone.stock - phone.sold;
    const row = document.createElement("tr");

row.innerHTML = `
     <td>${phone.brand}</td>
     <td>${phone.stock}</td>
     <td>${phone.sold}</td>
      <td>${sisa}</td>
`;

tableBody.appendChild(row);
});
