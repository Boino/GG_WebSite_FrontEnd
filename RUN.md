# Run Guide

## Requirements
- Node.js 20+ recommended
- npm 10+

## Install
```bash
npm install
```

## Development
```bash
npm run dev
```
Default dev URL (Vite): `http://localhost:5173`

## Production Build
```bash
npm run build
```

## Preview Build
```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

## Validation Commands Used
```bash
npm run build
```

```powershell
$proc = Start-Process -FilePath npm.cmd -ArgumentList 'run','preview','--','--host','127.0.0.1','--port','4173' -PassThru
Start-Sleep -Seconds 4
$routes = @(
  '/', '/shop', '/shop-1', '/shop-balance-boards', '/shop-decoration-boards',
  '/shop-diy-kits', '/shop-evolutive-boards', '/shop-longboards',
  '/shop-small-decoration-boards-solid', '/about', '/designs-gallery',
  '/designs-gallery/project-two-ky966-c2rhs', '/contact', '/board-calculator',
  '/cart', '/shop/p/product-1-7njrk', '/shop-evolutive-boards/p/style-01-ej5na-kmr8w',
  '/shop-small-decoration-boards-solid/p/milk-dip-cup-92wf6-abmpj-6mtwz'
)
foreach($r in $routes){ (Invoke-WebRequest -Uri ("http://127.0.0.1:4173" + $r) -UseBasicParsing).StatusCode }
Stop-Process -Id $proc.Id -Force
```

All tested routes returned HTTP `200`.
