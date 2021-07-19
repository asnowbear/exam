

## UDP

 User Datagram Procotol 用户数据报协议，具备一下特点

 ### 1、面向无连接

 不需要和TCP一样三次握手建立连接，知道对端的IP和端口号直接进行传输

 ### 2、不可靠性

 没有数据传送的保证机制，出现传输丢包，不做检测和提示

 ### 3、面向报文

将应用层发送过来的报文原样发给IP层，既不合并也不拆分，保留报文边界

 ### 4、连接对象个数

 支持一对一、一对多、多对多交互通信

 ### 5、首部开销

 首部开销小，仅8字节

 ### 6、应用场景

 适用于IP电话、视频会议、直播等

## TCP

### 1、面向连接

发送数据前，必须通过三次握手建立连接

### 2、可靠传输

通过序列号、确认应答、超时重传、拥塞控制

- 确认应答机制和序列号

  将数据进行编号，每个ACK都带有对应的确认序列号，明确接受数据已经发送起点

- 超时重传&序列号

  给数据包序号，保证按序接受，如接受成功则回发确认报文ACK，如在合理的往返时间内为收到，则认为丢包，将启动重传机制

- 拥塞机制

  当网络出现阻塞时，TCP能够减少向网络注入数据的速率和数量，缓解拥塞

### 3、面向字节流

以字节流方式发送，构建发接缓存区，如果发送字节流过大则拆成多个TCP数据包发送，如果字节数太短，则在缓存区等待够一定长度则发送出去

### 4、单端连接

只支持一对一通信

### 5、首部开销

首部开销最小20节、最大60节

### 6、使用场景

适用于要求可靠传输的应用、例如文件传输









