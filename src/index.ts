

async function main() {
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 1_000));
    console.log('Hello World');
  }
}

main();