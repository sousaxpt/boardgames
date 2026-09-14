import { stores } from "./stores";

export function createHtml(games: string[]) {
  const rows = games
    .map((game) => {
      const links = stores
        .map((store) => {
          return `
                <a
                    href="${store.buildUrl(game)}"
                    target="_blank">
                    ${store.name}
                </a>
            `;
        })
        .join(" ");

      return `

<tr>

<td>${game}</td>

<td>${links}</td>

</tr>

`;
    })
    .join("");

  return `

<!DOCTYPE html>

<html>

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" rel="stylesheet">
<meta charset="UTF-8">

<title>Boardgame Links</title>

<style>

body{

font-family:Arial;

padding:40px;

}

table{

border-collapse:collapse;

width:100%;

}

td,th{

border:1px solid #ddd;

padding:10px;

}

a{

margin-right:15px;

}

input{

padding:8px;

width:300px;

margin-bottom:20px;

}

</style>

</head>

<body>

<h1>Boardgame Links</h1>

<input
id="search"
placeholder="Pesquisar...">

<table>

<thead>

<tr>

<th>Jogo</th>

<th>Lojas</th>

</tr>

</thead>

<tbody>

${rows}

</tbody>

</table>

<script>

const input=document.getElementById('search');

const rows=document.querySelectorAll('tbody tr');

input.oninput=()=>{

const t=input.value.toLowerCase();

rows.forEach(r=>{

r.style.display=r.innerText.toLowerCase().includes(t)?'':'none';

});

};

</script>

</body>

</html>

`;
}
