 
# 公众号：安全狗的自我修养
# github.com/haidragon

# windows wdm驱动开发视频教程 
## 基础部分
* 1.驱动介绍与调试环境搭建
* 2.helloworld驱动与安装
* 3.操作系统与指针回顾  
* 4.驱动对象与设备对象
* 5.驱动框架类型分类
* 6.内存管理操作与new重载
* 7.驱动中字符串处理与数据类型
* 8.驱动的布局与设备栈 
* 9.IRQ中断与IRP包结构
* 10.驱动程序与用户通信
* 11.常用文件操作与强删文件
* 12.注册表常用操作
* 13.内核线程
* 14.内核线程等待操作
* 15.同步机制-自旋锁
* 16.同步机制-互斥体
* 17.同步机制-信号量(灯)
* 18.同步机制-事件 
* 19.内核中使用链表
* 20.IRP同步与异步原理
* 21.IRP同步完成
* 22.IRP异步完成
* 23.IRP取消例程
* 24.StartIO例程
* 25.自定义StartIO(多队列)
* 26.定时器与等待
* 27.内核IO定时器
* 28.内核DPC定时器
* 29.延时阻塞方式定时
* 30.驱动中的时间操作
* 31.IRP超时处理
* 32.DPC与工作项操作文件案例 
* 33.驱动模块之间调用
* 34.通过句柄方式同步调用驱动
* 35.通过句柄方式异步调用驱动
* 36.直接创建IRP包调用驱动
* 37.分层驱动原理介绍
* 补1.windows驱动开发之双物理机网络远程调试
* 补2.windows驱动开发之虚拟机串口调试
* 补3.windows驱动开发之双物理机usb调试 
* 38.即插即用与寻找设备
* 39.为实际硬件安装自定义驱动
* 40.用实例演示png底层原理
* 41.设备启动与设备信息
* 42.电源管理状态与转换
* 43.电源处理案例  
* 44.IO端口介绍
* 45.64位编写汇编与调用约定
* 46.汇编实现IO端口操作
* 47.pci总线介绍与获取 
* 48.usb规范与libusb介绍
* 49.usb硬件驱动案例


# WDF驱动开发视频教程 
* 0.WDF驱动开发介绍
* 1.对象的本质
* 2.双机调试开发环境搭建　
* 3.设备与驱动的层次结构
* 4.WDF写原NT式驱动 
* 5.WDF体系结构介绍
* 6.WDF对象模型
* 7.WDF上下文与宏定义
* 8.DriverEntry例程
* 9.TraceEvents日志调试
* 10.WDF驱动IO模型
* 11.打开与关闭例程
* 12.读写控制例程
* 13.特定IRP包例程处理
* 14.IRP对象封装
* 15.创建请求队列
* 16.从请求检索缓冲区
* 17.NEITHER方式IO操作
* 18.注册取消例程
* 19.IO操作Parallel模式
* 20.Manual模式与多队列
* 21.WDF驱动字符串对象
* 22.WDF驱动注册表对象
* 23.WDF同步机制
* 24.WDF内核事件处理
* 25.WDF驱动锁对象
* 26.WDF定时器对象 
* 27.利用定时器IO操作
* 28.WDF驱动工作项对象
* 29.WDF驱动中复合数据
* 30.WDF驱动内存操作
* 31.可配置设备资源对象
* 32.WDF驱动其它操作
* 33.电源管理与PNP事件
* 34.WDF单独注册WDM式IRP
* 35.wdf与wdm驱动之间通信
* 36.PCI与USB开发介绍
* 37.WDF过滤驱动介绍与案例
 
![](./img/jichu/windows驱动开发基础.png)
![](./img/jichu/2.png)
![](./img/jichu/3.png)


# windows程序开发视频教程(2023最新) 
* 0.课程介绍
## 源码阅读与书
* 1.wrk源码介绍
* 2.ReactOS源码分析
* 3.windows server 2003源码 
* 4.windows调试符号
* 5.应用程序开发相关书介绍
* 6.驱动开发与内核原理相关书介绍
* 7.其它一些相关书介绍
  
## 系统概述
* 8.windows发展与架构
* 9.windows应用程序
* 10.系统调用
* 11.进程与分类
* 12.线程与分类
* 13.系统启动(引导)
* 14.驱动、服务与模块
* 15.进程通信
* 16.线程同步
* 17.内核对象与IO操作 

## 窗口程序
* 18.第一个程序
* 19.unicode
* 20.窗口
* 21.事件与消息机制
* 22.键盘鼠标事件
* 23.输出文字
* 24.图形基础介绍
* 25.控制与交互(控件)
* 26.窗口绘画
* 27.坐标转换
* 28.时间操作
* 29.模仿迅雷实现剪切板监听
* 30.实现以管理员权限运行(提权)
* 31.其它程序介绍

## 进程
* 32.进程基础概念
* 33.进程创建案例
* 34.进程间通信介绍
* 35.信号量
* 36.共享内存
* 37.内存映射文件
* 38.消息队列
* 39.管道
* 40.邮槽
* 41.剪贴板
* 42.本地过程调用(LPC)
* 43.远程过程调用(RPC)
* 44.本地高级过程调用(ALPC)
* 45.套接字(网络)
* 46.视窗报文与其它
* 47.进程源码分析介绍
* 48.内存映射源码分析
* 49.进程结构 
* 50.进程的句柄表
* 51.进程的访问令牌  
* 52.进程Pcb结构
* 53.动态调试win11进程结构
* 54.进程PEB结构
* 55.了解进程的创建与结束

 
## 线程
* 56.线程基础概念
* 57.线程创建案例
* 58.线程同步介绍
* 59.线程同步机制-临界区
* 60.线程同步机制-互斥体
* 61.线程同步机制-信号量
* 62.线程同步机制-事件
* 63.线程同步机制-等待对象
* 64.线程同步机制-读写锁
* 65.线程同步机制-定时器
* 66.线程同步机制-条件变量
* 67.线程同步机制-其它操作
* 68.线程调试介绍
* 69.线程结构
* 70.线程本地存储TLS
* 71.线程TCB与Teb结构
* 72.动态调试与其它介绍

## 进程线程操作介绍
* 73.注入与劫持介绍
* 74.跨进程访问(附加、挂靠)
* 75.傀儡进程介绍(进程挖空)
* 76.APC机制介绍
* 77.PRocMon介绍与使用
* 78.PRocMon实现原理

