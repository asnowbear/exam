
## TDZ

```temporal dead zone```

使用let命令声明变量之前，该变量都不可使用，称为```暂时性死区```

- useage

  ```
  let x = x 

  ReferenceError: x is not defined

  ```

## Tail Call (尾调用)

  函数式编程的重要概念，在函数的尾部调用另外一个函数

- useage

   ```
   function f(x) {
     return g(x)
   }
   ```

## Thunk函数

编译器的`传名调用`实现，将参数放到一个临时函数中，再讲这个函数当做参数传入函数体，这个临时函数叫作`Thunk`函数

## DNS   

#### 1、基本概念

 ` Domain Name System` ：域名服务协议，是因特网的一项核心服务，作为可以将域名和IP地址相互映射的数据库，使人可以快速访问互联网

 #### 2、利弊

  - DNS污染
  
   顺走个人信息或塞一张网页广告，

  - DNS劫持

   把请求指向另外一个地方

## SYN 

 #### 1、基本概念

  `Synchronize Sequence Numbers`，是TCP/IP建立连接时的握手信号。

## SSL/TLS

#### 1、基本概念

   ```SSL: Secure Sockets Layers（安全套接字层）```

   ```TLS: Transport Layer Security（传输层安全协议）```

#### 2、区别

   TLS是SSL 3.0的后续版本

## CDN

#### 1、概念

  `CDN: Content Delivery Network`

## HTTP

#### 1、概念
  
  `HyperText Transfer Protocol`，超文本传输协议

## RTT
  
  `Round Trip Time`， 通信一来一回的时间

## TCP

  `Transmission Control Protocol`, 传输控制协议 

## 队头阻塞

   `Head-of-line blocking`, 队头堵塞

## UDP

  `User Datagram Protocol`, 用户数据报协议（不可靠的传输协议）

## SPDY协议

  `Speedy`

## QUIC

   `Quick UDP Internet Connections`，快速UDP网络连接

## XSS

   Cross Site Scripting
 