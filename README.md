# test gateway

_Servidor en express usando node que recibe información desde cualquier dispositivo usando http y https_

## Comenzando 🚀

_Acontinuación se presentan los requisitos para instalar._

### Pre-requisitos 📋

_Tener instalado node js en tu computadora, para saber si ya lo tienes escribe en tu consola de linea de comando_

```
node -v
```

### Instalación 🔧

_Si ya tienes instalado node, es descargar las dependencias para el programa_

_Primero es instalar los paquetes_

```
npm install
```

_Para compilar si todo salió bien_

```
node app.js
```

_El programa deberá mostrar en la pantalla los puertos en los que esta escuchando_

```
server http listening port 3000!
server https listening port 8762!
```
## Endpoints

_Se tiene en total tres endpoints que se pueden acceder por el server http y https_

### url base para http: localhost:3000/{uri}
### url base para http: localhost:8762/{uri}

### /

Imprime información para saber si realmente llego la petición:

```
get example
on!
```

### /login

Recibe un json y devuelve un json con un token, aunque no se usa. La consola escribe:

```
***** get login
ip: 127.0.0.1
body information
header information
```

### /data

En este endpoint recibe un json, que debe ser el servicio a probar o gateway e impribe la información enviada al body:

```
|||| send data
ip: 127.0.0.1
body information
header information
```


## Construido con 🛠️

* Express JS - El framework web usado
* NPM - Manejador de dependencias