## 内存
* 80.内存管理概述
* 81.页式内存管理介绍
* 82.段式内存管理介绍
* 83.windows内存管理介绍与算法介绍
* 84.windows系统内存管理介绍
* 85.windows进程内存管理介绍
* 86.MemMon工具与原理介绍
  
# I/O系统
* 87.I/O系统概述
* 88.I/O管理器介绍
* 89.驱动与驱动对
* 90.设备对象与设备栈
* 91.PNP管理器介绍  
* 92.电源管理器介绍
* 93.设备分类、列举、设备树
* 94.I/O处理流程介绍 
* 95.IRPMon工具与原理
  
# hack编程
* 96.hook原理 
* 97.windows消息hook
* 98.内联(inline)hook
* 99.64位内联hook
* 100.IAT hook
* 101.异常处理hook
* 102.hook框架
* 103.注入原理 
* 104.进程挂靠
* 105.远程线程注入 
* 106.IAT注入 
* 107.APC式注入 
* 108.反射式注入
* 109.com注入
* 110.process-hollowing
* 111.进程dump
* 111.hide进程
* 112.dll隐藏
* 113.内存加载dll
* 114.dll2shellcode
* 115.dll2exe
* 115.驱动创建用户进程

![](./img/jichu/windows程序设计与开发基础.png)
![](./img/jichu/1.png)


 
# windows上usb过滤与透传(虚拟化)视频教程 
* 0.windows上usb过滤与透传(虚拟化)视频介绍

## 基于usbview源码了解usb
* 1.usbview使用  
* 2.usbview源码编译
* 3.打开显示描述信息
* 4.魔改后的命令行版
* 5.usbview源码分析
* 6.组织usb的知识与设备打开
* 7.模仿写个设备描述符demo
* 8.驱动层实现设备描述符获取
* 9.遍历物理设备对象名称
* 10.遍历所有winobj对象
* 11.wdf驱动usb操作介绍
* 12.驱动遍历接口描述符
* 13.驱动获取厂家字符串信息

 
## 深入分析usb标准协议 
* 14.usb技术概述
* 15.USB总线结构
* 16.usb电源管理
* 17.USB架构与重要概念
* 18.BusHound分析工具使用
* 19.USBlyzer分析工具使用
* 20.USBTrace分析工具使用
* 21.USB Monitor Pro使用
* 22.USB Monitor（Device Monitoring Studio）
* 23.wireshark与其它抓包工具
* 24.USB协议描述符介绍
* 25.USB协议设备描述符
* 26.USB协议配置描述符 
* 27.USB协议接口描述符
* 28.字符串和语言ID描述符
* 29.USB协议端点描述符
* 30.USB设备其它描述符
* 31.USB帧和微帧
* 32.USB协议传输、事务与包
* 33.控制传输及事务组成
* 34.同步传输及事务组成
* 35.批量传输及事务组成
* 36.中断传输及事务组成
* 37.USB协议-事务总结
* 38.最小单位-包(组成与分类)
* 39.USB包-命令类包Token
* 40.USB包-数据类包DATA
* 41.USB包-握手类包Handshake
* 42.USB包-控制传输包结构
* 43.USB包-同步传输包结构
* 44.USB包-批量传输包结构
* 45.USB包-中断传输包结构
* 46.usb的枚举(基于windows)
* 47.usb的常用标准请求
* 48.通过libusb读取鼠标数据

 
## USBPcap源码分析    
* 49.USBPcap源码编译调试与使用
* 50.USBPcap入口函数分析
* 51.USBPcap注册成过滤驱动
* 52.AddDevice函数分析
* 53.USBPcap设备附加原理分析
* 54.png例程函数分析
* 55.动态调试验证设备附加原理
* 56.DkCreateClose函数分析
* 57.DkReadWrite函数分析
* 58.DkDevCtl函数分析
* 59.DkInDevCtl函数分析
* 60.USBPcap其它函数分析  
* 61.用户层分析(遍历主控器并获取信息) 
* 62.用户层分析(选择过滤主控器) 
* 63.usbpcap数据包获取
* 64.不重启电脑附加设备分析 
* 65.USBPcap过滤驱动总结
# 键盘鼠标过滤器
* 66.键盘过滤器原理分析
* 67.键盘过滤器代码讲解
* 68.鼠标过滤驱动
## usbdk源码分析  
* 69.云桌面开源方案使用演示 
* 70.usbdk源码编译与调试
* 71.单独提取usbdk项目源码
* 72.usbdk安装成过滤器分析
* 73.重写usbdk安装程序
* 74.usbdk与libusb操作介绍
* 75.libusb接口源码分析
* 76.usbdk整体结构跟类介绍
* 77.usbdk入口函数分析
* 78.usbdk怎么附加设备
* 79.libusb的open操作源码分析
* 80.open时候句柄被占问题
* 81.libusb的遍历设备源码分析
* 82.libusb的close操作问题
* 83.adddevice函数分析
* 84.入队列前的SetCallbacks分析
* 85.Strategy的选择
* 86.NullFilterStrategy分析
* 87.FilterStrategy分析
* 88.HubFilterStrategy分析
* 89.HiderStrategy分析
* 90.RedirectorStrategy分析 
* 91.usbdk的各种ioctls分析
* 92.usbdk的电源管理
* 93.重定向逻辑再次梳理与open问题
* 94.总结

## 虚拟总线
* 95.总线与虚拟总线介绍
* 96.虚拟总线案例演示
* 97.虚拟总线-adddevice源码分析
* 98.动态调试分析虚拟总线设备堆栈
* 99.虚拟总线-控制io源码分析
* 100.注册成虚拟总线原理分析
* 101.继续分析什么是查询总线关系
* 102.用户层简单控制代码分析
* 103.虚拟总线实现设备插源码分析
* 104.虚拟总线实现设备拔源码分析
* 105.虚拟总线实现设备弹出源码分析
* 106.pdo与fdo的pnp总结
* 107.虚拟总线-电源管理分析
* 108.虚拟总线-其它操作函数分析
* 109.功能驱动的安装问题
* 110.动态调试分析功能驱动设备堆栈
* 111.功能驱动的源码简单分析 
* 112.整个设备栈过滤驱动介绍
* 113.各层上下过滤驱动介绍与代码分析(功能驱动、总线、class类驱动)
* 114.虚拟总线总结

