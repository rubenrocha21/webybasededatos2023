<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar alumnos</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="jquery-3.7.1.js"></script>
</head>
<body>
    <?php include 'menu.php'; ?>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <form action="" method="POST">
                    <div class="form-group">
                        <label for="">Nombre del alumno</label>
                        <input name="nombre" type="text"  class="form-control" place-holder="tecela el nombre del alumno">
                    </div>
                    <div class="form-group">
                        <label for="">Numero de control</label>
                        <input name="nc" type="number"  class="form-control" place-holder="tecela el numero de control del alumno">
                    </div>
                    <div class="form-group">
                        <label for="">Semestre</label>
                        <input name="semetre" type="number"  class="form-control" place-holder="tecela el semestre del alumno">
                    </div>
                   
                    <div class="form-group">
                        <label for="">EDAD</label>
                        <input name="Edad" type="number"  class="form-control" place-holder="tecela la edad del alumno">
                    </div>
                    <div class="form-group">
                        <label for="">Turno;</label>
                        <select name="turno" class="form-control">
                        <option value="">Selecciona el turno</option>
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <footer class="class text-center">
        <hr>
        CETIS 107 &copy; 2023
    </footer>
    
    <script src="js/bootstrap.js"></script>
    
</body>
</html>