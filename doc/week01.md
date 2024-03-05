* [X] 任务1 将hello封装成一个函数并且接受传入name变量。将其export，在另一个js文件中通过require引入，并且进行传值调用，观察输出结果。
* [X] 任务2 将多个简单函数通过module.export封装出去，在另一个j个js文件中观察，如何分别引用不同的function。

  ```
  在 Windows 系统中，当您在使用 npm 安装包时遇到类似 Error: EPERM: operation not permitted, mkdir 'D:\nodejs\node_modules\nrm' 的错误消息时，这通常是由于权限问题导致的。
  右键单击“开始”菜单，并选择“Windows PowerShell (管理员)”或“命令提示符 (管理员)”打开一个具有管理员权限的命令提示符。
  ```
* [X] 任务3 在NodeProjects文件夹中新建一个文件夹express_tutorial当作项目学习目录，在本地安装好express框架。

  ```
  以管理员权限打开一个cmd窗口 (windows)
  cd 查看当前所在目录
  e: 切换到e盘
  cd 查看当前目录; 查看是否切换到e盘

  mkdir express_tutorial 创建一个名为 express_tutorial 的文件夹作为项目学习目录
  mkdir express_module
  cd express_module
  npm install express 本地安装express框架
  ```
* [X] 任务4 全局安装express和react（虽然在本项目中可能不会使用到react）

  ```
  以管理员权限打开一个cmd窗口 (windows)
  npm install -g  express 全局安装 Express
  npm install -g create-react-app  全局安装 React (当您想在全局范围内安装 React 时，通常不会使用 npm install -g react 命令，而是使用 create-react-app 工具来创建 React 应用程序。这是因为 React 本身并不是一个命令行工具，而是一个 JavaScript 库，需要在项目中引入并使用)

  ```
* [X] 任务5 体验process.nextTick()、process.on()函数的使用，了解node的生命周期管理机制

  在 Node.js 中，`process.nextTick()` 和 `process.on()` 是两个重要的函数，用于处理事件循环和事件处理。

在 Node.js 中，`process.nextTick()` 和 `process.on()` 是两个重要的函数，用于处理事件循环和事件处理。了解这些函数的使用可以帮助您更好地理解 Node.js 的生命周期管理机制。

### 1. `process.nextTick()`

- `process.nextTick()` 方法用于在当前操作完成后，立即在事件循环的下一个阶段执行指定的回调函数。它将回调函数放置在事件队列的头部，优先于微任务队列（Promise、process.nextTick() 和 setImmediate）中的任务。
- 通常用于确保某些操作在当前操作完成后立即执行，而不会被阻塞在其他异步任务之后。
- 示例：
  ```javascript
  console.log('Start');

  process.nextTick(() => {
    console.log('Next Tick');
  });

  console.log('End');
  ```

  输出顺序为 `Start -> End -> Next Tick`。

### 2. `process.on()`

- `process.on()` 方法用于注册事件监听器，可以监听 Node.js 进程的各种事件，如 `exit`、`uncaughtException` 等。
- 可以用于处理进程中发生的异常、信号等事件。
- 示例：
  ```javascript
  process.on('exit', (code) => {
    console.log(`Node.js process exited with code: ${code}`);
  });
  ```

### Node.js 的生命周期管理机制

- Node.js 的生命周期由事件循环和事件处理机制控制。
- 在启动 Node.js 应用程序时，会执行一系列初始化操作，然后进入事件循环等待事件的发生。
- 事件循环包括不同阶段（timers、pending callbacks、idle、prepare、poll、check、close callbacks），在每个阶段执行相应的操作。
- 通过注册事件监听器，可以在不同阶段处理相应的事件。
- `process.nextTick()` 可以插入微任务队列中的任务，优先于其他异步任务执行。
- 了解事件循环和事件处理机制有助于编写高效的 Node.js 应用程序，并避免阻塞和死锁等问题。

通过使用 `process.nextTick()` 和 `process.on()` 函数，您可以更好地控制事件的执行顺序和处理进程中的各种事件。