## usbip源码分析(windows)
### 整体架构
* 115.usbip介绍(USB透传) 
* 116.windows上usbip测试
* 117.回顾虚拟usb总线原理
* 118.usbip整个项目代码构架了解
* 119.设备的属性信息获取
* 120.再次理解(pci、usb总线、根设备、主控制器、控制器、集线器) 
   
 
### 虚拟总线
* 121.源码调试分析与adddevice函数简单了解
* 122.vhci-初步了解usbip设备栈
* 123.vhci-简单了解下各FDO和PDO设备数据类型
* 124.vhci-虚拟根设备FDO创建过程
* 125.vhci-虚拟控制器PDO创建过程
* 126.vhci-虚拟根设备png查询处理
* 127.vhci-虚拟控制器FDO创建过程
* 128.vhci-虚拟集线器PDO创建过程
* 129.vhci-虚拟控制器png查询处理
* 130.vhci-虚拟集线器FDO创建过程
* 131.vhci-虚拟集线器子设备PDO创建过程
* 132.vhci-虚拟集线器png查询处理
* 133.vhci-MN_START_DEVICE
* 134.vhci-MN_REMOVE_DEVICE
* 135.vhci-process_pnp_vpdo
* 136.vhci-RESOURCE相关 
* 137.vhci-ioctl操作
* 138.vhci-读写操作
* 139.vhci-其它操作处理

### 客户端

* 140.stub-创建与关闭源码分析
* 141.stub-adddevice源码分析
* 142.stub-读写例程源码分析
* 143.stub-控制io源码分析
* 144.stub-电源与pnp源码分析
* 145.用户程序-安装信息获取分析
* 146.怎么透传设备(本地处理)
* 147.数据通信逻辑

 
### usb安全管控

* 148.usb管控介绍
* 149.usb管控常用方案介绍  
* 150.遍历所有usb设备路径与id
* 151.遍历所有硬盘(存储)设备路径
* 152.遍历所有盘符(卷)
* 153.安全弹出盘符对应的U盘
* 154.usb设备与盘符映射 应问题
* 155.usb唯一标识符问题
* 156.多方案重置usb(restart) 
* 157.usbtreeview逆向分析
* 158.usb用户层操作api注意事项
* 159.设备常规状态获取
* 160.从xp到win11通用性问题
* 161.驱动层-usb管控设计
* 162.驱动层-过滤层级问题
* 163.驱动层-单机版黑白名单问题
* 164.驱动层-联网版项目设计介绍
* 165.驱动层-usb管控绕过对抗问题
* 166.pnpmgr管理器介绍
* 167.如何找到pnpmgr相关代码
* 168.pnpmgr代码自举(整个系统第一个设备创建)
* 169.设备管理器分析所有设备关系树
* 170.pnpmgr加载注册的所有设备
* 171.windows内核启动流程
* 172.usbstor介绍
* 173.usbstor源码分析
* 174.什么时候IRP会自下而上
* 175.usbstor的PNP处理
* 176.usbstor当栈底(创建子代PDO)
* 177.usbccgp通用驱动介绍
* 178.源码调试usbstor与usbccgp
* 179.为何U盘通过盘符获取不了十六进制的vid与pid 
* 180.解决通过盘符也能获取十六进制的vid与pid
 
* 补1.usbdk源码分析-所有设备列表
* 补2.修复hub复合设备重向定后bug(拔掉设备usbdk设备列表还在)
* 补3.虚拟总线怎么出pdo的原理分析
* 补4.某sxf大厂usb透传客户端解决方案逆向分析
 

![](./img/usb/windows上usb过滤与透传\(虚拟化\)视频教程.png)
![](./img/usb/1.png)


# windows游戏安全

![](./img/game/windows游戏安全.png)

# windbg高级使用

![](./img/windbg/windbg高级视频教程.png)

# windbg高级视频教程
* 0.windbg高级视频教程介绍

公众号:安全狗的自我修养
vx:2207344074
gitee.com/haidragon
bilibili:haidragonx

## 基础篇(windbg基础)
* 1.常用调试器介绍   
* 2.Windbg安装与窗口熟悉
* 3.调试启动第一个程序
* 4.程序执行的原理与线程操作
* 5.设置调试符号与内存转储
* 6.进程查看与变量查看 
* 7.调试器命令帮助与分类 
* 8.符号路径与匹配问题(noisy与quiet)
* 9.堆栈查看!analyze -v与stack
* 10.Sympath命令 
* 11.调试器扩展命令
* 12.命令x与ln
* 13.命令r与k
* 14.命令e与u
* 15.dc命令
* 16.dt命令与递归转储 
* 17.双向链表与应用
* 18.dv命令
* 19.s命令
* 20.bp类命令
* 21.t、p与.logopen命令
* 22.wow64调试
* 23.调试32位、64位wow64位
* 24.32位汇编与64位汇编语言
* 25.ChildEBP、retAddr、argstochild
* 26.地址范围 
* 27.foreach命令
* 28.管道、version、vertarget
* 29.Time Travel追踪(ETW)

