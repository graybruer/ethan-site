const imageImporter = (props) => {

  // Create a context for images in the assets/images directory  
  // Parameters:  
  // - Directory path: '../assets/images' (relative to this file)  
  // - Include subdirectories? true (include files in sub-folders)  
  // - File pattern: /\.(png|jpe?g|webp|svg)$/ (match common image extensions)  
  const imageContext = require.context('../assets/galleryImages/', true, /\.(png|PNG|jpe?g|webp|svg)$/);

  // Extract image paths and filenames  
  const images = imageContext.keys().reduce((acc, key) => {

    // Extract filename (e.g., './apple.jpg' → 'apple')
    // There has to be a more efficient way to do this...
    const removeSlashes = key.replace(/\//g, '');
    const removeDashes = removeSlashes.replace(/-/g, '');
    const removeComma = removeDashes.replace(/,/g, '');
    const removeSpaces = removeComma.replace(/\s/g, '');
    const removeEnd = removeSpaces.replace(/(\w+)\.(\w+)/, '$1');
    const filename = removeEnd.replace(/\./g, '');
    // console.log(filename+' debug');

    // Map filename to the resolved image path  
    acc[filename] = imageContext(key);
    return acc;
    
  }, {});

  return images;

}

export default imageImporter;  