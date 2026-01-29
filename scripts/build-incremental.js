const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const SOURCE_DIR = path.join(__dirname, '../src/lib');
const DIST_DIR = path.join(__dirname, '../dist');
const CACHE_FILE = path.join(__dirname, '../.build-cache.json');

// Cargar caché existente o crear uno nuevo
function loadCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    }
  } catch (error) {
    console.warn('⚠️  No se pudo leer el archivo de caché, se creará uno nuevo.');
  }
  return {};
}

// Guardar caché
function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

// Calcular hash MD5 del contenido de un archivo
function getFileHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex');
}

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
function needsCompilation(sourcePath, cache) {
  const distPath = getDistPath(sourcePath);
  const relativePath = path.relative(SOURCE_DIR, sourcePath);

  // Si no existe en dist, necesita compilación
  if (!fs.existsSync(distPath)) {
    return true;
  }

  // Calcular hash actual del archivo fuente
  const currentHash = getFileHash(sourcePath);
  const cachedHash = cache[relativePath];

  // Si el hash cambió o no existe en caché, necesita compilación
  return currentHash !== cachedHash;
}

// Función para sincronizar el caché sin compilar
// Útil para inicializar el caché o después de un pull
function syncCache() {
  console.log('🔄 Sincronizando caché con el estado actual...\n');

  const cache = {};
  const sourceFiles = getAllFiles(SOURCE_DIR);
  let syncedCount = 0;
  let missingCount = 0;

  sourceFiles.forEach(filePath => {
    const relativePath = path.relative(SOURCE_DIR, filePath);
    const distPath = getDistPath(filePath);

    // Solo agregar al caché si el archivo dist existe
    if (fs.existsSync(distPath)) {
      cache[relativePath] = getFileHash(filePath);
      syncedCount++;
    } else {
      missingCount++;
    }
  });

  saveCache(cache);

  console.log(`✅ Caché sincronizado: ${syncedCount} archivo(s) registrado(s).`);
  if (missingCount > 0) {
    console.log(`⚠️  ${missingCount} archivo(s) sin compilar (no existen en dist).`);
  }
  console.log('');
}

// Función principal
function buildIncremental() {
  console.log('🔍 Escaneando archivos para compilación incremental...\n');

  const cache = loadCache();
  const sourceFiles = getAllFiles(SOURCE_DIR);
  const filesToCompile = sourceFiles.filter(file => needsCompilation(file, cache));

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
      
      // Actualizar caché con el nuevo hash después de compilar exitosamente
      cache[relativePath] = getFileHash(filePath);
    } catch (error) {
      console.error(`❌ Error compilando ${relativePath}:`, error.message);
    }
  });

  // Guardar caché actualizado
  saveCache(cache);

  console.log(`\n✨ Compilación completada: ${filesToCompile.length} archivo(s) compilado(s).\n`);
}

// Procesar argumentos de línea de comandos
const args = process.argv.slice(2);

if (args.includes('--sync')) {
  syncCache();
} else if (args.includes('--help')) {
  console.log(`
Uso: node build-incremental.js [opciones]

Opciones:
  --sync    Sincroniza el caché con el estado actual sin compilar.
            Útil después de clonar o hacer pull.
  --help    Muestra esta ayuda.

Sin opciones: Ejecuta la compilación incremental normal.
`);
} else {
  buildIncremental();
}