## 中级篇(用户模式与内核模式)
* 37.用户模式-地址转换
* 38.对象和句柄 
* 39.用户模式-内存管理 
* 40.用户模式-进程和线程 
* 41.数据结构、Win32 API和系统调用 
* 42.可移植可执行文件
* 43.用户模式-简单崩溃
* 44.进程dump
* 45.访问冲突
* 46.不同类型的异常
* 47.用户模式内存损坏-堆损坏
* 48.堆损坏案例
* 49.双重释放
* 50.用户模式-堆栈损坏
* 51.栈溢出案例
* 52.检查普通转储
* 53.用户模式挂起
* 54.什么情况下会导致程序挂起
* 55.挂起应用程序案例
* 56.临界会话死锁 
* 57.收集转储 
* 58.Loader Lock
* 59.互斥锁死锁
* 60.应用程序CPU高问题
* 61.用户模式泄漏问题
* 62.用户模式Dump Heap
* 63.inside堆与线程泄漏
* 64.句柄泄漏和htrace命令
* 65.泄漏分析-通用方法
* 66.句柄对象泄漏-GDI句柄
* 67.句柄对象泄漏-虚拟分配
* 68.C++运行时、new和delete
* 69.模板函数和函数重载
* 70.调试中的安全问题
* 71.内核模式-基础知识介绍
* 72.内核模式-完整的内存转储
* 73.分析完整的内存转储
* 74.内核模式内部介绍
* 75.操作系统调度程序和调度器
* 76.内存管理
* 77.ALPC和一些API的实现
* 78.调试Windows登录界面
* 79.应用程序内核模式
* 80.内核模式-简单崩溃
* 81.内核模式-堆栈溢出
* 82.内核模式-堆栈损坏
* 83.内存池损坏
* 84.Bugcheck codes
* 85.为什么内核模式崩溃比用户模式复杂
* 86.操作系统挂起
* 87.自旋锁死锁
* 88.内核模式-高CPU
* 89.内存池泄漏
* 90.Eresource死锁
* 91.IRP的等待问题
* 92.线程泄漏和进程泄漏
* 93.内核模式的误区
* 94.挂起LSAS进程
* 95.挂起CSRSS进程
* 96.svc host挂起
* 97.挂起Winlogon
## 高级(实战)
* 98.32位-高IRQL内核模式
* 99.32位-缓冲区溢出和代码覆盖
* 100.32位-堆栈垃圾
* 101.32位-高IRQL-用户模式
* 102.32位-栈溢出
* 103.32位-硬编码断点
* 104.32位-双重释放
* 105.32位-IRP挂起
* 106.32位-DPC挂起
* 107.32位-死锁
* 108.32位-分页池泄漏
* 109.64位-高IRQL(km)
* 110.64位-缓冲区溢出
* 111.64位-代码覆盖和堆栈损坏
* 112.64位-高IRQL(um)和栈溢出
* 113.64位-硬编码断点和双重释放
* 114.64位-挂起
* 115.64位-非分页池泄漏
* 116.windbg脚本编写
# 逆向分析
* 117.hook工具的选择
* 118.frida工具使用(单独教程)
* 119.注入工具
* 120.x64dbg工具使用
* 121.vip破费实战一
* 122.vip破费实战二
* 121.vip破费实战三
* 122.vip破费实战四
* 123.vip破费实战五
* ...


# windows网络安全与底层原理

![](./img/net/windows网络安全防火墙与虚拟网卡视频教程.png)

公众号：安全狗的自我修养
github.com/haidragon

# windows网络安全与防火墙底层原理视频教程
* 0.视频介绍

## 计算机网络基础
* 1.网络的概念与组成
* 2.网络参考模型
* 3.网络程序的寻址
* 4.网络设计基础

## winsock使用与IO模型
* 5.winsock介绍与发展历史
* 6.winsock的概念(基于模型)
* 7.再议TCP/IP协议服务
* 8.winsock寻址方式与字节顺序
* 9.winsock编程-tcp
* 10.winsock编程-udp
* 11.最新网络版本通信
* 12.winsock编程-其它家族
* 13.多连接网络通信程序案例
* 14.windbg调试winsock调用链
* 15.ws2_32源码与逆向分析
* 16.套接字模式(模型)
* 17.winsock的阻塞模型
* 18.选择(select)模型
* 19.WSAAsyncSelect模型
* 20.WSAEventSelect模型
* 21.重叠(Overlapped)I/O模型(上)
* 22.重叠(Overlapped)I/O模型(下)
* 23.主机名称与主机地址 
* 24.socket选项与命令控制
 

## 伸缩网络与原始套接字 
* 25.伸缩网络-完成端口IOCP介绍
* 26.IOCP完成端口的简单使用
* 27.如何恰当地关闭IOCP
* 28.winsock扩展函数
* 29.伸缩网络中常见业务问题
* 30.广播通信原理与案例
* 31.网络的IP单播与多播
* 32.IP单播与多播综合案例
* 33.原始套接字介绍
* 34.ICMP原理与案例
* 35.路由追踪与IP数据报格式
* 36.TCP与UDP数据报格式
* 37.原始UDP封包实例
* 38.原始TCP封包介绍
* 39.网络嗅探原理介绍
* 40.网络嗅探具体实现
* 41.wireshark安装与使用
* 42.抓包分析原始数据包
* 43.原始套接字总结

## winsock接口服务(SPI/LSP)
* 44.winsock接口服务介绍
* 45.相关协议与服务提供者
* 46.Winsock协议目录
* 47.使用Winsock API函数枚举协议
* 48.使用Winsock SPI函数枚举协议
* 49.分层服务提供者(LSP)运行原理
* 50.服务提供者-安装LSP
* 51.服务提供者-移除LSP
* 52.服务提供者-编写LSP
* 53.服务提供者-LSP案例演示
* 54.基于SPI的网络过滤(SPI防火墙)
* 55.winsock接口服务总结


## 网络接口驱动与TDI防火墙(TDI/WSK)
* 56.网络接口驱动(TDI/WSK)概述
* 57.回顾socket到windows内核(调用栈)
* 58.ws2ifsl驱动源码与逆向分析
* 59.afdsys驱动源码与逆向分析
* 60.TDX与TDI驱动源码与逆向初探(win10)
* 61.基于TDI实现ksocket框架
* 62.TDI协议驱动设备
* 63.TDI网络过滤驱动介绍
* 64.TDI能做什么(优点与缺点)
* 65.TDI过滤设备绑定
* 66.TDI过滤驱动框架的实现(TDI防火墙)
* 67.create生成请求处理
* 68.获取生成的IP地址与端口
* 69.TDI客户与传输接口介绍
* 70.连接终端的生成与相关信息
* 71.TDI_ASSOCIATE_DDRESS关联
* 72.TDI_CONNECT的控制处理
* 73.TDI中UDP报文连接问题
* 74.TDI设置事件的过滤介绍
* 75.TDI设置事件的过滤实现
* 76.TCP发送与接收函数的处理
* 77.UDP数据报文发送与接收
* 78.其它例程函数处理
* 79.TDI防火墙案例源码调试
* 80.TDI防火墙总结
* 81.新版网络接口框架(WSK)介绍
* 82.第一个WSK程序案例
* 83.WSK开源框架-源码分析 
* 84.网络工具netstat源码分析 
* 85.网络接口驱动总结



