
  function addItem(name, price) {
    alert('¡Hola ' + name + '! Bienvenido a mi página.');
  }


  
        function guardarEnJSON(nombre) {
            // Realizar una solicitud POST al servidor Node.js con los datos a guardar
            fetch('http://localhost:3000/guardar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre: nombre })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar los datos');
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    </script>
     <script>
        function guardarEnJSON2(nombre) {
            // Realizar una solicitud POST al servidor Node.js con los datos a guardar
            fetch('http://localhost:3000/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre: nombre })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar los datos');
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }


    //                         <script>
    //     function guardarEnJSON(nombre) {
    //         // Realizar una solicitud POST al servidor Node.js con los datos a guardar
    //         fetch('http://localhost:3000/guardar', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ nombre: nombre })
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Error al enviar los datos');
    //             }
    //             return response.text();
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    //     }
    // </script>
    //  <script>
    //     function guardarEnJSON2(nombre) {
    //         // Realizar una solicitud POST al servidor Node.js con los datos a guardar
    //         fetch('http://localhost:3000/agregar', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ nombre: nombre })
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Error al enviar los datos');
    //             }
    //             return response.text();
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    //     }
    // </script>