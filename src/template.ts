import { stores } from "./stores";

export function createHtml(games: string[]) {
  const rows = games
    .map((game) => {
      const links = stores
        .map((store) => {
          return `
                <a class="btn btn-sm btn-primary me-2" target="_blank" href="${store.buildUrl(game)}">
                    ${store.name}&nbsp;<i class="bi bi-box-arrow-up-right"></i>
                </a>
            `;
        })
        .join(" ");
      return `<tr><td>${game}</td><td>${links}</td></tr>`;
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
                background:#1b1f24;
                color:#fff;
                font-family:Arial;
                padding:40px;
            }
            .table{
                border-radius:10px;
                overflow:hidden;
                border-collapse:collapse;
                width:100%;
            }
            td,th{
                border:1px solid #ddd;
                padding:10px;
            }            
            tbody tr{
                transition:all .2s;
            }
            tbody tr:hover{
                font-weight: bold;
            }
            .navbar{
                margin-bottom:30px;
            }
            .btn{
                min-width:120px;
            }
            input{
                box-shadow:none !important;
            }
            footer{
                opacity:.7;
                padding:40px;
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

    <nav class="navbar navbar-dark bg-dark shadow">
        <div class="container-fluid">
            <span class="navbar-brand">
                <i class="bi bi-controller"></i>
                Boardgame Links
            </span>
            <span class="text-light">
                <span id="gameCount"></span> jogos
            </span>
        </div>
    </nav>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <input  id="search" class="form-control form-control-lg" placeholder="🔍 Procurar jogo">
            </div>
            <div class="col-md-6 text-end">
                <button class="btn btn-outline-primary"onclick="window.scrollTo({top:0,behavior:'smooth'})">
                    <i class="bi bi-arrow-up"></i>Topo
                </button>
            </div>
        </div>
    </div>
    <table class="table table-dark table-hover table-striped align-middle">
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
            const input = document.getElementById('search');
            const rows = Array.from(document.querySelectorAll('tbody tr'));
            const gameCount = document.getElementById('gameCount');

            const total = rows.length;

            function updateCount() {
                const visible = rows.filter(r => r.style.display !== 'none').length;
                gameCount.textContent = visible + " / " + total;
            }

            input.addEventListener('input', () => {
                const text = input.value.toLowerCase();
                rows.forEach(row => {
                    row.style.display =
                        row.innerText.toLowerCase().includes(text)
                            ? ''
                            : 'none';
                });
                updateCount();
            });
            updateCount();
        </script>
    </body>
</html>
`;
}
