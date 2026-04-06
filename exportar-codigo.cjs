const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'codigo_completo_src.txt');

// Extensiones de archivos a incluir (puedes agregar .json, .ts, etc si lo necesitas)
const validExtensions = ['.js', '.jsx', '.css'];

// Función recursiva para leer todos los archivos en un directorio
function walkDir(dir, callback) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        
        if (isDirectory) {
            walkDir(filePath, callback);
        } else {
            callback(filePath);
        }
    });
}

let outputContent = '';

console.log('Iniciando lectura de archivos en /src...');

try {
    walkDir(srcDir, function(filePath) {
        const ext = path.extname(filePath);
        
        if (validExtensions.includes(ext)) {
            const relativePath = path.relative(__dirname, filePath);
            const fileName = path.basename(filePath);
            const code = fs.readFileSync(filePath, 'utf8');
            
            outputContent += `// ===========================================================================\n`;
            outputContent += `// RUTA: ${relativePath}\n`;
            outputContent += `// ARCHIVO: ${fileName}\n`;
            outputContent += `// ===========================================================================\n\n`;
            outputContent += `${code}\n\n\n`;
        }
    });

    fs.writeFileSync(outputFile, outputContent);
    console.log(`✅ ¡Éxito! El código ha sido exportado a: ${outputFile}`);
} catch (error) {
    console.error('❌ Ocurrió un error al exportar el código:', error);
}
