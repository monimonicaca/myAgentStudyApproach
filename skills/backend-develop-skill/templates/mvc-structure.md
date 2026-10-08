<architecture name="MVC / 三层架构项目模板">

  <positioning>
    这是一个基于 MVC 思想与经典三层架构的通用项目模板，
    通过 Controller、Service、Mapper 分离接口协议、业务处理与数据访问职责。

    本模板用于指导 CRUD、管理后台、Web API、传统业务系统等项目的架构组织。
    它不是 MVC 唯一的目录结构，也不是所有项目都必须创建完整目录。

    MVC / 三层架构关注职责分离与代码组织，
    不要求引入 DDD、聚合、值对象、领域服务等领域建模概念。
  </positioning>


  <!-- ========================================================= -->
  <!-- 核心原则                                                   -->
  <!-- ========================================================= -->

  <core-principles>

    <principle>
      Controller 负责接口协议与请求处理，不承载核心业务流程。
    </principle>

    <principle>
      Service 负责业务流程、业务判断与事务协调，是本模板的主要业务处理层。
    </principle>

    <principle>
      Mapper 负责数据访问，不承载业务规则。
    </principle>

    <principle>
      Entity 表示业务处理中使用的数据模型或持久化模型，
      不作为独立的架构层。
    </principle>

    <principle>
      DTO 用于隔离接口数据结构与内部数据模型，只有在实际存在边界隔离需求时才引入。
    </principle>

    <principle>
      Common、Config、Security 等属于项目级公共能力或横切能力，
      不是 MVC 核心组成部分，应按实际需求引入。
    </principle>

    <principle>
      不得为了满足模板目录而创建没有实际职责的类、接口或包。
    </principle>

  </core-principles>


  <!-- ========================================================= -->
  <!-- 架构依赖                                                   -->
  <!-- ========================================================= -->

  <dependency>

    <diagram>
      Controller → Service → Mapper → Database
    </diagram>

    <model>
      Controller / Service 使用 DTO 和 Entity，
      DTO 与 Entity 不属于独立的架构层。
    </model>

    <rules>

      <rule>
        Controller 可以调用 Service，
        不直接调用 Mapper。
      </rule>

      <rule>
        Service 可以调用 Mapper，
        负责组织业务流程、业务判断和事务边界。
      </rule>

      <rule>
        Mapper 负责访问数据库或其他持久化存储。
      </rule>

      <rule>
        Mapper 不负责业务流程和业务规则。
      </rule>

      <rule>
        Controller、Service、Mapper 不应形成反向依赖。
      </rule>

      <rule>
        Common 不得反向依赖具体业务模块。
      </rule>

    </rules>

  </dependency>


  <!-- ========================================================= -->
  <!-- 复杂度选择                                                 -->
  <!-- ========================================================= -->

  <complexity-selection>

    <level name="轻量">

      <when>
        单表或少量表 CRUD、业务规则少、事务简单、查询简单、外部系统较少。
      </when>

      <goal>
        以较低的结构成本完成清晰的职责分离。
      </goal>

      <typical>
        Controller、Service、Mapper、Entity。
      </typical>

      <optional>
        DTO、Common、Config、Security。
      </optional>

    </level>


    <level name="标准">

      <when>
        存在多表操作、较明确的业务规则、事务控制、请求与数据库模型存在差异，
        或接口数量开始增加。
      </when>

      <goal>
        在保持简单性的同时增强模块边界与数据隔离。
      </goal>

      <typical>
        Controller、Service、Mapper、Entity、DTO。
      </typical>

      <optional>
        service/impl、Common、Config、Security。
      </optional>

    </level>


    <level name="完整">

      <when>
        存在复杂业务流程、复杂查询、多个外部系统、复杂权限、
        异步处理、多种数据源或明显的横切关注点。
      </when>

      <goal>
        在三层架构基础上增加必要的工程能力，
        但仍保持 Controller → Service → Mapper 的主要职责边界。
      </goal>

      <typical>
        Controller、Service、Mapper、Entity、DTO、Config。
      </typical>

      <optional>
        service/impl、Security、Common、External、Message、Scheduler 等，
        根据实际需求增加。
      </optional>

    </level>

    <selection-rule>
      架构级别主要根据业务规则、事务复杂度、数据访问复杂度、
      外部集成和横切关注点判断，而不是单纯根据代码量、类数量或模块数量判断。
    </selection-rule>

  </complexity-selection>


  <!-- ========================================================= -->
  <!-- 轻量结构                                                   -->
  <!-- ========================================================= -->

  <structure level="轻量">

    <package name="controller"
             note="HTTP / Web API 接口层" />

    <package name="service"
             note="业务流程与业务处理" />

    <package name="mapper"
             note="数据库访问" />

    <package name="entity"
             note="数据模型 / 持久化模型" />

    <package name="dto"
             optional="true"
             note="当接口模型与内部模型需要隔离时引入" />

    <package name="common"
             optional="true"
             note="仅在确实存在跨模块公共能力时引入" />

  </structure>


  <!-- ========================================================= -->
  <!-- 标准结构                                                   -->
  <!-- ========================================================= -->

  <structure level="标准">

    <package name="controller"
             note="HTTP / Web API 接口层" />

    <package name="service">

      <package name="impl"
               optional="true"
               note="存在多个实现、明确接口抽象需求或团队规范要求时使用" />

    </package>

    <package name="mapper"
             note="数据库访问层" />

    <package name="entity"
             note="数据库实体或内部数据模型" />

    <package name="dto">

      <package name="request"
               note="接口请求模型" />

      <package name="response"
               note="接口响应模型" />

    </package>

    <package name="config"
             optional="true"
             note="Web、MyBatis、Jackson、跨域等框架配置" />

    <package name="common"
             optional="true">

      <package name="response"
               optional="true"
               note="统一响应协议存在时使用" />

      <package name="exception"
               optional="true"
               note="统一异常处理存在时使用" />

      <package name="util"
               optional="true"
               note="真正无业务语义的通用工具" />

    </package>

    <package name="security"
             optional="true"
             note="存在认证授权需求时引入，与复杂度等级无直接关系" />

  </structure>


  <!-- ========================================================= -->
  <!-- 完整结构                                                   -->
  <!-- ========================================================= -->

  <structure level="完整">

    <rule>
      沿用标准结构，根据实际业务增加横切能力、外部系统适配、
      消息处理、定时任务或其他基础设施能力。
    </rule>

    <package name="controller" />

    <package name="service">

      <package name="impl"
               optional="true" />

    </package>

    <package name="mapper" />

    <package name="entity" />

    <package name="dto">

      <package name="request" />

      <package name="response" />

    </package>

    <package name="config"
             optional="true" />

    <package name="security"
             optional="true" />

    <package name="common"
             optional="true">

      <package name="response"
               optional="true" />

      <package name="exception"
               optional="true" />

      <package name="util"
               optional="true" />

    </package>

    <package name="external"
             optional="true"
             note="第三方 API 或外部系统适配" />

    <package name="message"
             optional="true"
             note="MQ、事件消息等异步通信能力" />

    <package name="scheduler"
             optional="true"
             note="定时任务等调度能力" />

  </structure>


  <!-- ========================================================= -->
  <!-- 各层职责                                                   -->
  <!-- ========================================================= -->

  <layer-responsibilities>

    <layer name="controller">

      <duty>
        接收 HTTP / Web 请求。
      </duty>

      <duty>
        进行请求参数校验。
      </duty>

      <duty>
        将接口请求转换为 Service 所需的数据。
      </duty>

      <duty>
        调用 Service 完成业务操作。
      </duty>

      <duty>
        将 Service 结果转换为接口响应。
      </duty>

      <duty>
        根据项目约定返回 HTTP 状态码或统一响应结构。
      </duty>

      <forbidden>
        核心业务规则。
      </forbidden>

      <forbidden>
        直接操作 Mapper。
      </forbidden>

      <forbidden>
        直接操作数据库。
      </forbidden>

      <forbidden>
        大量业务流程编排。
      </forbidden>

      <forbidden>
        吞掉异常并静默处理。
      </forbidden>

    </layer>


    <layer name="service">

      <duty>
        承载主要业务流程和业务判断。
      </duty>

      <duty>
        协调多个 Mapper 或其他服务完成一次业务操作。
      </duty>

      <duty>
        定义需要事务保证的一组业务操作。
      </duty>

      <duty>
        根据业务状态决定允许执行的操作。
      </duty>

      <duty>
        处理 Entity、DTO 与其他内部数据模型之间的业务转换。
      </duty>

      <forbidden>
        处理 HTTP 请求或响应协议。
      </forbidden>

      <forbidden>
        依赖 Controller。
      </forbidden>

      <forbidden>
        将数据库访问细节扩散到业务流程之外。
      </forbidden>

    </layer>


    <layer name="mapper">

      <duty>
        执行数据库查询、插入、更新和删除。
      </duty>

      <duty>
        处理 ORM、SQL 或数据访问框架相关操作。
      </duty>

      <duty>
        根据需要返回 Entity、Projection 或查询结果。
      </duty>

      <forbidden>
        承载业务规则。
      </forbidden>

      <forbidden>
        调用 Service。
      </forbidden>

      <forbidden>
        根据业务状态决定是否允许执行操作。
      </forbidden>

    </layer>


    <layer name="entity">

      <duty>
        表示数据库实体、持久化模型或内部数据模型。
      </duty>

      <duty>
        根据项目使用的 ORM 框架承载必要的数据映射信息。
      </duty>

      <forbidden>
        依赖 Controller、Service 或 Mapper。
      </forbidden>

      <forbidden>
        承载跨对象的完整业务流程。
      </forbidden>

      <forbidden>
        负责 HTTP Request / Response 协议。
      </forbidden>

    </layer>


    <layer name="dto">

      <duty>
        表示接口或特定业务边界所需要的数据结构。
      </duty>

      <duty>
        隔离外部 API 数据结构与内部 Entity。
      </duty>

      <duty>
        防止数据库字段结构直接暴露给外部接口。
      </duty>

      <forbidden>
        承载业务流程。
      </forbidden>

      <forbidden>
        直接访问数据库。
      </forbidden>

    </layer>


    <layer name="common">

      <duty>
        提供真正跨业务模块且不包含具体业务语义的公共能力。
      </duty>

      <allowed>
        统一响应结构。
      </allowed>

      <allowed>
        全局异常处理。
      </allowed>

      <allowed>
        通用工具类。
      </allowed>

      <forbidden>
        具体业务逻辑。
      </forbidden>

      <forbidden>
        依赖具体业务模块。
      </forbidden>

      <forbidden>
        成为所有业务代码的集中存放位置。
      </forbidden>

    </layer>

  </layer-responsibilities>


  <!-- ========================================================= -->
  <!-- DTO 约定                                                   -->
  <!-- ========================================================= -->

  <dto-convention optional="true">

    <rule>
      DTO 不是 MVC 必须组件，仅在接口数据模型与内部模型需要隔离时使用。
    </rule>

    <rule>
      Request DTO 用于接收外部请求，不应直接作为数据库实体。
    </rule>

    <rule>
      Response DTO 用于返回外部响应，不应直接暴露数据库 Entity。
    </rule>

    <rule>
      不要求所有 Entity 都必须拥有对应 Request DTO 和 Response DTO。
    </rule>

    <rule>
      DTO 与 Entity 的转换方式可以根据项目复杂度选择，
      不强制建立独立 Assembler 层。
    </rule>

  </dto-convention>


  <!-- ========================================================= -->
  <!-- Service 约定                                               -->
  <!-- ========================================================= -->

  <service-convention>

    <rule>
      Service 是本架构中主要的业务处理位置。
    </rule>

    <rule>
      Service 可以协调多个 Mapper 完成一个完整业务操作。
    </rule>

    <rule>
      Service 可以调用其他 Service，但应避免形成复杂的循环依赖。
    </rule>

    <rule>
      Service 不应因为“代码可以复用”而无限膨胀，
      当某个模块形成明显独立职责时应考虑拆分 Service。
    </rule>

    <rule>
      Service 接口与实现是否分离由实际需求决定，
      不因为使用 Spring 就强制创建 Service + ServiceImpl。
    </rule>

  </service-convention>


  <!-- ========================================================= -->
  <!-- 事务约定                                                   -->
  <!-- ========================================================= -->

  <transaction-convention>

    <rule>
      事务边界默认由 Service 层定义。
    </rule>

    <rule>
      一个完整业务操作涉及多个数据库写操作时，
      应根据一致性需求在 Service 层建立事务边界。
    </rule>

    <rule>
      不应在 Controller 层定义业务事务。
    </rule>

    <rule>
      Mapper 层不负责决定业务事务边界。
    </rule>

    <rule>
      事务注解的具体使用方式根据所采用的技术栈决定，
      例如 Spring 项目可以使用 @Transactional。
    </rule>

  </transaction-convention>


  <!-- ========================================================= -->
  <!-- Security 约定                                              -->
  <!-- ========================================================= -->

  <security-convention optional="true">

    <description>
      Security 是横切能力，不属于 MVC 核心分层，
      是否存在与项目复杂度等级没有直接关系。
    </description>

    <authentication>
      负责登录认证、Token 验证、Session 或其他身份认证机制。
    </authentication>

    <authorization>
      负责权限相关的访问控制。
    </authorization>

    <rule>
      Security 不应替代 Service 中的业务规则判断。
    </rule>

    <rule>
      例如“当前用户是否可以修改某条数据”属于业务授权判断，
      不能简单等同于 JWT 是否有效。
    </rule>

  </security-convention>


  <!-- ========================================================= -->
  <!-- API 约定                                                   -->
  <!-- ========================================================= -->

  <api-convention optional="true">

    <rule>
      统一响应结构不是 MVC 必须要求，
      只有项目采用统一 API 协议时才引入。
    </rule>

    <rule>
      如果采用 ApiResponse 等统一响应结构，
      Controller 负责按照 API 协议返回响应。
    </rule>

    <rule>
      HTTP 异常应由统一异常处理机制进行适配，
      不要求每个 Controller 手动捕获并转换异常。
    </rule>

    <rule>
      推荐使用类型化异常表达业务错误，
      由全局异常处理器统一转换为 HTTP 响应。
    </rule>

  </api-convention>


  <!-- ========================================================= -->
  <!-- Common 约定                                                -->
  <!-- ========================================================= -->

  <common-convention optional="true">

    <allowed>
      真正跨业务且无业务语义的工具。
    </allowed>

    <allowed>
      全局异常处理。
    </allowed>

    <allowed>
      统一 API 响应协议。
    </allowed>

    <forbidden>
      UserUtils、OrderUtils、PaymentUtils 等具体业务工具。
    </forbidden>

    <forbidden>
      具体业务规则。
    </forbidden>

    <forbidden>
      通过 Common 绕过正常分层依赖。
    </forbidden>

  </common-convention>


  <!-- ========================================================= -->
  <!-- 命名约定                                                   -->
  <!-- ========================================================= -->

  <naming-convention>

    <controller>
      XxxController
    </controller>

    <service>
      XxxService
    </service>

    <service-implementation optional="true">
      XxxServiceImpl
    </service-implementation>

    <mapper>
      XxxMapper
    </mapper>

    <entity>
      Xxx
    </entity>

    <request-dto optional="true">
      XxxRequest
    </request-dto>

    <response-dto optional="true">
      XxxResponse
    </response-dto>

  </naming-convention>


  <!-- ========================================================= -->
  <!-- 反模式                                                     -->
  <!-- ========================================================= -->

  <anti-patterns>

    <anti-pattern>
      Controller 直接调用 Mapper。
    </anti-pattern>

    <anti-pattern>
      Mapper 中编写业务判断。
    </anti-pattern>

    <anti-pattern>
      Controller 中编写完整业务流程。
    </anti-pattern>

    <anti-pattern>
      Entity 直接负责 HTTP Request / Response。
    </anti-pattern>

    <anti-pattern>
      为每个 Service 强制创建接口和 Impl，即使不存在实际抽象需求。
    </anti-pattern>

    <anti-pattern>
      为每个 Entity 强制创建完整的 Request DTO、Response DTO 和 Converter。
    </anti-pattern>

    <anti-pattern>
      将所有公共代码无条件放入 Common。
    </anti-pattern>

    <anti-pattern>
      因为项目规模较小仍强制创建完整目录结构。
    </anti-pattern>

    <anti-pattern>
      因为项目存在 Security 就将其与 Service 的业务授权逻辑混为一谈。
    </anti-pattern>

    <anti-pattern>
      为了满足架构模板而创建没有实际职责的空包、空类或空接口。
    </anti-pattern>

  </anti-patterns>


  <!-- ========================================================= -->
  <!-- AI 生成约束                                                -->
  <!-- ========================================================= -->

  <ai-generation-rules>

    <rule>
      生成项目之前先根据业务复杂度选择轻量、标准或完整结构，
      不得默认生成完整结构。
    </rule>

    <rule>
      只创建当前需求实际需要的目录、类、接口和配置。
    </rule>

    <rule>
      不得因为模板中存在 optional 组件就自动创建该组件。
    </rule>

    <rule>
      Controller 保持薄，
      Service 承载主要业务流程，
      Mapper 保持数据访问职责。
    </rule>

    <rule>
      不得让 Controller 直接操作数据库。
    </rule>

    <rule>
      不得让 Mapper 承载业务规则。
    </rule>

    <rule>
      不得为了“复用”而把具体业务代码放入 Common。
    </rule>

    <rule>
      DTO、Security、Config、Common、ServiceImpl 等均根据实际需求决定是否创建。
    </rule>

    <rule>
      如果需求只是简单 CRUD，
      优先使用轻量结构，不得过度设计。
    </rule>

    <rule>
      如果业务复杂度增加，
      应优先在现有三层职责内进行合理拆分，
      而不是无条件增加新的架构层。
    </rule>

  </ai-generation-rules>


  <!-- ========================================================= -->
  <!-- 最终架构判断                                               -->
  <!-- ========================================================= -->

  <summary>

    <core>
      Controller → Service → Mapper → Database
    </core>

    <model>
      Entity / DTO 是数据模型，不是独立架构层。
    </model>

    <business>
      Service 是本模板中的主要业务逻辑承载位置。
    </business>

    <optional>
      Common、DTO、Config、Security、ServiceImpl、External、Message、
      Scheduler 等均按实际需求引入。
    </optional>

    <principle>
      架构的目标是明确职责和依赖方向，
      而不是让项目拥有尽可能多的目录和抽象。
    </principle>

  </summary>

</architecture>