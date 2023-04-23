export const convertToBase64 = (file: File) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onload = () => {
    resolve(fileReader.result);
  };

  fileReader.onerror = (error) => {
    reject(error);
  };
  fileReader.onloadend = () => {
    return fileReader.result.toString()
  }
});
