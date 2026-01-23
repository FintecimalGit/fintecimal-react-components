const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SOURCE_DIR = path.join(__dirname, '../src/lib');
const DIST_DIR = path.join(__dirname, '../dist');

// Función para obtener todos los archivos recursivamente
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.match(/\.(js|jsx)$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Función para obtener la ruta correspondiente en dist
function getDistPath(sourcePath) {
  const relativePath = path.relative(SOURCE_DIR, sourcePath);
  const distPath = path.join(DIST_DIR, relativePath);
  
  // Cambiar extensión .jsx a .js si es necesario
  return distPath.replace(/\.jsx$/, '.js');
}

// Función para verificar si un archivo necesita compilación
function needsCompilation(sourcePath) {
  const distPath = getDistPath(sourcePath);

  // Si no existe en dist, necesita compilación
  if (!fs.existsSync(distPath)) {
    return true;
  }

  // Comparar timestamps
  const sourceStat = fs.statSync(sourcePath);
  const distStat = fs.statSync(distPath);

  // Si el archivo fuente es más reciente, necesita compilación
  return sourceStat.mtime > distStat.mtime;
}

// Función principal
function buildIncremental() {
  console.log('🔍 Escaneando archivos para compilación incremental...\n');

  const sourceFiles = getAllFiles(SOURCE_DIR);
  const filesToCompile = sourceFiles.filter(needsCompilation);

  if (filesToCompile.length === 0) {
    console.log('✅ Todos los archivos están actualizados. No hay nada que compilar.\n');
    return;
  }

  console.log(`📦 Compilando ${filesToCompile.length} de ${sourceFiles.length} archivos...\n`);

  // Compilar cada archivo individualmente
  filesToCompile.forEach((filePath, index) => {
    const relativePath = path.relative(SOURCE_DIR, filePath);
    const distPath = getDistPath(filePath);
    const distDir = path.dirname(distPath);

    // Crear directorio de destino si no existe
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    try {
      // Compilar archivo individual
      execSync(
        `npx babel "${filePath}" --out-file "${distPath}" --presets=@babel/preset-env,@babel/preset-react --plugins=babel-plugin-inline-dotenv`,
        { stdio: 'inherit' }
      );
      console.log(`✅ [${index + 1}/${filesToCompile.length}] ${relativePath}`);
    } catch (error) {
      console.error(`❌ Error compilando ${relativePath}:`, error.message);
    }
  });

  console.log(`\n✨ Compilación completada: ${filesToCompile.length} archivo(s) compilado(s).\n`);
}

// Ejecutar
buildIncremental();

