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
* [ ] 任务5 体验process.nextTick()、process.on()函数的使用，了解node的生命周期管理机制
