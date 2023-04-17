// java : Exception
// javascript : Error
// const array = new Array(1000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist : ${fileName}`);
  }

  return 'file contents';
}

function closeFile(fileName: string) {}

const fileName = 'not exist';
// 에러가 발생할만한 부분에서만 try로 묶어주는게 좋다.
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`cached!`);
} finally {
  closeFile(fileName);
  console.log('finally');
}
