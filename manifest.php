<?php
header('Content-Type: application/manifest+json');
header('Cache-Control: no-cache, no-store, must-revalidate');

// Slug aus Query-Parameter (bevorzugt) oder Referer
$slug = '';
if (!empty($_GET['slug'])) {
    $slug = preg_replace('/[^a-z0-9\-]/', '', strtolower($_GET['slug']));
} else {
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if ($referer) {
        $path = parse_url($referer, PHP_URL_PATH);
        $parts = array_filter(explode('/', trim($path, '/')));
        $reserved = ['index.html','backend.html','taktikboard-2d.html','taktikboard-3d.html'];
        foreach ($parts as $part) {
            if (!in_array($part, $reserved) && strpos($part, '.') === false) {
                $slug = $part;
                break;
            }
        }
    }
}

$startUrl = $slug ? '/' . $slug : '/';

echo json_encode([
    'name' => 'Kadrivo Vereinsmanager',
    'short_name' => 'Kadrivo',
    'description' => 'Mobile Webapp fuer Mannschaft, Termine, Abstimmungen und Mitteilungen.',
    'id' => $startUrl,
    'start_url' => $startUrl,
    'scope' => '/',
    'display' => 'standalone',
    'display_override' => ['standalone', 'minimal-ui', 'browser'],
    'orientation' => 'portrait',
    'background_color' => '#f6f8f6',
    'theme_color' => '#155e3b',
    'categories' => ['sports', 'productivity'],
    'icons' => [
        ['src' => '/kadrivo-icon-192.png', 'sizes' => '192x192', 'type' => 'image/png', 'purpose' => 'any'],
        ['src' => '/kadrivo-icon-512.png', 'sizes' => '512x512', 'type' => 'image/png', 'purpose' => 'any maskable'],
    ]
], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