## NDIS网络驱动接口与协议驱动
* 86.NDIS网络框架介绍
* 87.NDIS网络分层模型
* 88.协议驱动-与以太网包
* 89.协议驱动-控制设备生成
* 90.协议驱动-注册协议
* 91.协议驱动-绑定网卡
* 92.协议驱动-内存池与竞争问题
* 93.协议驱动-OID的IO发送与完成
* 94.协议驱动-解除绑定
* 95.协议驱动-用户层介绍
* 96.协议驱动-用户层代码设计思路
* 97.协议驱动-用户层IO控制请求
* 98.协议驱动-枚举与打开适配器
* 99.协议驱动-用户层收发包请求 
* 100.协议驱动-内核层设备名与文件对象
* 101.协议驱动-内核层读请求实现
* 102.协议驱动-内核层写请求实现
* 103.协议驱动-接收包的回调实现
* 104.接收包的队列操作与完成操作
* 105.完整项目演示与动态调试
* 106.协议驱动-总结




## NDIS小端口驱动与虚拟网卡
* 107.NDIS小端口驱动介绍
* 108.NDIS虚拟网卡介绍
* 109.NDIS驱动源码介绍与入口
* 110.设置小端口的适配器上下文
* 111.特征回调初始化-MPInitialize
* 112.特征回调初始化-MPHalt
* 113.小端口驱动与协议驱动通信介绍
* 114.小端口驱动与协议驱动IO请求
* 115.小端口驱动接口与配置设置
* 116.ndisprot的发包接口介绍
* 117.发送控制块(TCB)结构
* 118.发送包(写)请求的构建
* 119.ndisprot的收包接口介绍
* 120.收送控制块(RCB)结构
* 121.收包(读)请求的实现
* 122.读包的工作任务项介绍
* 123.工作任务项与队列操作
* 124.通信中的包归还操作
* 125.OID的查询与设置处理
* 126.完整项目演示与动态调试
* 127.NDIS小端口驱动-总结




## NDIS中间层驱动与NDIS防火墙
* 128.NDIS中间层驱动与NDIS防火墙
* 129.深入NDIS包描述符
* 130.NDIS中间层驱动入口函数
* 131.动态绑定NIC设备
* 132.小端口驱动初始化操作
* 133.NDIS中间层驱动发包原理介绍
* 134.NDIS中间层驱动发包描述符
* 135.NDIS中间层驱动异步发包
* 136.NDIS中间层驱动收包原理介绍
* 137.NDIS中间层驱动收包
* 138.NDIS中间层驱动查询与设置
* 139.相关句柄问题与控制设备 
* 140.包的过滤与过滤规则问题
* 141.与用户层通信处理问题
* 142.NDIS防火墙案例介绍
* 143.NDIS完整防火墙源码调试
* 144.NDIS中间层驱动-总结



# ndis6与ndisfilter
* 145.ndis中间驱动6版本介绍
* 146.miniport的网卡状态
* 147.ndisprot的绑定状态
* 148.ndisfilter模块状态
* 149.ndis6运行生命周期
* 150.NET_BUFFER架构介绍
* 151.NET_BUFFER常用函数
* 152.ndis6的IRQL处理问题
* 153.ndis6的发送与接收操作
* 154.以太网发送和接收操作
* 155.NET_BUFFER高级处理
* 156.ndisfilter过滤介绍
* 157.ndisfilter中注意点
* 158.ndisfilter初始化注册介绍
* 159.ndisfilter附加与卸载
* 160.ndisfilter启动与暂停
* 161.ndisfilter发包过滤
* 162.ndisfilter收包过滤
* 163.ndisfilter控制设备
* 164.ndisfilter其它操作处理
* 165.ndisfilter案例安装与调试
* 166.ndis总结与其它技术
 

公众号:安全狗的自我修养
vx:2207344074
github.com/haidragon

## WFP网络过滤框架与WFP防火墙
* 167.WFP网络框架介绍
* 168.工作原理与对象模型
* 169.垫片(Shim)与过滤引擎
* 170.分层(Layer)与子层(subLayer)
* 171.WFP对象-呼出接口(Callout)
* 172.WFP对象-操作接口(Classify)
* 173.WFP对象-过滤器(Filter)
* 174.WFP对象之间的结构关联
* 175.TCP数据包流中的WFP层
* 176.UDP数据包流中的WFP层
* 177.WFP-过滤的决策处理
* 178.访问权限控制与权重分配
* 179.用户层WFP开发介绍
* 180.用户层案例-第一个wfp程序
* 181.第一个wfp程序代码讲解
* 182.正确的安装与卸载过滤器
* 183.应用程序与用户权限过滤
* 184.特定用户端口范围限制案例
* 185.用户层案例-其它流量过滤案例
* 186.过滤器状态监视与事件相关案例 
* 187.过滤器安全管理相关案例
* 188.IPSec过滤器相关案例
* 189.用户层防火墙案例
* 190.驱动层WFP开发介绍
* 191.第一个驱动层WFP案例
* 192.控制层与过滤器注册
* 193.Callout注册与回调函数处理
* 194.控制设备与用户层通信
* 195.管理员权限限制问题
* 196.数据流关联进程与流上下文 
* 197.wfp数据包注入与修改介绍
* 198.网络注入与流注入
* 199.传输层注入与其它层注入
* 200.数据包修改-网络重定向
* 201.逆向分析-遍历所有Callout函数
* 202.代码实现-遍历所有Callout函数
* 203.网络过滤总结


## 网络分析工具WinPcap源码分析
* 1.WinPcap介绍
* 2.体系架构与功能描述
* 3.wpcap.dll与packet.dll接口
* 4.驱动目录结构与源码编译
* 5.用户层模块源码编译
* 6.动态调试第一个案例程序
* 7.winpcap驱动入口分析
* 8.获取适配器列表与设备创建
* 9.winpcap卸载函数分析
* 10.从用户模块到驱动的通信过程
* 11.获取与释放适配器设备列表介绍
* 12.wpcap.dll获取适配器设备列表
* 13.packet.dll获取适配器设备列表
* 14.释放适配器设备列表的实现
* 15.打开与关闭适配器设备介绍
* 16.打开与关闭适配器案例分析
* 17.用户层打开适配器实现
* 18.驱动部分打开适配器实现
* 19.关闭适配器设备的实现
* 20.使用WinPcap发送数据案例
* 21.用户层发送数据的实现
* 22.驱动部分发送数据的实现
* 23.数据包发送多次的实现
* 24.数据包的过滤与BPF介绍
* 25.flex与bison简单案例
* 26.数据包过滤的原理简介
* 27.BPF指令集实例分析
* 28.winpcap数据包过滤基础
* 29.winpcap数据过滤实例
* 30.用户层过滤函数的实现
* 31.驱动部分过滤函数的实现
* 32.使用WinPcap接收数据案例
* 33.wpcap.dll接收数据的实现
* 34.packet.dll接收数据的实现
* 35.驱动部分接收数据的实现
* 36.使用WinPcap流量统计案例
* 37.使用WinPcap网络状态统计案例
* 38.用户层统计相关的接口实现
* 39.驱动部分统计相关的接口实现
* 40.网络数据包文件转存格式介绍
* 41.使用WinPcap包文件读写案例
* 42.网络包文件读写用户层的实现
* 43.网络包文件读写内核层的实现
* 44.npcap与win10pcap介绍
* 45.对WinPcap总结

