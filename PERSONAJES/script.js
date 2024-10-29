const container = document.getElementById('table-container');

// Función para cargar datos JSON y configurar Handsontable
const loadJSONData = async () => {
    try {
        const response = await fetch('personajes.json');
        const jsonData = await response.json();

        const hot = new Handsontable(container, {
            data: jsonData,
            colHeaders: ['ID', 'Nombre', 'Salud', 'Daño', 'Armadura', 'Velocidad'],
            columns: [
                { data: 'id', type: 'numeric' },
                { data: 'name' },
                { data: 'health', type: 'numeric' },
                { data: 'damage', type: 'numeric' },
                { data: 'armor', type: 'numeric' },
                { data: 'speed', type: 'numeric' }
            ],
            rowHeaders: true,
            licenseKey: 'non-commercial-and-evaluation',
            contextMenu: true,
            manualColumnResize: true,
            manualRowResize: true,
            filters: true,
            dropdownMenu: true,
            height: 'auto',
            width: '100%',
            minSpareRows: 1
        });

        // Evento para guardar cambios
        document.getElementById('save-changes').addEventListener('click', () => {
            const data = hot.getSourceData(); // Utiliza getSourceData() en lugar de getData()
            const jsonData = JSON.stringify(data, null, 2);

            // Crear un archivo y forzar su descarga
            const blob = new Blob([jsonData], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'personajes.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
};

// Cargar datos al inicializar
loadJSONData();
