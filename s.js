module.exports = `C:\\Users\\Administrator\\.jdks\\corretto-11.0.20.1\\bin\\java.exe -XX:TieredStopAtLevel=1 -noverify -Dspring.profiles.active=test -Dspring.output.ansi.enabled=always -Dcom.sun.management.jmxremote -Dspring.jmx.enabled=true -Dspring.liveBeansView.mbeanDomain -Dspring.application.admin.enabled=true "-Dmanagement.endpoints.jmx.exposure.include=*" "-javaagent:C:\\Program Files\\JetBrains\\IntelliJ IDEA 2023.2.1\\lib\\idea_rt.jar=55835:C:\\Program Files\\JetBrains\\IntelliJ IDEA 2023.2.1\\bin" -Dfile.encoding=UTF-8 @C:\\Users\\Administrator\\AppData\\Local\\Temp\\idea_arg_file995415882 com.treetao.MedicalAdminApplication
2023-11-22 15:04:33 [main] INFO  o.s.b.d.r.RestartApplicationListener
 - Restart disabled due to System property 'spring.devtools.restart.enabled' being set to false
Application Version: 4.6.0
Spring Boot Version: 2.7.9
欢迎使用智慧医疗服务平台...

2023-11-22 15:04:34 [main] INFO  com.treetao.MedicalAdminApplication
 - Starting MedicalAdminApplication using Java 11.0.20.1 on fq-XMKGELCAVBMR with PID 17216 (C:\\Users\\Administrator\\medical-plus\\medical-app\\medical-app-admin\\target\\classes started by Administrator in C:\\Users\\Administrator\\medical-plus)
2023-11-22 15:04:34 [main] DEBUG com.treetao.MedicalAdminApplication
 - Running with Spring Boot v2.7.9, Spring v5.3.25
2023-11-22 15:04:34 [main] INFO  com.treetao.MedicalAdminApplication
 - The following 1 profile is active: "test"
2023-11-22 15:04:34 [background-preinit] INFO  o.h.validator.internal.util.Version
 - HV000001: Hibernate Validator 6.2.5.Final
2023-11-22 15:04:36 [main] INFO  c.yomahub.liteflow.util.LOGOPrinter
 - 
================================================================================================
\t\t _     ___ _____ _____      _____ _     _____        __
\t\t| |   |_ _|_   _| ____|    |  ___| |   / _ \\ \\      / /
\t\t| |    | |  | | |  _| _____| |_  | |  | | | \\ \\ /\\ / / 
\t\t| |___ | |  | | | |__|_____|  _| | |__| |_| |\\ V  V /  
\t\t|_____|___| |_| |_____|    |_|   |_____\\___/  \\_/\\_/   

\t\tVersion: 2.11.0
\t\tKeep on the light side.
\t\twebsite：https://liteflow.cc
\t\twechat：bryan_31
================================================================================================

2023-11-22 15:04:36 [main] INFO  io.undertow.servlet
 - Initializing Spring embedded WebApplicationContext
2023-11-22 15:04:37 [main] INFO  c.b.d.d.DynamicRoutingDataSource
 - dynamic-datasource detect P6SPY plugin and enabled it
2023-11-22 15:04:37 [main] INFO  com.zaxxer.hikari.HikariDataSource
 - master - Starting...
2023-11-22 15:04:37 [main] INFO  com.zaxxer.hikari.HikariDataSource
 - master - Start completed.
2023-11-22 15:04:37 [main] INFO  c.b.d.d.DynamicRoutingDataSource
 - dynamic-datasource - add a datasource named [slave] success
2023-11-22 15:04:37 [main] INFO  c.b.d.d.DynamicRoutingDataSource
 - dynamic-datasource - add a datasource named [master] success
2023-11-22 15:04:37 [main] INFO  c.b.d.d.DynamicRoutingDataSource
 - dynamic-datasource initial loaded [2] datasource,primary datasource named [master]
2023-11-22 15:04:37 [main] INFO  c.g.y.a.MybatisPlusJoinAutoConfiguration
 - MPJSqlInjector init
 _ _   |_  _ _|_. ___ _ |    _ 
| | |\\/|_)(_| | |_\\  |_)||_|_\\ 
     /               |         
                        3.5.3.1 
RocketMQLog:WARN No appenders could be found for logger (io.netty.util.concurrent.GlobalEventExecutor).
RocketMQLog:WARN Please initialize the logger system properly.
2023-11-22 15:04:45 [main] INFO  c.t.framework.config.JacksonConfig
 - 初始化 jackson 配置
2023-11-22 15:04:45 [main] INFO  c.t.framework.config.RedisConfig
 - 初始化 redis 配置
2023-11-22 15:04:45 [main] INFO  org.redisson.Version
 - Redisson 3.20.0
2023-11-22 15:04:46 [redisson-netty-2-7] INFO  o.r.c.p.MasterPubSubConnectionPool
 - 1 connections initialized for 192.168.126.200/192.168.126.200:36379
2023-11-22 15:04:46 [redisson-netty-2-3] INFO  o.r.c.pool.MasterConnectionPool
 - 8 connections initialized for 192.168.126.200/192.168.126.200:36379
2023-11-22 15:04:46 [main] INFO  c.y.liteflow.spring.ComponentScanner
 - component[a] has been found
2023-11-22 15:04:46 [main] INFO  c.y.liteflow.spring.ComponentScanner
 - component[b] has been found
2023-11-22 15:04:46 [main] INFO  com.treetao.job.config.XxlJobConfig
 - >>>>>>>>>>> xxl-job config init.
____ ____    ___ ____ _  _ ____ _  _ 
[__  |__| __  |  |  | |_/  |___ |\\ | 
___] |  |     |  |__| | \\_ |___ | \\| 
https://sa-token.cc (v1.34.0)
 _ _   |_  _ _|_. ___ _ |    _  .  _  .  _  
| | |\\/|_)(_| | |_\\  |_)||_|_\\  | (_) | | | 
     /               |          /            1.4.4
2023-11-22 15:04:47 [main] INFO  c.yomahub.liteflow.core.FlowExecutor
 - flow info loaded from class config with el,class=com.yomahub.liteflow.parser.sql.SQLXmlELParser
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by org.dom4j.io.SAXContentHandler (file:/C:/Users/Administrator/.m2/repository/dom4j/dom4j/1.6.1/dom4j-1.6.1.jar) to method com.sun.org.apache.xerces.internal.parsers.AbstractSAXParser$LocatorProxy.getEncoding()
WARNING: Please consider reporting this to the maintainers of org.dom4j.io.SAXContentHandler
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
2023-11-22 15:04:47 [main] INFO  c.y.l.core.ScriptCommonComponent
 - load script for component[a(测试脚本)]
2023-11-22 15:04:47 [main] INFO  c.y.l.core.ScriptCommonComponent
 - load script for component[t(t)]
2023-11-22 15:04:47 [main] INFO  c.y.l.core.ScriptCommonComponent
 - load script for component[printGuide(打印体检指引)]
2023-11-22 15:04:47 [main] INFO  c.y.l.core.ScriptCommonComponent
 - load script for component[printPersonalReport(个人体检报告)]
2023-11-22 15:04:48 [main] INFO  c.x.job.core.executor.XxlJobExecutor
 - >>>>>>>>>>> xxl-job register jobhandler success, name:httpJobHandler, jobHandler:com.xxl.job.core.handler.impl.MethodJobHandler@1184b542[class com.treetao.job.service.SampleService#httpJobHandler]
2023-11-22 15:04:48 [main] INFO  c.x.job.core.executor.XxlJobExecutor
 - >>>>>>>>>>> xxl-job register jobhandler success, name:demoJobHandler2, jobHandler:com.xxl.job.core.handler.impl.MethodJobHandler@6bd5ca02[class com.treetao.job.service.SampleService#demoJobHandler2]
2023-11-22 15:04:48 [main] INFO  c.x.job.core.executor.XxlJobExecutor
 - >>>>>>>>>>> xxl-job register jobhandler success, name:commandJobHandler, jobHandler:com.xxl.job.core.handler.impl.MethodJobHandler@4758f533[class com.treetao.job.service.SampleService#commandJobHandler]
2023-11-22 15:04:48 [main] INFO  c.x.job.core.executor.XxlJobExecutor
 - >>>>>>>>>>> xxl-job register jobhandler success, name:demoJobHandler, jobHandler:com.xxl.job.core.handler.impl.MethodJobHandler@12b4a53d[class com.treetao.job.service.SampleService#demoJobHandler]
2023-11-22 15:04:48 [main] INFO  c.x.job.core.executor.XxlJobExecutor
 - >>>>>>>>>>> xxl-job register jobhandler success, name:shardingJobHandler, jobHandler:com.xxl.job.core.handler.impl.MethodJobHandler@262e2c8c[class com.treetao.job.service.SampleService#shardingJobHandler]
2023-11-22 15:04:49 [Thread-14] INFO  com.xxl.job.core.server.EmbedServer
 - >>>>>>>>>>> xxl-job remoting server start success, nettype = class com.xxl.job.core.server.EmbedServer, port = 9999
2023-11-22 15:04:49 [main] INFO  io.undertow
 - starting server: Undertow - 2.2.23.Final
2023-11-22 15:04:49 [main] INFO  org.xnio
 - XNIO version 3.8.7.Final
2023-11-22 15:04:49 [main] INFO  org.xnio.nio
 - XNIO NIO Implementation Version 3.8.7.Final
2023-11-22 15:04:49 [xxl-job, executor ExecutorRegistryThread] ERROR c.x.job.core.util.XxlJobRemotingUtil
 - Connection refused: connect
java.net.ConnectException: Connection refused: connect
\tat java.base/java.net.PlainSocketImpl.waitForConnect(Native Method)
\tat java.base/java.net.PlainSocketImpl.socketConnect(PlainSocketImpl.java:107)
\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:412)
\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:255)
\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:237)
\tat java.base/java.net.Socket.connect(Socket.java:609)
\tat java.base/sun.net.NetworkClient.doConnect(NetworkClient.java:177)
\tat java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:509)
\tat java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:604)
\tat java.base/sun.net.www.http.HttpClient.<init>(HttpClient.java:277)
\tat java.base/sun.net.www.http.HttpClient.New(HttpClient.java:376)
\tat java.base/sun.net.www.http.HttpClient.New(HttpClient.java:397)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1253)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1187)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1081)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:1015)
\tat com.xxl.job.core.util.XxlJobRemotingUtil.postBody(XxlJobRemotingUtil.java:99)
\tat com.xxl.job.core.biz.client.AdminBizClient.registry(AdminBizClient.java:42)
\tat com.xxl.job.core.thread.ExecutorRegistryThread$1.run(ExecutorRegistryThread.java:48)
\tat java.base/java.lang.Thread.run(Thread.java:829)
2023-11-22 15:04:49 [xxl-job, executor ExecutorRegistryThread] INFO  c.x.j.c.t.ExecutorRegistryThread
 - >>>>>>>>>>> xxl-job registry fail, registryParam:RegistryParam{registryGroup='EXECUTOR', registryKey='medical-executor', registryValue='http://192.168.3.109:9999/'}, registryResult:ReturnT [code=500, msg=xxl-job remoting error(Connection refused: connect), for url : http://localhost:9100/xxl-job-admin/api/registry, content=null]
2023-11-22 15:04:49 [main] INFO  org.jboss.threads
 - JBoss Threads version 3.1.0.Final
2023-11-22 15:04:49 [main] INFO  com.treetao.MedicalAdminApplication
 - Started MedicalAdminApplication in 15.395 seconds (JVM running for 16.529)
 Consume Time：2 ms 2023-11-22 15:04:49
 Execute SQL：SELECT oss_config_id, config_key, access_key, secret_key, bucket_name, prefix, endpoint, domain, is_https, region, status, ext1, remark, access_policy, create_by, create_time, update_by, update_time, del_flag FROM sys_oss_config WHERE del_flag = '0'

2023-11-22 15:04:49 [main] INFO  c.t.runner.SystemApplicationRunner
 - 初始化OSS配置成功
 Consume Time：1 ms 2023-11-22 15:04:49
 Execute SQL：SELECT config_id, config_name, config_key, config_value, status, remark, create_by, create_time, update_by, update_time, del_flag FROM sys_config WHERE del_flag = '0' AND (status = '0')

2023-11-22 15:04:49 [main] INFO  c.t.runner.SystemApplicationRunner
 - 加载系统参数缓存数据成功
 Consume Time：4 ms 2023-11-22 15:04:49
 Execute SQL：SELECT dict_code, dict_sort, dict_label, dict_value, dict_type, css_class, list_class, is_default, status, remark, create_by, create_time, update_by, update_time, del_flag FROM sys_dict_data WHERE del_flag = '0' AND (status = '0')

2023-11-22 15:04:49 [main] INFO  c.t.runner.SystemApplicationRunner
 - 加载系统字典缓存数据成功
(♥◠‿◠)ﾉﾞ  Medical-Plus启动成功   ლ(´ڡ\`ლ)ﾞ
2023-11-22 15:04:49 [registrationTask1] WARN  d.c.b.a.c.r.ApplicationRegistrator
 - Failed to register application as Application(name=Medical-Plus, managementUrl=http://192.168.3.109:8080/actuator, healthUrl=http://192.168.3.109:8080/actuator/health, serviceUrl=http://192.168.3.109:8080/) at spring-boot-admin ([http://localhost:9090/monitor/instances]): I/O error on POST request for "http://localhost:9090/monitor/instances": Connect to localhost:9090 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect; nested exception is org.apache.http.conn.HttpHostConnectException: Connect to localhost:9090 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect. Further attempts are logged on DEBUG level
2023-11-22 15:04:49 [RMI TCP Connection(8)-192.168.3.109] INFO  io.undertow.servlet
 - Initializing Spring DispatcherServlet 'dispatcherServlet'
2023-11-22 15:05:19 [xxl-job, executor ExecutorRegistryThread] ERROR c.x.job.core.util.XxlJobRemotingUtil
 - Connection refused: connect
java.net.ConnectException: Connection refused: connect
\tat java.base/java.net.PlainSocketImpl.waitForConnect(Native Method)
\tat java.base/java.net.PlainSocketImpl.socketConnect(PlainSocketImpl.java:107)
\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:412)
\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:255)
\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:237)
\tat java.base/java.net.Socket.connect(Socket.java:609)
\tat java.base/sun.net.NetworkClient.doConnect(NetworkClient.java:177)
\tat java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:509)
\tat java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:604)
\tat java.base/sun.net.www.http.HttpClient.<init>(HttpClient.java:277)
\tat java.base/sun.net.www.http.HttpClient.New(HttpClient.java:376)
\tat java.base/sun.net.www.http.HttpClient.New(HttpClient.java:397)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1253)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1187)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1081)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:1015)
\tat com.xxl.job.core.util.XxlJobRemotingUtil.postBody(XxlJobRemotingUtil.java:99)
\tat com.xxl.job.core.biz.client.AdminBizClient.registry(AdminBizClient.java:42)
\tat com.xxl.job.core.thread.ExecutorRegistryThread$1.run(ExecutorRegistryThread.java:48)
\tat java.base/java.lang.Thread.run(Thread.java:829)
2023-11-22 15:05:19 [xxl-job, executor ExecutorRegistryThread] INFO  c.x.j.c.t.ExecutorRegistryThread
 - >>>>>>>>>>> xxl-job registry fail, registryParam:RegistryParam{registryGroup='EXECUTOR', registryKey='medical-executor', registryValue='http://192.168.3.109:9999/'}, registryResult:ReturnT [code=500, msg=xxl-job remoting error(Connection refused: connect), for url : http://localhost:9100/xxl-job-admin/api/registry, content=null]
2023-11-22 15:05:20 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /captchaImage],无参数
2023-11-22 15:05:20 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /ignore/platform],无参数
2023-11-22 15:05:20 [XNIO-1 task-3] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /ignore/crowdLabel],无参数
2023-11-22 15:05:20 [XNIO-1 task-2] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/tenant/all],参数类型[param],参数:[{"includePlatform":["true"]}]
2023-11-22 15:05:20 [XNIO-1 task-3] ERROR c.t.f.web.GlobalExceptionHandler
 - 请求地址'/ignore/crowdLabel',发生未知异常.
com.treetao.common.exception.ServiceException: 未登录
\tat com.treetao.common.core.service.WrapperUtilService.getRoleExtendsScopeLambdaQueryWrapper(WrapperUtilService.java:49)
\tat com.treetao.bizbase.service.impl.BizCrowdLabelServiceImpl.buildQueryWrapper(BizCrowdLabelServiceImpl.java:114)
\tat com.treetao.bizbase.service.impl.BizCrowdLabelServiceImpl.getAll(BizCrowdLabelServiceImpl.java:190)
\tat com.treetao.web.ignore.IgnorePermissionsController.all(IgnorePermissionsController.java:109)
\tat com.treetao.web.ignore.IgnorePermissionsController$$FastClassBySpringCGLIB$$652b7523.invoke(<generated>)
\tat org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:708)
\tat com.treetao.web.ignore.IgnorePermissionsController$$EnhancerBySpringCGLIB$$fba90641.all(<generated>)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)
\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)
\tat org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)
\tat org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)
\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)
\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)
\tat org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
\tat org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1071)
\tat org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:964)
\tat org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
\tat org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898)
\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:497)
\tat org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:584)
\tat io.undertow.servlet.handlers.ServletHandler.handleRequest(ServletHandler.java:74)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:129)
\tat org.springframework.web.filter.CorsFilter.doFilterInternal(CorsFilter.java:91)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat com.treetao.common.filter.RepeatableFilter.doFilter(RepeatableFilter.java:30)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat io.undertow.servlet.handlers.FilterHandler.handleRequest(FilterHandler.java:84)
\tat io.undertow.servlet.handlers.security.ServletSecurityRoleHandler.handleRequest(ServletSecurityRoleHandler.java:62)
\tat io.undertow.servlet.handlers.ServletChain$1.handleRequest(ServletChain.java:68)
\tat io.undertow.servlet.handlers.ServletDispatchingHandler.handleRequest(ServletDispatchingHandler.java:36)
\tat io.undertow.servlet.handlers.RedirectDirHandler.handleRequest(RedirectDirHandler.java:68)
\tat io.undertow.servlet.handlers.security.SSLInformationAssociationHandler.handleRequest(SSLInformationAssociationHandler.java:117)
\tat io.undertow.servlet.handlers.security.ServletAuthenticationCallHandler.handleRequest(ServletAuthenticationCallHandler.java:57)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.security.handlers.AbstractConfidentialityHandler.handleRequest(AbstractConfidentialityHandler.java:46)
\tat io.undertow.servlet.handlers.security.ServletConfidentialityConstraintHandler.handleRequest(ServletConfidentialityConstraintHandler.java:64)
\tat io.undertow.security.handlers.AuthenticationMechanismsHandler.handleRequest(AuthenticationMechanismsHandler.java:60)
\tat io.undertow.servlet.handlers.security.CachedAuthenticatedSessionHandler.handleRequest(CachedAuthenticatedSessionHandler.java:77)
\tat io.undertow.security.handlers.AbstractSecurityContextAssociationHandler.handleRequest(AbstractSecurityContextAssociationHandler.java:43)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.servlet.handlers.SendErrorPageHandler.handleRequest(SendErrorPageHandler.java:52)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.servlet.handlers.ServletInitialHandler.handleFirstRequest(ServletInitialHandler.java:275)
\tat io.undertow.servlet.handlers.ServletInitialHandler.access$100(ServletInitialHandler.java:79)
\tat io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:134)
\tat io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:131)
\tat io.undertow.servlet.core.ServletRequestContextThreadSetupAction$1.call(ServletRequestContextThreadSetupAction.java:48)
\tat io.undertow.servlet.core.ContextClassLoaderSetupAction$1.call(ContextClassLoaderSetupAction.java:43)
\tat io.undertow.servlet.handlers.ServletInitialHandler.dispatchRequest(ServletInitialHandler.java:255)
\tat io.undertow.servlet.handlers.ServletInitialHandler.access$000(ServletInitialHandler.java:79)
\tat io.undertow.servlet.handlers.ServletInitialHandler$1.handleRequest(ServletInitialHandler.java:100)
\tat io.undertow.server.Connectors.executeRootHandler(Connectors.java:393)
\tat io.undertow.server.HttpServerExchange$1.run(HttpServerExchange.java:852)
\tat org.jboss.threads.ContextClassLoaderSavingRunnable.run(ContextClassLoaderSavingRunnable.java:35)
\tat org.jboss.threads.EnhancedQueueExecutor.safeRun(EnhancedQueueExecutor.java:2019)
\tat org.jboss.threads.EnhancedQueueExecutor$ThreadBody.doRunTask(EnhancedQueueExecutor.java:1558)
\tat org.jboss.threads.EnhancedQueueExecutor$ThreadBody.run(EnhancedQueueExecutor.java:1423)
\tat org.xnio.XnioWorker$WorkerThreadFactory$1$1.run(XnioWorker.java:1282)
\tat java.base/java.lang.Thread.run(Thread.java:829)
2023-11-22 15:05:20 [XNIO-1 task-2] INFO  c.t.f.aspectj.RateLimiterAspect
 - 限制令牌 => 1, 剩余令牌 => 0, 缓存key => 'rate_limit:/system/tenant/all:'
 Consume Time：1 ms 2023-11-22 15:05:20
 Execute SQL：SELECT dept_id, ancestors FROM sys_dept WHERE del_flag = '0' AND (dept_id = NULL)

2023-11-22 15:05:20 [XNIO-1 task-3] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /ignore/crowdLabel],耗时:[44]毫秒
2023-11-22 15:05:20 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /ignore/platform],耗时:[45]毫秒
 Consume Time：1 ms 2023-11-22 15:05:20
 Execute SQL：SELECT tenant_id, tenant_name, system_name, logo_file_id, login_bg_file_id, domain, status, position, end_date, region_code, region_name, orderby, account_num FROM sys_tenant ORDER BY orderby ASC

2023-11-22 15:05:20 [XNIO-1 task-2] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/tenant/all],耗时:[89]毫秒
2023-11-22 15:05:20 [XNIO-1 task-2] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/dept/all/0],无参数
2023-11-22 15:05:20 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/tenant/no-info/0],无参数
 Consume Time：1 ms 2023-11-22 15:05:20
 Execute SQL：SELECT tenant_id, tenant_name, system_name, logo_file_id, login_bg_file_id, domain, status, position, end_date, region_code, region_name, orderby, account_num FROM sys_tenant WHERE tenant_id = 0

 Consume Time：2 ms 2023-11-22 15:05:20
 Execute SQL：SELECT dept_id,dept_name FROM sys_dept WHERE del_flag='0' AND (tenant_id = 0 AND del_flag = '0') ORDER BY parent_id ASC,order_num ASC

 Consume Time：1 ms 2023-11-22 15:05:20
 Execute SQL：SELECT oss_id, new_id, file_name, original_name, file_suffix, url, service, create_by, create_time, update_by, update_time, del_flag FROM sys_oss WHERE oss_id = 1722910169090347009 AND del_flag = '0'

2023-11-22 15:05:20 [XNIO-1 task-2] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/dept/all/0],耗时:[18]毫秒
2023-11-22 15:05:20 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /captchaImage],耗时:[289]毫秒
2023-11-22 15:05:21 [XNIO-1 task-4] INFO  com.treetao.oss.factory.OssFactory
 - 创建OSS实例 key => minio
2023-11-22 15:05:21 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/tenant/no-info/0],耗时:[455]毫秒
 Consume Time：1 ms 2023-11-22 15:05:21
 Execute SQL：SELECT oss_id,new_id,file_name,original_name,file_suffix,url,service,create_by,create_time,update_by,update_time,del_flag FROM sys_oss WHERE oss_id=1722910192616198146 AND del_flag='0'

2023-11-22 15:05:26 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /login],参数类型[json],参数:[{"username":"qjgly","password":"25d55ad283aa400af464c76d713c07ad","code":"0795","uuid":"5c5004c828494e5e9c279ca3a1794044","tenantId":0,"orgId":0,"loginType":"0"}]
 Consume Time：2 ms 2023-11-22 15:05:26
 Execute SQL：SELECT u.tenant_id, u.user_id, u.dept_id, u.user_name, u.nick_name, u.user_type, u.email, u.avatar, u.phonenumber, u.password, u.sex, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by, u.create_time, u.remark, u.the_title_code, u.login_platform, u.service_crowd_label, u.dept_section_ids, u.examine_type, u.login_platform, u.pinyin, u.pinyin_jx, d.dept_id, d.parent_id, d.ancestors, d.dept_name, d.order_num, d.status AS dept_status, r.role_id, r.role_name, r.role_key, r.role_sort, r.query_data_scope, r.edit_data_scope, r.status AS role_status FROM sys_user u INNER JOIN sys_dept d ON u.dept_id = d.dept_id LEFT JOIN sys_user_role sur ON u.user_id = sur.user_id LEFT JOIN sys_role r ON r.role_id = sur.role_id WHERE u.del_flag = '0' AND u.user_name = 'qjgly' AND u.tenant_id = 0 AND u.dept_id = 0

2023-11-22 15:05:26 [XNIO-1 task-4] ERROR c.t.f.web.GlobalExceptionHandler
 - 请求地址'/login',发生未知异常.
com.treetao.common.exception.ServiceException: 该租户或机构下用户不存在！
\tat com.treetao.system.service.SysLoginService.loadUserByUsername(SysLoginService.java:230)
\tat com.treetao.system.service.SysLoginService.login(SysLoginService.java:87)
\tat com.treetao.web.system.SysLoginController.login(SysLoginController.java:55)
\tat com.treetao.web.system.SysLoginController$$FastClassBySpringCGLIB$$ba5e99a6.invoke(<generated>)
\tat org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.validation.beanvalidation.MethodValidationInterceptor.invoke(MethodValidationInterceptor.java:123)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:89)
\tat com.treetao.framework.tenant.TenantAspect.around(TenantAspect.java:20)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)
\tat org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:634)
\tat org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:624)
\tat org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:72)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:175)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:708)
\tat com.treetao.web.system.SysLoginController$$EnhancerBySpringCGLIB$$19417abb.login(<generated>)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)
\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)
\tat org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)
\tat org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)
\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)
\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)
\tat org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
\tat org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1071)
\tat org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:964)
\tat org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
\tat org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:909)
\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:517)
\tat org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:584)
\tat io.undertow.servlet.handlers.ServletHandler.handleRequest(ServletHandler.java:74)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:129)
\tat org.springframework.web.filter.CorsFilter.doFilterInternal(CorsFilter.java:91)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat com.treetao.common.filter.RepeatableFilter.doFilter(RepeatableFilter.java:32)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat io.undertow.servlet.handlers.FilterHandler.handleRequest(FilterHandler.java:84)
\tat io.undertow.servlet.handlers.security.ServletSecurityRoleHandler.handleRequest(ServletSecurityRoleHandler.java:62)
\tat io.undertow.servlet.handlers.ServletChain$1.handleRequest(ServletChain.java:68)
\tat io.undertow.servlet.handlers.ServletDispatchingHandler.handleRequest(ServletDispatchingHandler.java:36)
\tat io.undertow.servlet.handlers.RedirectDirHandler.handleRequest(RedirectDirHandler.java:68)
\tat io.undertow.servlet.handlers.security.SSLInformationAssociationHandler.handleRequest(SSLInformationAssociationHandler.java:117)
\tat io.undertow.servlet.handlers.security.ServletAuthenticationCallHandler.handleRequest(ServletAuthenticationCallHandler.java:57)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.security.handlers.AbstractConfidentialityHandler.handleRequest(AbstractConfidentialityHandler.java:46)
\tat io.undertow.servlet.handlers.security.ServletConfidentialityConstraintHandler.handleRequest(ServletConfidentialityConstraintHandler.java:64)
\tat io.undertow.security.handlers.AuthenticationMechanismsHandler.handleRequest(AuthenticationMechanismsHandler.java:60)
\tat io.undertow.servlet.handlers.security.CachedAuthenticatedSessionHandler.handleRequest(CachedAuthenticatedSessionHandler.java:77)
\tat io.undertow.security.handlers.AbstractSecurityContextAssociationHandler.handleRequest(AbstractSecurityContextAssociationHandler.java:43)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.servlet.handlers.SendErrorPageHandler.handleRequest(SendErrorPageHandler.java:52)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.servlet.handlers.ServletInitialHandler.handleFirstRequest(ServletInitialHandler.java:275)
\tat io.undertow.servlet.handlers.ServletInitialHandler.access$100(ServletInitialHandler.java:79)
\tat io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:134)
\tat io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:131)
\tat io.undertow.servlet.core.ServletRequestContextThreadSetupAction$1.call(ServletRequestContextThreadSetupAction.java:48)
\tat io.undertow.servlet.core.ContextClassLoaderSetupAction$1.call(ContextClassLoaderSetupAction.java:43)
\tat io.undertow.servlet.handlers.ServletInitialHandler.dispatchRequest(ServletInitialHandler.java:255)
\tat io.undertow.servlet.handlers.ServletInitialHandler.access$000(ServletInitialHandler.java:79)
\tat io.undertow.servlet.handlers.ServletInitialHandler$1.handleRequest(ServletInitialHandler.java:100)
\tat io.undertow.server.Connectors.executeRootHandler(Connectors.java:393)
\tat io.undertow.server.HttpServerExchange$1.run(HttpServerExchange.java:852)
\tat org.jboss.threads.ContextClassLoaderSavingRunnable.run(ContextClassLoaderSavingRunnable.java:35)
\tat org.jboss.threads.EnhancedQueueExecutor.safeRun(EnhancedQueueExecutor.java:2019)
\tat org.jboss.threads.EnhancedQueueExecutor$ThreadBody.doRunTask(EnhancedQueueExecutor.java:1558)
\tat org.jboss.threads.EnhancedQueueExecutor$ThreadBody.run(EnhancedQueueExecutor.java:1449)
\tat org.xnio.XnioWorker$WorkerThreadFactory$1$1.run(XnioWorker.java:1282)
\tat java.base/java.lang.Thread.run(Thread.java:829)
2023-11-22 15:05:26 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[POST /login],耗时:[52]毫秒
2023-11-22 15:05:26 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /captchaImage],无参数
2023-11-22 15:05:26 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /captchaImage],耗时:[10]毫秒
2023-11-22 15:05:29 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/dept/all/1712065400642588672],无参数
2023-11-22 15:05:29 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/tenant/no-info/1712065400642588672],无参数
2023-11-22 15:05:29 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/dept/all/1712065400642588672],耗时:[6]毫秒
 Consume Time：1 ms 2023-11-22 15:05:29
 Execute SQL：SELECT tenant_id,tenant_name,system_name,logo_file_id,login_bg_file_id,domain,status,position,end_date,region_code,region_name,orderby,account_num FROM sys_tenant WHERE tenant_id=1712065400642588672 

 Consume Time：1 ms 2023-11-22 15:05:29
 Execute SQL：SELECT dept_id,dept_name FROM sys_dept WHERE del_flag='0' AND (tenant_id = 1712065400642588672 AND del_flag = '0') ORDER BY parent_id ASC,order_num ASC

 Consume Time：2 ms 2023-11-22 15:05:29
 Execute SQL：SELECT oss_id,new_id,file_name,original_name,file_suffix,url,service,create_by,create_time,update_by,update_time,del_flag FROM sys_oss WHERE oss_id=1722910027733913602 AND del_flag='0'

 Consume Time：1 ms 2023-11-22 15:05:29
 Execute SQL：SELECT oss_id,new_id,file_name,original_name,file_suffix,url,service,create_by,create_time,update_by,update_time,del_flag FROM sys_oss WHERE oss_id=1722910072969482241 AND del_flag='0'

2023-11-22 15:05:29 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/tenant/no-info/1712065400642588672],耗时:[15]毫秒
2023-11-22 15:05:31 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /login],参数类型[json],参数:[{"username":"qjgly","password":"25d55ad283aa400af464c76d713c07ad","code":"0795","uuid":"faa7efbad5284f01a5a3d75720231609","tenantId":"1712065400642588672","orgId":"1712456358060216322","loginType":"0"}]
2023-11-22 15:05:31 [XNIO-1 task-1] ERROR c.t.f.web.GlobalExceptionHandler
 - 请求地址'/login',发生未知异常.
com.treetao.common.exception.user.CaptchaException: 验证码错误
\tat com.treetao.system.service.SysLoginService.validateCaptcha(SysLoginService.java:192)
\tat com.treetao.system.service.SysLoginService.login(SysLoginService.java:84)
\tat com.treetao.web.system.SysLoginController.login(SysLoginController.java:55)
\tat com.treetao.web.system.SysLoginController$$FastClassBySpringCGLIB$$ba5e99a6.invoke(<generated>)
\tat org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.validation.beanvalidation.MethodValidationInterceptor.invoke(MethodValidationInterceptor.java:123)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:89)
\tat com.treetao.framework.tenant.TenantAspect.around(TenantAspect.java:20)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)
\tat org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:634)
\tat org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:624)
\tat org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:72)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:175)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97)
\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
\tat org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:708)
\tat com.treetao.web.system.SysLoginController$$EnhancerBySpringCGLIB$$19417abb.login(<generated>)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)
\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)
\tat org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)
\tat org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)
\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)
\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)
\tat org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
\tat org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1071)
\tat org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:964)
\tat org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
\tat org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:909)
\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:517)
\tat org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:584)
\tat io.undertow.servlet.handlers.ServletHandler.handleRequest(ServletHandler.java:74)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:129)
\tat org.springframework.web.filter.CorsFilter.doFilterInternal(CorsFilter.java:91)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat com.treetao.common.filter.RepeatableFilter.doFilter(RepeatableFilter.java:32)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
\tat io.undertow.servlet.core.ManagedFilter.doFilter(ManagedFilter.java:67)
\tat io.undertow.servlet.handlers.FilterHandler$FilterChainImpl.doFilter(FilterHandler.java:131)
\tat io.undertow.servlet.handlers.FilterHandler.handleRequest(FilterHandler.java:84)
\tat io.undertow.servlet.handlers.security.ServletSecurityRoleHandler.handleRequest(ServletSecurityRoleHandler.java:62)
\tat io.undertow.servlet.handlers.ServletChain$1.handleRequest(ServletChain.java:68)
\tat io.undertow.servlet.handlers.ServletDispatchingHandler.handleRequest(ServletDispatchingHandler.java:36)
\tat io.undertow.servlet.handlers.RedirectDirHandler.handleRequest(RedirectDirHandler.java:68)
\tat io.undertow.servlet.handlers.security.SSLInformationAssociationHandler.handleRequest(SSLInformationAssociationHandler.java:117)
\tat io.undertow.servlet.handlers.security.ServletAuthenticationCallHandler.handleRequest(ServletAuthenticationCallHandler.java:57)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.security.handlers.AbstractConfidentialityHandler.handleRequest(AbstractConfidentialityHandler.java:46)
\tat io.undertow.servlet.handlers.security.ServletConfidentialityConstraintHandler.handleRequest(ServletConfidentialityConstraintHandler.java:64)
\tat io.undertow.security.handlers.AuthenticationMechanismsHandler.handleRequest(AuthenticationMechanismsHandler.java:60)
\tat io.undertow.servlet.handlers.security.CachedAuthenticatedSessionHandler.handleRequest(CachedAuthenticatedSessionHandler.java:77)
\tat io.undertow.security.handlers.AbstractSecurityContextAssociationHandler.handleRequest(AbstractSecurityContextAssociationHandler.java:43)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.servlet.handlers.SendErrorPageHandler.handleRequest(SendErrorPageHandler.java:52)
\tat io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43)
\tat io.undertow.servlet.handlers.ServletInitialHandler.handleFirstRequest(ServletInitialHandler.java:275)
\tat io.undertow.servlet.handlers.ServletInitialHandler.access$100(ServletInitialHandler.java:79)
\tat io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:134)
\tat io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:131)
\tat io.undertow.servlet.core.ServletRequestContextThreadSetupAction$1.call(ServletRequestContextThreadSetupAction.java:48)
\tat io.undertow.servlet.core.ContextClassLoaderSetupAction$1.call(ContextClassLoaderSetupAction.java:43)
\tat io.undertow.servlet.handlers.ServletInitialHandler.dispatchRequest(ServletInitialHandler.java:255)
\tat io.undertow.servlet.handlers.ServletInitialHandler.access$000(ServletInitialHandler.java:79)
\tat io.undertow.servlet.handlers.ServletInitialHandler$1.handleRequest(ServletInitialHandler.java:100)
\tat io.undertow.server.Connectors.executeRootHandler(Connectors.java:393)
\tat io.undertow.server.HttpServerExchange$1.run(HttpServerExchange.java:852)
\tat org.jboss.threads.ContextClassLoaderSavingRunnable.run(ContextClassLoaderSavingRunnable.java:35)
\tat org.jboss.threads.EnhancedQueueExecutor.safeRun(EnhancedQueueExecutor.java:2019)
\tat org.jboss.threads.EnhancedQueueExecutor$ThreadBody.doRunTask(EnhancedQueueExecutor.java:1558)
\tat org.jboss.threads.EnhancedQueueExecutor$ThreadBody.run(EnhancedQueueExecutor.java:1449)
\tat org.xnio.XnioWorker$WorkerThreadFactory$1$1.run(XnioWorker.java:1282)
\tat java.base/java.lang.Thread.run(Thread.java:829)
2023-11-22 15:05:31 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[POST /login],耗时:[15]毫秒
2023-11-22 15:05:31 [schedule-pool-1] INFO  c.t.s.s.i.SysLogininforServiceImpl
 - [127.0.0.1]内网IP[qjgly][Error][验证码错误]
2023-11-22 15:05:31 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /captchaImage],无参数
2023-11-22 15:05:31 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /captchaImage],耗时:[5]毫秒
 Consume Time：7 ms 2023-11-22 15:05:31
 Execute SQL：INSERT INTO sys_logininfor ( info_id, user_name, status, ipaddr, login_location, browser, os, msg, login_time ) VALUES ( 1727221754543513601, 'qjgly', '1', '127.0.0.1', '内网IP', 'Firefox', 'Windows 10 or Windows Server 2016', '验证码错误', '2023-11-22 15:05:31' )

2023-11-22 15:05:34 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /login],参数类型[json],参数:[{"username":"qjgly","password":"25d55ad283aa400af464c76d713c07ad","code":"0217","uuid":"5de5cbafa9c74f95bb3f6681b394f210","tenantId":"1712065400642588672","orgId":"1712456358060216322","loginType":"0"}]
 Consume Time：2 ms 2023-11-22 15:05:34
 Execute SQL：select u.tenant_id, u.user_id, u.dept_id, u.user_name, u.nick_name, u.user_type, u.email, u.avatar, u.phonenumber, u.password, u.sex, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by, u.create_time, u.remark, u.the_title_code, u.login_platform, u.service_crowd_label, u.dept_section_ids, u.examine_type, u.login_platform, u.pinyin, u.pinyin_jx, d.dept_id, d.parent_id, d.ancestors, d.dept_name, d.order_num, d.status as dept_status, r.role_id, r.role_name, r.role_key, r.role_sort, r.query_data_scope, r.edit_data_scope, r.status as role_status from sys_user u inner join sys_dept d on u.dept_id = d.dept_id left join sys_user_role sur on u.user_id = sur.user_id left join sys_role r on r.role_id = sur.role_id where u.del_flag = '0' and u.user_name = 'qjgly' and u.tenant_id=1712065400642588672 and u.dept_id=1712456358060216322

 Consume Time：1 ms 2023-11-22 15:05:34
 Execute SQL：SELECT status, login_platform FROM sys_user WHERE del_flag = '0' AND (user_name = 'qjgly' AND tenant_id = 1712065400642588672 AND dept_id = 1712456358060216322 AND examine_type = '1')

 Consume Time：2 ms 2023-11-22 15:05:34
 Execute SQL：select u.tenant_id, u.user_id, u.dept_id, u.user_name, u.nick_name, u.user_type, u.email, u.avatar, u.phonenumber, u.password, u.sex, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by, u.create_time, u.remark, u.the_title_code, u.login_platform, u.service_crowd_label, u.dept_section_ids, u.examine_type, u.login_platform, u.pinyin, u.pinyin_jx, d.dept_id, d.parent_id, d.ancestors, d.dept_name, d.order_num, d.status as dept_status, r.role_id, r.role_name, r.role_key, r.role_sort, r.query_data_scope, r.edit_data_scope, r.status as role_status from sys_user u inner join sys_dept d on u.dept_id = d.dept_id left join sys_user_role sur on u.user_id = sur.user_id left join sys_role r on r.role_id = sur.role_id where u.del_flag = '0' and u.user_name = 'qjgly' and u.tenant_id=1712065400642588672 and u.dept_id=1712456358060216322

 Consume Time：2 ms 2023-11-22 15:05:34
 Execute SQL：SELECT DISTINCT m.perms FROM sys_menu m LEFT JOIN sys_role_menu rm ON m.menu_id = rm.menu_id LEFT JOIN sys_user_role sur ON rm.role_id = sur.role_id LEFT JOIN sys_role r ON r.role_id = sur.role_id WHERE m.status = '0' AND r.status = '0' AND sur.user_id = 1712474946464763905

 Consume Time：1 ms 2023-11-22 15:05:34
 Execute SQL：SELECT DISTINCT r.role_id, r.role_name, r.role_key, r.role_sort, r.data_scope, r.query_data_scope, r.edit_data_scope, r.can_query_detail, r.menu_check_strictly, r.dept_check_strictly, r.status, r.del_flag, r.create_time, r.remark, r.sys FROM sys_role r LEFT JOIN sys_user_role sur ON sur.role_id = r.role_id LEFT JOIN sys_user u ON u.user_id = sur.user_id WHERE r.del_flag = '0' AND sur.user_id = 1712474946464763905

 Consume Time：1 ms 2023-11-22 15:05:34
 Execute SQL：SELECT dept_id FROM sys_dept WHERE del_flag='0' AND (find_in_set('1712456358060216322' , ancestors) <> 0)

 Consume Time：1 ms 2023-11-22 15:05:34
 Execute SQL：SELECT dept_id FROM sys_dept WHERE del_flag='0' AND (del_flag = '0' AND dept_id IN (1712456358060216322))

2023-11-22 15:05:34 [XNIO-1 task-1] INFO  c.t.f.listener.UserActionListener
 - user doLogin, userId:sys_user:1712474946464763905, token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJzeXNfdXNlcjoxNzEyNDc0OTQ2NDY0NzYzOTA1Iiwicm5TdHIiOiJXeER5bWF1ZUN5UVlScG03VXlNVlZYU003c2M4OVVZNiIsInVzZXJJZCI6MTcxMjQ3NDk0NjQ2NDc2MzkwNX0.HeyuylT6zKaXHiRnBemcTcLIq0vKbbZc5YQLt0NZ4Sg
2023-11-22 15:05:34 [XNIO-1 task-1] INFO  c.t.f.listener.UserActionListener
 - user doLogout, userId:sys_user:1712474946464763905, token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiJzeXNfdXNlcjoxNzEyNDc0OTQ2NDY0NzYzOTA1Iiwicm5TdHIiOiJHanRRcjZFcFB2SUFJdmtaSlRFM2dvY1NhdzdTS3lTYiIsInVzZXJJZCI6MTcxMjQ3NDk0NjQ2NDc2MzkwNX0.DhnH497kPbo4FBL8Hib4DlqJ2wsZ1GxkNf7lOmlY_BQ
2023-11-22 15:05:34 [schedule-pool-1] INFO  c.t.s.s.i.SysLogininforServiceImpl
 - [127.0.0.1]内网IP[qjgly][Success][登录成功]
2023-11-22 15:05:34 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 Consume Time：4 ms 2023-11-22 15:05:34
 Execute SQL：INSERT INTO sys_logininfor ( info_id, user_name, status, ipaddr, login_location, browser, os, msg, login_time, org_id ) VALUES ( 1727221768867061762, 'qjgly', '0', '127.0.0.1', '内网IP', 'Firefox', 'Windows 10 or Windows Server 2016', '登录成功', '2023-11-22 15:05:34', 1712456358060216322 )

 Consume Time：3 ms 2023-11-22 15:05:34
 Execute SQL：UPDATE sys_user SET login_ip = '127.0.0.1', login_date = '2023-11-22 15:05:34', update_by = 1712474946464763905, update_time = '2023-11-22 15:05:34' WHERE user_id = 1712474946464763905 AND del_flag = '0'

 - [PLUS]结束请求 => URL[POST /login],耗时:[303]毫秒
2023-11-22 15:05:34 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /getInfo],无参数
 Consume Time：1 ms 2023-11-22 15:05:34
 Execute SQL：SELECT u.tenant_id, u.user_id, u.dept_id, u.user_name, u.nick_name, u.user_type, u.email, u.avatar, u.phonenumber, u.password, u.sex, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by, u.create_time, u.remark, u.the_title_code, u.login_platform, u.service_crowd_label, u.dept_section_ids, u.examine_type, u.login_platform, u.pinyin, u.pinyin_jx, d.dept_id, d.parent_id, d.ancestors, d.dept_name, d.order_num, d.status AS dept_status, r.role_id, r.role_name, r.role_key, r.role_sort, r.query_data_scope, r.edit_data_scope, r.status AS role_status FROM sys_user u INNER JOIN sys_dept d ON u.dept_id = d.dept_id LEFT JOIN sys_user_role sur ON u.user_id = sur.user_id LEFT JOIN sys_role r ON r.role_id = sur.role_id WHERE u.del_flag = '0' AND u.user_id = 1712474946464763905

2023-11-22 15:05:34 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /getInfo],耗时:[50]毫秒
2023-11-22 15:05:34 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /getRouters],无参数
 Consume Time：2 ms 2023-11-22 15:05:34
 Execute SQL：SELECT DISTINCT m.menu_id, m.parent_id, m.menu_name, m.path, m.component, m.query_param, m.visible, m.status, m.perms, m.is_frame, m.is_cache, m.menu_type, m.icon, m.order_num, m.create_time, m.refresh, m.new_window FROM sys_menu m LEFT JOIN sys_role_menu rm ON m.menu_id = rm.menu_id LEFT JOIN sys_user_role sur ON rm.role_id = sur.role_id LEFT JOIN sys_role ro ON sur.role_id = ro.role_id LEFT JOIN sys_user u ON sur.user_id = u.user_id WHERE u.user_id = 1712474946464763905 AND m.menu_type IN ('M', 'C') AND m.status = '0' AND ro.status = '0' ORDER BY m.parent_id, m.order_num

2023-11-22 15:05:34 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[POST /getRouters],耗时:[25]毫秒
2023-11-22 15:05:39 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /client/common/query/ui/checkup_form],无参数
2023-11-22 15:05:39 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /client/common/query/data/checkup_form],参数类型[json],参数:[{"pageNum":1,"pageSize":15,"sortColumn":"","sortWay":""}]
 Consume Time：2 ms 2023-11-22 15:05:39
 Execute SQL：SELECT id, code, name, conds, buttons, sqls, rule, status, paging, load_doctor, load_crowd_label, create_by, create_time, update_by, update_time, del_flag FROM biz_ui_query WHERE del_flag = '0' AND (code = 'checkup_form' AND status = '0')

 Consume Time：2 ms 2023-11-22 15:05:39
 Execute SQL：SELECT id, code, name, conds, buttons, sqls, rule, status, paging, load_doctor, load_crowd_label, create_by, create_time, update_by, update_time, del_flag FROM biz_ui_query WHERE del_flag = '0' AND (code = 'checkup_form' AND status = '0')

2023-11-22 15:05:39 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /client/common/query/ui/checkup_form],耗时:[34]毫秒
 Consume Time：2 ms 2023-11-22 15:05:39
 Execute SQL：SELECT b.sno AS sno, b.name AS name, i.card_no AS card_no, i.gender AS gender, i.age AS age, i.tel AS tel, b.complete_status AS complete_status, b.reg_date AS reg_date, b.plan_date AS plan_date, b.complete_date AS complete_date, b.general_doctor_id AS general_doctor_id, b.general_date AS general_date, b.review_doctor_id AS review_doctor_id, b.review_date AS review_date FROM biz_checkup_form b LEFT JOIN arch_resident_info i ON i.arch_id = b.arch_id WHERE b.org_id = 1712456358060216322 AND b.group_sno IS NULL LIMIT 0, 15

 Consume Time：2 ms 2023-11-22 15:05:39
 Execute SQL：SELECT COUNT(*) FROM (SELECT b.sno AS sno, b.name AS name, i.card_no AS card_no, i.gender AS gender, i.age AS age, i.tel AS tel, b.complete_status AS complete_status, b.reg_date AS reg_date, b.plan_date AS plan_date, b.complete_date AS complete_date, b.general_doctor_id AS general_doctor_id, b.general_date AS general_date, b.review_doctor_id AS review_doctor_id, b.review_date AS review_date FROM biz_checkup_form b LEFT JOIN arch_resident_info i ON i.arch_id = b.arch_id WHERE b.org_id = 1712456358060216322 AND b.group_sno IS NULL) tmp

2023-11-22 15:05:39 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[POST /client/common/query/data/checkup_form],耗时:[130]毫秒
2023-11-22 15:05:39 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /biz/dict/data/type/sex],无参数
2023-11-22 15:05:39 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /biz/dict/data/type/checkup_form_complete_status],无参数
2023-11-22 15:05:39 [XNIO-1 task-3] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /biz/dict/data/type/checkup_form_complete_status],无参数
2023-11-22 15:05:39 [XNIO-1 task-2] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /biz/dict/data/type/sex],无参数
2023-11-22 15:05:39 [XNIO-1 task-5] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/user/doctors],无参数
2023-11-22 15:05:39 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/user/doctors],无参数
 Consume Time：2 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dept_id,ancestors FROM sys_dept WHERE del_flag='0' AND (dept_id = 1712456358060216322)

 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dept_id,ancestors FROM sys_dept WHERE del_flag='0' AND (dept_id = 1712456358060216322)

 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dept_id,ancestors FROM sys_dept WHERE del_flag='0' AND (dept_id = 1712456358060216322)

 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dept_id,ancestors FROM sys_dept WHERE del_flag='0' AND (dept_id = 1712456358060216322)

 Consume Time：7 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dict_code,dict_sort,dict_label,dict_value,dict_type,css_class,list_class,is_default,status,remark,cover_code,parent_code,org_id,tenant_id,create_by,create_time,update_by,update_time,del_flag FROM biz_dict_data WHERE del_flag='0' AND (dict_type = 'sex' AND org_id IN (0,1712456358060216322,1712050875809779713))

 Consume Time：7 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dict_code,dict_sort,dict_label,dict_value,dict_type,css_class,list_class,is_default,status,remark,cover_code,parent_code,org_id,tenant_id,create_by,create_time,update_by,update_time,del_flag FROM biz_dict_data WHERE del_flag='0' AND (dict_type = 'checkup_form_complete_status' AND org_id IN (0,1712456358060216322,1712050875809779713))

 Consume Time：7 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dict_code, dict_sort, dict_label, dict_value, dict_type, css_class, list_class, is_default, status, remark, cover_code, parent_code, org_id, tenant_id, create_by, create_time, update_by, update_time, del_flag FROM biz_dict_data WHERE del_flag = '0' AND (dict_type = 'sex' AND org_id IN (0, 1712456358060216322, 1712050875809779713))

 Consume Time：8 ms 2023-11-22 15:05:39
 Execute SQL：SELECT dict_code, dict_sort, dict_label, dict_value, dict_type, css_class, list_class, is_default, status, remark, cover_code, parent_code, org_id, tenant_id, create_by, create_time, update_by, update_time, del_flag FROM biz_dict_data WHERE del_flag = '0' AND (dict_type = 'checkup_form_complete_status' AND org_id IN (0, 1712456358060216322, 1712050875809779713))

 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT user_id,nick_name,pinyin_jx FROM sys_user WHERE del_flag='0' AND (dept_id = 1712456358060216322 AND status = '0')

 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT user_id,nick_name,pinyin_jx FROM sys_user WHERE del_flag='0' AND (dept_id = 1712456358060216322 AND status = '0')

2023-11-22 15:05:39 [XNIO-1 task-2] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /biz/dict/data/type/sex],耗时:[41]毫秒
2023-11-22 15:05:39 [XNIO-1 task-3] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /biz/dict/data/type/checkup_form_complete_status],耗时:[41]毫秒
2023-11-22 15:05:39 [XNIO-1 task-4] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /biz/dict/data/type/sex],耗时:[51]毫秒
2023-11-22 15:05:39 [XNIO-1 task-1] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /biz/dict/data/type/checkup_form_complete_status],耗时:[48]毫秒
2023-11-22 15:05:39 [XNIO-1 task-5] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/user/doctors],耗时:[47]毫秒
2023-11-22 15:05:39 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/user/doctors],耗时:[45]毫秒
2023-11-22 15:05:39 [XNIO-1 task-5] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/user/doctors],无参数
2023-11-22 15:05:39 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[GET /system/user/doctors],无参数
 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT user_id,nick_name,pinyin_jx FROM sys_user WHERE del_flag='0' AND (dept_id = 1712456358060216322 AND status = '0')

 Consume Time：1 ms 2023-11-22 15:05:39
 Execute SQL：SELECT user_id,nick_name,pinyin_jx FROM sys_user WHERE del_flag='0' AND (dept_id = 1712456358060216322 AND status = '0')

2023-11-22 15:05:39 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/user/doctors],耗时:[14]毫秒
2023-11-22 15:05:39 [XNIO-1 task-5] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[GET /system/user/doctors],耗时:[14]毫秒
2023-11-22 15:05:41 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /client/common/query/data/checkup_form],参数类型[json],参数:[{"pageNum":2,"pageSize":15,"sortColumn":"","sortWay":"","index":0}]
 Consume Time：1 ms 2023-11-22 15:05:41
 Execute SQL：SELECT id,code,name,conds,buttons,sqls,rule,status,paging,load_doctor,load_crowd_label,create_by,create_time,update_by,update_time,del_flag FROM biz_ui_query WHERE del_flag='0' AND (code = 'checkup_form' AND status = '0')

 Consume Time：2 ms 2023-11-22 15:05:41
 Execute SQL：SELECT b.sno AS sno, b.name AS name, i.card_no AS card_no, i.gender AS gender, i.age AS age, i.tel AS tel, b.complete_status AS complete_status, b.reg_date AS reg_date, b.plan_date AS plan_date, b.complete_date AS complete_date, b.general_doctor_id AS general_doctor_id, b.general_date AS general_date, b.review_doctor_id AS review_doctor_id, b.review_date AS review_date FROM biz_checkup_form b LEFT JOIN arch_resident_info i ON i.arch_id = b.arch_id WHERE b.org_id = 1712456358060216322 and b.group_sno is null LIMIT 15,15

 Consume Time：1 ms 2023-11-22 15:05:41
 Execute SQL：SELECT COUNT(*) FROM (SELECT b.sno AS sno, b.name AS name, i.card_no AS card_no, i.gender AS gender, i.age AS age, i.tel AS tel, b.complete_status AS complete_status, b.reg_date AS reg_date, b.plan_date AS plan_date, b.complete_date AS complete_date, b.general_doctor_id AS general_doctor_id, b.general_date AS general_date, b.review_doctor_id AS review_doctor_id, b.review_date AS review_date FROM biz_checkup_form b LEFT JOIN arch_resident_info i ON i.arch_id = b.arch_id WHERE b.org_id = 1712456358060216322 and b.group_sno is null) tmp

2023-11-22 15:05:41 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[POST /client/common/query/data/checkup_form],耗时:[59]毫秒
2023-11-22 15:05:43 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]开始请求 => URL[POST /print/personal_exam_report],参数类型[json],参数:[{"sno":"G202311110002"}]
#before iBizTemplatePrintService.print#1700636743176
#before iPrintDataService.getPrintData#1700636743189
 Consume Time：1 ms 2023-11-22 15:05:43
 Execute SQL：SELECT dept_id,ancestors FROM sys_dept WHERE del_flag='0' AND (dept_id = 1712456358060216322)

 Consume Time：1 ms 2023-11-22 15:05:43
 Execute SQL：SELECT template_file, bind_sql, bind_rule, bind_impl, bind_type, script, template_code, org_id FROM biz_template_print WHERE del_flag = '0' AND (template_code = 'personal_exam_report' AND org_id IN (0, 1712456358060216322, 1712050875809779713))

 Consume Time：1 ms 2023-11-22 15:05:43
 Execute SQL：SELECT oss_id,new_id,file_name,original_name,file_suffix,url,service,create_by,create_time,update_by,update_time,del_flag FROM sys_oss WHERE oss_id=1726915515360022530 AND del_flag='0'

 Consume Time：1 ms 2023-11-22 15:05:43
 Execute SQL：SELECT id, type, arch_id, sno, sno_barcode, group_id, group_sno, plan_date, complete_status, reg_date, complete_date, general_doctor_id, general_date, review_doctor_id, review_date, payment_status, payment_way, payment_remark, refund_way, refund_reason, name, payment_date, refund_date, refund_money, payment_money, payee_doctor_id, refund_doctor_id, org_id, create_by, create_time, update_by, update_time, del_flag FROM biz_checkup_form WHERE del_flag = '0' AND (sno = 'G202311110002')

 Consume Time：2 ms 2023-11-22 15:05:43
 Execute SQL：SELECT id, arch_id, is_dead, dead_time, company_tel, dead_reason, is_master, master_name, master_rela_code, real_name, avatar, gender, card_type_code, card_no, tel, tel_type, age, birthday, country_code, nation_code, family_tel, family_tel_type, contact_name, contact_tel, contact_tel_way, contact_rela_code, domicile_addr, resident_type, blood_code, blood_rh_code, marital_code, cultural_code, occupation_code, company, company_id, company_dept, company_dept_id, medical_pay_code, other_pay_code, domicile_addr_grid_region_code, create_by, create_time, update_by, update_time, del_flag FROM arch_resident_info WHERE del_flag = '0' AND (arch_id = 28254903176568046)

 Consume Time：1 ms 2023-11-22 15:05:43
 Execute SQL：SELECT checkup_id, result_content, guide_content, approve_doctor_name, result_doctor_name FROM biz_checkup_form_report WHERE del_flag = '0' AND (checkup_id = 1723314479820771330)

 Consume Time：1 ms 2023-11-22 15:05:43
 Execute SQL：SELECT id, checkup_id, group_sno, complete_status_code, reason, next_plan_date, project_id, project_code, project_name, content, ehr_result, org_section_id, org_section_name, report_doctor_id, report_doctor_name, report_date, approve_doctor_id, approve_doctor_name, approve_date, project_type_code, serial_num, sample_num, org_id, create_by, create_time, update_by, update_time, del_flag FROM biz_checkup_form_project WHERE del_flag = '0' AND (checkup_id = 1723314479820771330 AND project_type_code = '1')

 Consume Time：5 ms 2023-11-22 15:05:43
 Execute SQL：SELECT id,checkup_id,group_sno,complete_status_code,reason,next_plan_date,project_id,project_code,project_name,content,ehr_result,org_section_id,org_section_name,report_doctor_id,report_doctor_name,report_date,approve_doctor_id,approve_doctor_name,approve_date,project_type_code,serial_num,sample_num,org_id,create_by,create_time,update_by,update_time,del_flag FROM biz_checkup_form_project WHERE del_flag='0' AND (checkup_id = 1723314479820771330 AND project_type_code = '2')

 Consume Time：2 ms 2023-11-22 15:05:43
 Execute SQL：SELECT id,checkup_id,group_sno,complete_status_code,reason,next_plan_date,project_id,project_code,project_name,content,ehr_result,org_section_id,org_section_name,report_doctor_id,report_doctor_name,report_date,approve_doctor_id,approve_doctor_name,approve_date,project_type_code,serial_num,sample_num,org_id,create_by,create_time,update_by,update_time,del_flag FROM biz_checkup_form_project WHERE del_flag='0' AND (checkup_id = 1723314479820771330 AND project_type_code = '3')

2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document start...
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document end, resolve and create 1 MetaTemplates.
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.deepoove.poi.render.DefaultRender
 - Render template start...
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{var}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{var}}, Sign: , policy:DocumentRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.deepoove.poi.render.DefaultRender
 - Successfully Render template in 127 millis
#after iPrintDataService.getPrintData#1700636746438
#before fillWordTemplate#1700636746438
#before storage.getObjectContent#1700636746438
#after storage.getObjectContent#1700636746438
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document start...
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document end, resolve and create 18 MetaTemplates.
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.deepoove.poi.render.DefaultRender
 - Render template start...
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{机构名称}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{姓名}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{性别}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{年龄}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{本人电话}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{体检编码}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{地址}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{机构电话}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{姓名}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{?体检结果解读}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{序号}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{内容}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{/体检结果解读}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{?健康指导建议}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{序号}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{内容}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{/健康指导建议}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{总检医生}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{审核医生}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{?测量项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{测量项目名称}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{报告医生}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{#明细}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{/测量项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{?检验项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{检验项目名称}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{报告医生}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{审核医生}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{#明细}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{/检验项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{?检查项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{检查项目名称}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{检查科室}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{报告医生}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 -   {{#明细}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{/检查项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - {{+检查项目文件}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.render.processor.LogProcessor
 - Img::{{条码}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{机构名称}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{姓名}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{性别}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{年龄}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{本人电话}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{体检编码}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{地址}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{机构电话}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{姓名}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.IterableProcessor
 - Process iterableTemplate:{{?体检结果解读}}{{序号}} {{项目}} {{内容}} {{/体检结果解读}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{序号}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{项目}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{内容}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{序号}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{项目}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{内容}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.IterableProcessor
 - Process iterableTemplate:{{?健康指导建议}}{{序号}} {{项目}} {{内容}} {{/健康指导建议}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{序号}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{项目}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{内容}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{序号}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{项目}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{内容}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{总检医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{审核医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.IterableProcessor
 - Process iterableTemplate:{{?测量项目}}{{测量项目名称}} {{报告医生}} {{#明细}} {{/测量项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{测量项目名称}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{报告医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{#明细}}, Sign:#, policy:TableRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.IterableProcessor
 - Process iterableTemplate:{{?检验项目}}{{检验项目名称}} {{报告医生}} {{审核医生}} {{#明细}} {{/检验项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{检验项目名称}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{报告医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{审核医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{#明细}}, Sign:#, policy:TableRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{检验项目名称}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{报告医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{审核医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{#明细}}, Sign:#, policy:TableRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{检验项目名称}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{报告医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{审核医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{#明细}}, Sign:#, policy:TableRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{检验项目名称}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{报告医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{审核医生}}, Sign: , policy:TextRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{#明细}}, Sign:#, policy:TableRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.IterableProcessor
 - Process iterableTemplate:{{?检查项目}}{{检查项目名称}} {{检查科室}} {{报告医生}} {{#明细}} {{/检查项目}}
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template Img::{{条码}}, Sign: , policy:DefaultPictImageTemplateRenderPolicy
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document start...
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document end, resolve and create 2 MetaTemplates.
2023-11-22 15:05:46 [XNIO-1 task-6] INFO  c.d.p.r.processor.DelegatePolicy
 - Start render Template {{+检查项目文件}}, Sign:+, policy:DocxRenderPolicy
2023-11-22 15:05:47 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document start...
2023-11-22 15:05:47 [XNIO-1 task-6] INFO  c.d.poi.resolver.TemplateResolver
 - Resolve the document end, resolve and create 1 MetaTemplates.
2023-11-22 15:05:47 [XNIO-1 task-6] INFO  c.deepoove.poi.render.DefaultRender
 - Successfully Render template in 492 millis
#before template.writeAndClose#1700636747120
#after template.writeAndClose#1700636747184
#before doc.save#1700636748440
2023-11-22 15:05:49 [xxl-job, executor ExecutorRegistryThread] ERROR c.x.job.core.util.XxlJobRemotingUtil
 - Connection refused: connect
java.net.ConnectException: Connection refused: connect
\tat java.base/java.net.PlainSocketImpl.waitForConnect(Native Method)
\tat java.base/java.net.PlainSocketImpl.socketConnect(PlainSocketImpl.java:107)
\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:412)
\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:255)
\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:237)
\tat java.base/java.net.Socket.connect(Socket.java:609)
\tat java.base/sun.net.NetworkClient.doConnect(NetworkClient.java:177)
\tat java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:509)
\tat java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:604)
\tat java.base/sun.net.www.http.HttpClient.<init>(HttpClient.java:277)
\tat java.base/sun.net.www.http.HttpClient.New(HttpClient.java:376)
\tat java.base/sun.net.www.http.HttpClient.New(HttpClient.java:397)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:1253)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1187)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1081)
\tat java.base/sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:1015)
\tat com.xxl.job.core.util.XxlJobRemotingUtil.postBody(XxlJobRemotingUtil.java:99)
\tat com.xxl.job.core.biz.client.AdminBizClient.registry(AdminBizClient.java:42)
\tat com.xxl.job.core.thread.ExecutorRegistryThread$1.run(ExecutorRegistryThread.java:48)
\tat java.base/java.lang.Thread.run(Thread.java:829)
2023-11-22 15:05:49 [xxl-job, executor ExecutorRegistryThread] INFO  c.x.j.c.t.ExecutorRegistryThread
 - >>>>>>>>>>> xxl-job registry fail, registryParam:RegistryParam{registryGroup='EXECUTOR', registryKey='medical-executor', registryValue='http://192.168.3.109:9999/'}, registryResult:ReturnT [code=500, msg=xxl-job remoting error(Connection refused: connect), for url : http://localhost:9100/xxl-job-admin/api/registry, content=null]
#after doc.save#1700636750587
#before outputStream.flush#1700636750587
#after outputStream.flush#1700636750587
#after fillWordTemplate#1700636750587
#after iBizTemplatePrintService.print#1700636750587
2023-11-22 15:05:50 [XNIO-1 task-6] DEBUG c.t.f.i.PlusWebInvokeTimeInterceptor
 - [PLUS]结束请求 => URL[POST /print/personal_exam_report],耗时:[7417]毫秒
`