## 大型企业网络过滤框架
* 0.大型企业网络过滤框架介绍
* 1.源码编译与使用案例
* 2.TDI过滤部分代码介绍
* 3.驱动入口函数源码分析
* 4.控制设备逻辑简单分析
* 5.设备附加逻辑分析
* 6.tcp-常用分发函数(irp)
* 7.tcp-创建函数源码分析
* 8.tcp-DEVICE_CONTROL分析
* 9.tcp-TdiSend源码分析
* 10.tcp-TdiReceive源码分析
* 11.tcp-端口利用源码分析
* 12.tcp-连接源码分析
* 13.tcp-接听源码分析
* 14.tcp-信息设置源码分析
* 15.tcp-关闭与清楚源码分析
* 16.udp-IRP控制函数源码分析
* 17.udp-数据报式发送源码分析
* 18.udp-数据报式接收源码分析
* 18.udp-数据流式相关源码分析
* 19.控制设备-创建读写与关闭
* 20.控制设备-DEVCTRL_OPEN
* 21.控制设备-GET_ADDR_INFO
* 22.控制设备-GET_PROCESS_NAME
* 23.规则设计逻辑源码分析
* 24.控制设备-规则处理源码分析
* 25.数据包设计源码分析
* 26.io数据处理相关源码分析
* 27.其它相关函数源码分析
* 28.wfp过滤部分代码介绍
* 29.驱动入口函数源码分析
* 30.



# windows文件过滤与加解密

![](./img/file/windows文件过滤与加解密.png)

公众号：安全狗的自我修养
github.com/haidragon
# windows文件过滤与加解密视频教程(2023最新)
* 0.视频介绍
* 1.书集介绍
## 数据与磁盘基础
* 2.数据与存储介绍
* 3.硬盘介绍
* 4.计算机运行流程
* 5.磁盘组成、最小单位与寻址方式 
* 6.数制与字符表示法
* 7.分区介绍及其初始化
* 8.引导程序与引导分区
* 9.磁盘卷与文件系统
* 10.DOS分区-主引导记录
* 11.DOS分区-主分区表
* 12.DOS分区-实例分析
* 13.DOS分区-扩展分区介绍
* 14.DOS分区-扩展分区与逻辑分区
* 15.DOS分区-扩展分区表与实例分析
* 16.其它分区-BSD分区体系
* 17.其它分区总结

## fat类文件系统格式与fastfat源码基础
* 18.回顾什么是格式化
* 19.fat文件系统整体布局
* 20.DBR扇区介绍与数据结构
* 21.fat文件格式DBR扇区实例
* 22.fat表介绍
* 23.根目录介绍
* 24.长短文件名目录项
* 25.卷标目录项其它目录项
* 26.文件的创建流程
* 27.文件的读取流程
* 28.文件的删除流程
* 29.文件的复制、移动与剪切
* 30.fat32文件系统介绍
* 31.fat32保留区与DBR扇区
* 32.FSINFO信息扇区与FAT表
* 33.fat32目录项文件操作
* 34.fastfat源码介绍
* 35.驱动开发环境搭建与fastfat编译
* 36.win7-源码调试fastfat
* 37.win10-源码调试fastfat
* 38.win11-源码调试fastfat
* 39.文件中常用数据结构
* 40.文件对象介绍
* 41.文件对象中的VPB介绍
* 42.fastfat-VCB介绍
* 43.fastfat-FCB与DCB介绍
* 44.fastfat-CCB与BCB介绍
* 45.MCB介绍与基础总结

## 虚拟磁盘与过滤基础
* 46.虚拟磁盘介绍
* 47.基于win11安装与调试项目
* 48.驱动入口函数
* 49.adddevice实现
* 50.相关初始化信息
* 51.注册表信息与链接出盘符
* 52.文件系统初始化
* 53.虚拟磁盘IO与读写
* 54.虚拟磁盘总结
* 55.磁盘过滤驱动介绍
* 56.磁盘过滤分类
* 57.还原功能的磁盘过滤介绍
* 58.驱动入口函数
* 59.boot驱动回调函数
* 60.adddevice函数(生成过滤设备)
* 61.控制IO处理(获取设备信息)
* 62.PNP与电源请求处理(常用操作)
* 63.分页标记问题
* 64.文件读写处理
* 65.bitmap作用与分析
* 66.过滤总结
 
## sfilter
* 67.文件过滤与sfilter介绍
* 68.磁盘设备跟卷设备关系
* 69.文件系统的控制设备与卷设备
* 70.sfilter源码与inf文件分析
* 71.驱动入口与设备绑定前准备工作
* 72.创建过滤控制设备
* 73.遍历所有文件系统问题
* 74.挂载所有文件系统控制设备
* 75.挂载所有文件系统卷设备
* 76.卷的挂载后处理
* 77.文件系统的分发函数
* 78.文件过滤中各种标记问题
* 79.sfilter案例与文件创建问题
* 80.实现文件读写处理 
* 81.文件信息解析
* 82.fastIo的处理
* 83.PNP与power请求处理
* 84.文件生命周期问题与io处理
* 85.sfilter卸载与内存泄露问题
* 86.sfilter与用户层通信问题
* 87.sfilter中监控usb设备问题
* 88.使用sfilter监控与总结

## minifilter
* 89.minifilter过滤框架介绍
* 90.第一个minifilter测试与安装
* 91.minifilter优点与不足
* 92.minifilter框架与注册(位置问题)
* 93.常用数据结构-FLT_REGISTRATION
* 94.FLT_CONTEXT_REGISTRATION
* 95.FLT_CONTEXT_REGISTRATION中回调参数与返回值
* 96.FLT_OPERATION_REGISTRATION与回调参数与返回值
* 97.FLT_CALLBACK_DATA介绍
* 98.minifilter中的流上下文
* 99.minifilter中的流句柄上下文
* 100.minifilter中的实例与卷上下文
* 101.minifilter中的文件上下文
* 102.minifilter中的其它上下文件
* 103.minifilter中文件操作问题
* 104.minifilter中r0与r3通信
* 105.minifilter中的其它函数
* 106.文件映射与文件缓冲问题
* 107.usb磁盘相关信息问题
* 108.minifilter中的多线程同步
* 109.minifilter基础总结与案例




