const app = new function () {
    const Lunes = {
        Nombre: "Lunes",
        Profesional: "Ines Martinez",
        Hora: new Date(2024, 13, 14, 15, 16, 17),
        reservas: []
    };
    const Martes = {
        Nombre: "Martes",
        Profesional: "Gonzalo Perez",
        Hora: new Date(2024, 9, 10, 11, 12),
        reservas: []

    };
    const Miercoles = {
        Nombre: "Miercoles",
        Profesional: "Ariel Ruarte",
        Hora: new Date(2024, 9, 10, 11, 12),
        reservas: []

    };
    const Jueves = {
        Nombre: "Jueves",
        Profesional:"Natalia Valentino",
        Hora: new Date(2024, 7, 8, 9, 10, 11, 12),
        reservas: []

    };
    const Viernes = {
        Nombre: "Viernes",
        Profesional:"Antonella Bresolini",
        Hora: new Date(2024, 7, 8, 9, 10, 11, 12),
        reservas: []
    };

    this.turnos = [Lunes, Martes, Miercoles, Jueves, Viernes];

    this.mostrarTurnos = function() {
        var data = '<br>';
        if (this.turnos.length > 0) {
          for (i = 0; i < this.turnos.length; i++) {
            var hora = this.turnos[i].Hora.getHours() < 10 ? '0' + this.turnos[i].Hora.getHours() : this.turnos[i].Hora.getHours();
            var minutos = this.turnos[i].Hora.getMinutes() < 10 ? '0' + this.turnos[i].Hora.getMinutes() : this.turnos[i].Hora.getMinutes();
            data += '<tr>';
            data += '<td>turno:  # '+ (i+1) + this.turnos[i].Hora.toDateString() + " " + hora + ":" + minutos + '</td>';
            data += '<td><button onclick="app.Reservar(' + i + ')">Reservar</button></td>';
            data += '</tr>';
          }
        }
        console.log(data);
        document.getElementById('turnos').innerHTML = data;
        document.getElementById('turnos').style.display = 'block';
      };
}






