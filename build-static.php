<?php

// Genera el HTML estático del sitio a partir de las vistas, igual que Router::render
// pero sin sesión ni base de datos. Uso: php build-static.php [ruta/salida.html]

$salida = $argv[1] ?? __DIR__ . '/public/index.html';

ob_start();
include __DIR__ . '/views/main/index.php';
$contenido = ob_get_clean();

ob_start();
include __DIR__ . '/views/layout.php';
$html = ob_get_clean();

if (file_put_contents($salida, $html) === false) {
    fwrite(STDERR, "No se pudo escribir $salida\n");
    exit(1);
}

echo "Generado $salida\n";