## minifilter案例源码分析
* 110.minifilter中控制设备使用案例
* 111.minifilter中上下文使用案例
* 112.不做任何过滤的完整filter案例
* 113.minifilter中文件重定向使用案例
* 114.minifilter中事务处理案例分析
* 115.minifilter中文件与流删除监测案例
* 116.minifilter中缓冲交换案例分析
* 117.minifilter中IO队列与安全取消案例
* 118.minifilter中文件元数据管理
* 119.minifilter拒绝文件访问案例
* 120.Minispy与用户通信案例分析
* 121.用户层api与scanner案例分析
* 122.openedr驱动file与usb相关源码分析
* 123.minifilter中文件与目录隐藏案例
* 124.minifilter中进程监控与保护
* 125.minifilter中文件与目录用户锁案例 
* 126.主动入侵检测与终端安全相关技术 
* 127.文件过滤总结


公众号：安全狗的自我修养
github.com/haidragon

## 文件透明加解密
* 128.文件透明加密介绍
* 129.过滤驱动的选择问题
* 130.区分进程问题
* 131.内存映射与文件缓冲
* 132.加密缓冲问题
* 133.文件加密与标记
* 134.文件信息保存与增册改查
* 135.文件重入问题
* 136.文件打开代码分析
* 137.读解密代码分析
* 138.写加密代码分析
* 139.其它项目源码分析
* 140.文件透明加解密总结


## 双缓冲透明加解密(dlp驱动核心技术)
* 142.回顾windows文件缓冲
* 143.第一二代透明加解密
* 144.第三四代透明加解密
* 145.iomgr管理器介绍
* 146.文件对象的创建过程
* 147.文件对象与相对文件对象
* 148.双缓冲原理与选择问题
* 149.过滤驱动的选择问题
* 150.缓冲同步问题
* 151.更深入探讨区分进程
* 152.区分文件问题
* 153.调试逆向缓冲区中的文件内容
* 154.初始化缓冲区文件读操作分析
* 155.初始化缓冲区文件写操作分析
* 156.双缓冲的加解密设计
* 157.双缓冲文件创建处理
* 158.fcb控制块初始化
* 159.ccb控制块初始化
* 160.双缓冲文件写处理
* 161.双缓冲文件读处理
* 162.双缓冲文件信息获取处理
* 163.新轻量型双缓冲加解密方案
* 164.不同文件系统问题 
* 165.未来发展与其它操作系统平台

## fastfat源码分析高级
* 168.CreateFile例程整体流程
* 169.CreateFile通用创建操作前处理
* 170.CreateFile第一个try主干流程
* 171.filewrite例程整体流程
* 172.filewrite-分页文件处理
* 173.filewrite-通用写操作前处理
* 174.filewrite-虚拟卷文件处理
* 174.filewrite-用户卷打开处理
* 176.filewrite-用户文件打开处理
* 177.filewrite-文件目录或者属性
* 178.filewrite-用户文件目录打开
* 179.filewrite-通用写操作后处理
* 180.fastfat-Information
* 181.fastfat-Ea(set/query)
* 182.fastfat-FlushBuffers
* 183.fastfat-VolumeInformation
* 184.fastfat-DirectoryControl
* 185.fastfat-FileSystemControl
* 186.fastfat-LockControl
* 187.fastfat-DeviceControl
* 188.fastfat-Shutdown
* 189.fastfat-pnp
* 190.fastfat-close/cleanup
* 191.fastfat-fastio
* ...

## sandbox(沙箱)
## 总线 

# 恶意软件开发与免杀对抗视频教程

![](./img/malwaredev_sec/恶意软件开发与免杀对抗视频教程.png)

# 恶意软件开发与免杀对抗视频教程

* 0.恶意软件开发与免杀对抗视频教程介绍

## PE文件格式
* 1.认识PE文件
* 2.PE文件相关概念
* 3.PE文件头介绍
* 4.PE文件头解析
* 5.PE扩展头介绍
* 6.SECTION头介绍
* 7.文件地址与虚拟地址转换
* 8.PE导入表介绍
* 9.PE解析导入表
* 10.PE导出表解析
* 11.PE重定位表介绍
* 12.重定位表解析
* 13.资源表的介绍
* 14.资源表的解析
* 15.延迟加载介绍与使用
* 16.解析延迟加载表
* 17.绑定导入表的解析
* 18.线程局部存储解析
* 19.异常表介绍与解析
* 20.其它信息目录表
* 21.动态加载技术介绍
* 22.畸形PE文件介绍
* 23.PE文件的注入hook
* 24.加壳与脱壳介绍
* 25.PE文件总结 

## shellcode编程基础
* 26.汇编语言基础回顾
* 27.shellcode编程介绍   
* 28.编写shellcode常用工具
* 29.shellcode开发环境搭建
* 30.第一个shellcode程序   
* 31.shellcode调试与运行方式
* 32.shellcode函数编写
* 33.libc与动态链接介绍
* 34.动态获取系统函数介绍
* 35.syscall系统调用介绍
* 36.shellcode实现系统调用
* 37.shellcode中常见问题
* 38.shellcode加密处理
* 39.常用函数与加密模块 
* 40.高级语言编写shellcode分析
* 41.shellcode编写框架实现
* 42.从PE资源表中加载shellcode
* 43.shellcode隐写术介绍
* 44.远程反向bindshell讲解
* 45.交差编译与通用加载器
* 46.内核驱动shellcode介绍
* 47.其它更多实例案例
* 48.shellcode总结
 
