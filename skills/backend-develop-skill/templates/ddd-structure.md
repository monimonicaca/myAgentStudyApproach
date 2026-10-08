<architecture name="DDD 项目架构模板">
  <positioning>
    这是一个基于 DDD、分层架构与依赖倒置的通用项目模板，不是 DDD 的唯一目录结构。
    DDD 是建模和架构思想，不等同于固定的文件夹数量。
  </positioning>

  <bounded-context>
    <rule>大型系统优先按限界上下文划分领域边界；不同上下文可以拥有各自独立的领域模型，不要求共享相同的 Entity、Value Object 或 Aggregate。</rule>
  </bounded-context>

  <core-principles>
    <principle>围绕领域模型组织业务规则，领域模型保持独立。</principle>
    <principle>Application 负责用例编排，不替代领域对象承载核心业务规则。</principle>
    <principle>Infrastructure 实现 Domain 定义的抽象。</principle>
    <principle>Interfaces 不承载领域业务规则。</principle>
    <principle>Domain 不依赖 Infrastructure、框架、数据库或 HTTP。</principle>
    <principle>目录结构服务于领域边界和依赖方向；不得为了满足模板目录而创建没有实际职责的类、接口或包。</principle>
  </core-principles>

  <dependency>
    <diagram>interfaces → application → domain ← infrastructure</diagram>
    <rule>Domain 定义 Repository 等抽象；Infrastructure 提供实现。</rule>
    <example>
      <domain>domain.repository.UserRepository</domain>
      <implementation>infrastructure.repository.UserRepositoryImpl implements UserRepository</implementation>
    </example>
  </dependency>

  <complexity-selection>
    <level name="轻量">
      <when>CRUD 为主、领域规则少、聚合协作少、无异步或复杂外部集成。</when>
      <optional>Domain Service、Domain Event、Assembler、Facade、CQRS、MQ。</optional>
    </level>
    <level name="标准">
      <when>存在明确聚合、不变式和中等复杂业务规则，聚合之间有有限协作。</when>
      <optional>Domain Service、Domain Event、Security、Assembler 按需引入。</optional>
    </level>
    <level name="完整">
      <when>多聚合协作、复杂业务流程、异步业务、多个外部系统、读写模型明显不同或需要 CQRS。</when>
      <common>Domain Service、Domain Event、Assembler、MQ、CQRS 等按实际需求引入，不因目录完整而强行创建。</common>
    </level>
  </complexity-selection>

  <team-conventions>
    <description>以下是本模板的团队工程约束，不是 DDD 的强制要求。</description>
    <convention>默认采用 interfaces、application、domain、infrastructure 四层；common 是可选的项目级公共能力。</convention>
    <convention>Repository interface 放在 domain，Repository implementation 放在 infrastructure。</convention>
    <convention>Application Layer 按 Use Case 组织，例如 CreateDiaryUseCase、LoginUserUseCase；Use Case 是应用层的实现形式，不强制使用 ApplicationService 命名。</convention>
    <convention>事务默认由 Application Layer 的 Use Case 定义边界；Domain 不感知事务框架。</convention>
    <convention>若项目采用统一 API 响应规范，由 interfaces 层负责响应协议与封装。</convention>
  </team-conventions>

  <structure level="轻量">
    <package name="interfaces" />
    <package name="application">
      <package name="usecase" />
    </package>
    <package name="domain">
      <package name="model" note="按业务领域或聚合组织实体、值对象与聚合根" />
      <package name="repository" note="Repository interface" />
    </package>
    <package name="infrastructure">
      <package name="repository" note="Repository implementation" />
      <package name="persistence" note="PO、DAO、ORM 或数据库适配" />
    </package>
    <package name="common" optional="true" note="仅放真正跨业务且无业务语义的公共能力" />
  </structure>

  <structure level="标准">
    <package name="interfaces">
      <package name="controller" />
      <package name="dto" optional="true" note="HTTP Request/Response 属于接口边界；不要求 interfaces 与 application 同时建立 DTO" />
    </package>
    <package name="application">
      <package name="usecase" />
      <package name="dto" optional="true" note="Application Command/Query/Result；只有边界确实不同才建立，不要求与 interfaces.dto 形成固定转换链" />
    </package>
    <package name="domain">
      <package name="model" note="默认按业务领域或聚合组织，而不是按 entity/vo/aggregate 横向分类" />
      <package name="repository" />
      <package name="service" optional="true" note="无法合理归属于实体、值对象或聚合的领域规则" />
    </package>
    <package name="infrastructure">
      <package name="repository" />
      <package name="persistence">
        <package name="po" />
        <package name="mapper" />
        <package name="dao" />
      </package>
      <package name="config" />
    </package>
    <package name="common" optional="true" />
  </structure>

  <structure level="完整">
    <rule>沿用标准结构，按实际复杂度增加能力，不要求所有可选目录都存在。</rule>
    <package name="domain">
      <package name="model" note="按限界上下文、业务领域或聚合组织" />
      <package name="repository" />
      <package name="service" optional="true" />
      <package name="event" optional="true" />
    </package>
    <package name="application">
      <package name="usecase" />
      <package name="assembler" optional="true" />
      <package name="query" optional="true" />
    </package>
    <package name="infrastructure">
      <package name="repository" />
      <package name="persistence" />
      <package name="message" optional="true" />
      <package name="external" optional="true" />
      <package name="security" optional="true" />
    </package>
  </structure>

  <domain-modeling>
    <organization>优先按业务领域、限界上下文或聚合组织 domain/model。</organization>
    <avoid>不要把 entity、vo、aggregate 横向目录作为完整 DDD 的必选结构。</avoid>
    <aggregate>聚合根负责维护不变式和对外业务行为，实体和值对象作为聚合内部模型。</aggregate>
    <service>Domain Service 只承载无法合理归属于实体、值对象或聚合，但仍属于领域模型的规则；跨聚合只是常见场景。</service>
    <application-service>Application Layer 的 Use Case 表达一次用户意图，负责用例编排、流程协调与事务边界；可以协调授权判断，但不负责 JWT 解析、Token 验证、PasswordEncoder、SecurityContext 等具体认证机制。</application-service>
  </domain-modeling>

  <event-convention>
    <domain-event>Domain Event 表达领域事实，属于 Domain，例如 DiaryCreatedEvent。</domain-event>
    <integration-event>Integration Event 或 Message 表达跨系统通信模型，通常由 Application 或 Infrastructure 转换、发布，例如 DiaryCreatedMessage。</integration-event>
    <rule>不要把领域事件与消息传输模型混为同一个类型；是否引入事件由实际需求决定。</rule>
  </event-convention>

  <layer-rules>
    <layer name="interfaces" duty="协议适配、输入格式校验、DTO 转换、响应封装" forbidden="业务规则、直接操作数据库" />
    <layer name="application" duty="Use Case 编排、事务边界、调用 Repository 抽象" forbidden="替代聚合维护核心不变式" />
    <layer name="domain" duty="实体、值对象、聚合、领域服务、仓储抽象、领域事件" forbidden="Spring、JPA/MyBatis、MySQL、Redis、JWT、HTTP、DTO" />
    <layer name="infrastructure" duty="持久化、Repository 实现、ORM、数据库、缓存、消息、外部系统、认证与安全基础设施适配" forbidden="把基础设施细节泄漏到 Domain；不替代业务授权规则" />
    <layer name="common" duty="可复用且无业务语义的公共能力" forbidden="DiaryUtils、UserUtils、具体领域服务或业务概念" optional="true" />
  </layer-rules>

  <dependency-rules>
    <rule>Domain 是最内层，不依赖其他业务层。</rule>
    <rule>Application 可以依赖 Domain，但 Domain 不依赖 Application。</rule>
    <rule>Interfaces 可以依赖 Application，不应绕过 Application 直接调用 Domain 完成用例。</rule>
    <rule>Infrastructure 可以依赖 Domain，并实现 Domain 定义的抽象。</rule>
    <rule>Infrastructure 的具体技术实现不应被 Domain、Application 或 Interfaces 直接依赖。</rule>
    <rule>输入格式校验属于 Interfaces；Use Case 执行条件由 Application 协调；领域状态和业务不变式由 Domain 判断。</rule>
  </dependency-rules>

  <security-convention>
    <authentication>认证机制属于 Infrastructure/Security：JWT 是否有效、Token 验证、PasswordEncoder、SecurityContext、UserDetailsService。</authentication>
    <authorization>技术性认证与访问控制属于 Security/Infrastructure；Use Case 级授权可由 Application 协调；与领域状态和业务不变式相关的授权规则属于 Domain。</authorization>
  </security-convention>

  <api-convention optional="true">
    <rule>ApiResponse、Problem Details 或其他响应格式属于接口协议，不是 DDD 通用要求。</rule>
    <rule>若启用统一响应，由 interfaces 层及其异常适配器负责。</rule>
  </api-convention>
</architecture>
