const spinner = "/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|";
let interval = 0;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[i]);
    }, interval)
  interval += 200;
}