## 用户层hook与注入基础
* 49.用户层hook技术介绍
* 50.windows消息hook
* 51.内联(inline)hook
* 52.64位内联hook技术
* 53.IAT与EAT的hook
* 54.cpp虚拟函数hook
* 55.java语言hook技术
* 56.c#语言hook技术
* 57.其它高级语言hook技术  
* 58.windows异常hook
* 59.com组件hook技术
* 60.单字节hook技术      
* 61.基于调试方式hook
* 62.常用系统机制回调
* 63.常用hook框架
* 64.注入技术介绍 
* 65.静态注入与动态注入
* 66.远程线程注入技术
* 67.静态注入-IAT注入
* 68.APC式注入技术
* 69.反射式注入技术
* 70.系统hook方式注入 
* 71.基于调试方式注入
* 72.Process Hollowing
* 73.修改OEP入口方式注入
* 74.更底层ldrdll注入 
* 75.基于控件消息方式注入 
* 76.回调函数方式注入
* 77.WoW64进程注入
* 78.劫持注入技术介绍  
* 79.ppl保护注入讲解
* 80.注入函数多参数问题
* 81.注入shellcode调试技巧 
* 82.用户层hook与注入总结 

## 内核层hook与注入基础
* 83.内核层hook与注入基础介绍
* 84.内联(inline)hook基础
* 85.内核IAT的hook  
* 86.单字节问题与系统调用   
* 87.hook内核IRP介绍 
* 88.hook内核object  
* 89.hook内核ssdt 
* 90.hook内核sssdt 
* 91.hook内核IDT介绍
* 92.VT内核hook介绍
* 93.EPT内核hook介绍
* 94.ETW内核hook介绍
* 95.内核中的虚函数hook 
* 96.常用内核hook库介绍
* 97.内核注入技术介绍 
* 98.进程挂靠原理介绍
* 99.远程线程注入介绍
* 100.内核apc注入介绍
* 101.内核IAT注入介绍
* 102.基于hook方式注入
* 103.线程劫持方式注入
* 104.自映射方式注入
* 105.无线程无模块注入
* 106.32位与64位进程互注 
* 107.PPL进程保护注入
* 108.跨session注入
* 109.PatchGuard介绍
* 110.通用稳定性与商业化
* 111.内核层hook与注入总结
  
## 反调试对抗 
* 112.反调试对抗介绍
* 113.检测-枚举窗口与进程
* 114.检测-常用检测调试系统api
* 115.检测-常用NT信息获取函数
* 116.检测-PEB方式检测调试
* 117.检测-时间与代码完整性检测
* 118.检测-权限与对象特征
* 119.检测-保护页与硬件断点
* 120.检测-异常类检测调试 
* 121.检测-基于多进程多模块守护类
* 122.对抗-基于去掉常用特征类
* 123.对抗-基于函数hook方式类
* 124.对抗-基于更底层VT方式类
* 125.分析-基于函数hook分析类
* 126.分析-从入口下手分析类
* 127.反调试对抗总结 

## 驱动层常用恶意手法(rootkit)
* 128.驱动层常用恶意手法(rootkit)介绍
* 129.rootkit-隐藏进程
* 130.rootkit-隐藏模块与内存
* 131.rootkit-隐藏端口
* 132.rootkit-隐藏文件
* 133.卸载进程回调
* 134.卸载其它常用回调
* 135.防止内存扫PE文件
* 136.卸载minifilter文件过滤
* 137.卸载wfp-callout网络过滤
* 138.驱动层运行用户模块介绍
* 139.驱动层运行脚本文件
* 140.openssl驱动移植 
* 141.隐藏指定窗口
* 142.硬件信息欺骗
* 143.滥用合法网络通信 
* 144.监控键盘
* 145.隐藏注册表项
* 146.控制受信驱动介绍
* 147.DSE绕过(无签名加载驱动)
* 148.进程权限提升 
* 149.内核版Process-Hollowing
* 150.内核级远程控制 
* 151.内核横向移动讲解
* 152.更底层的bootkit介绍
* 153.rootkit总结

公众号:安全狗的自我修养
vx:2207344074
gitee.com/haidragon
bilibili:haidragonx

# 恶意开发与免杀
* 154.恶意开发与免杀介绍
* 155.edr产品底层原理技术讲解
* 156.dlp产品底层原理技术讲解
* 157.防火墙底层原理技术讲解
* 158.shellcode加密保护讲解
* 159.shellcode分段讲解
* 160.反射注入加载讲解
* 161.进程挖空技术讲解
* 162.PE自举与去PE头讲解
* 163.动态函数调用栈技术
* 164.结合syscall绕常用hook
* 165.白利用相关技术讲解
* 166.dll加载链原理与逆向分析
* 167.dll完美劫持技术分析
* 168.自动查找dll劫持链
* 169.rooikit组合使用介绍 
* 170.驱动非正常通信介绍(绕IO检测)
* 171.驱动非正常IO通信挖掘技巧
* 172.隐秘通信技术介绍
* 173.动态端口技术实现
* 174.分端口通信与端口复用
* 175.sockedi调用约定介绍
* 176.ETW绕过技术分析
* 177.AMSI绕过技术分析
* 178.权限限制问题讲解
* 179.对抗静态反编译讲解
* 180.对抗指令模拟运行讲解
* 181.多语言结合使用问题
* 182.恶意开发与免杀总结

# ida基础
* 0.ida工具使用视频教程介绍
* 1.反汇编简介
* 2.逆向与反汇编常用小工具
* 3.IDA反编译工具介绍
* 4.IDA入门使用
* 5.认识IDA菜单与默认窗口
* 6.其它辅助显示窗口
* 7.反汇编导航
* 8.反汇编基本操作
* 9.交叉引用与绘图功能
* 10.IDA内置小工具与配置
* 11.IDA签名识别库
* 12.IDS文件与其它文件生成
* 13.IDC脚本语言基础
* 14.常用内置IDC函数与案例
* 15.IDAPython介绍
* 16.IDAPthon脚本使用
* 17.IDA软件开发工具包介绍
* 18.IDA插件体系结构
* 19.IDA加载器模块
* 20.IDA处理器模块
* 21.IDA调试器模块
# IDA中级
* 22.高级语言底层原理介绍
* 23.IDA导入与创建结构体
* 24.程序入口定位
* 25.代码提取并编译使用
* 26.修改汇编代码并保存
* 27.高级模拟调试固件
* 28.硬件断点与软件断点
* 29.调试内存数据操作
* 30.IDA跳转表修正 
* 31.函数大小限制问题
* 32.栈帧太大问题处理
* 33.堆栈不平衡问题处理
* 34.call参数正确识别问题
# 高级实战
* 35.IDA动态追踪指令
* 36.IDA动态调试MBR代码
* 37.IDA算法查找器
* 38.二进制对比工具
* 39.microcode介绍
* 


