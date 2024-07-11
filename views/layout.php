<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
    <meta property="og:title" content="GLS Ingeneria Especializada">
    <link rel="stylesheet" href="/build/css/app.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <meta property="og:image" content="/build/img/glsingenieria.jpg">

    <meta name="twitter:image" content="/build/img/glsingenieria.jpg">
    <meta name="twitter:card" content="summary_large_image">

    <meta name="description" content="Consultoria especializada en geologia, geofisica y en estudios ambientales">
    <link rel="icon" href="/build/img/favicon.ico" type="image/x-icon">
    

</head>
<body>

    <?php include_once __DIR__ . '/templates/header.php' ?>

    <div class="contenedor">
        <div class="app">
            <?php echo $contenido; ?>
        </div>
    </div>

    <?php include_once __DIR__ . '/templates/footer.php'?>

    <script src="/build/js/app.min.js"></script>
    <script src="/build/js/boostrap/boostrap.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

    <?php echo $scriptNavitacion ? : ''?>

</body>
</html>