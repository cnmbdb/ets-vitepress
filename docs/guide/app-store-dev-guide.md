# 开发者指南

欢迎加入独角数卡开发者生态！本指南将帮助你快速开发并上架你的第一个应用。

## 技术栈建议

*   **后端**：Laravel (保持与独角数卡一致) + 微服务架构
*   **前端**：Vue.js + Element UI / Ant Design
*   **搜索**：Elasticsearch (用于应用商店搜索)
*   **存储**：对象存储 (OSS/COS) + CDN

## 数据模型

了解核心数据结构有助于你更好地设计应用。

```yaml
# 核心实体关系

Developer (开发者):
  - id, name, email, auth_status, balance

Application (应用):
  - id, developer_id, name, slug, category_id
  - price_type (free/paid/subscription)
  - status (draft/reviewing/published/suspended)

ApplicationVersion (应用版本):
  - id, app_id, version_number (e.g., 1.0.0)
  - package_url (CDN link)
  - changelog
  - min_core_version (兼容的最低核心版本)

Purchase (购买记录):
  - id, user_id, app_id, amount, status
  - license_key

Review (评价):
  - id, user_id, app_id, rating (1-5), comment
```

## 开发规范

### 1. 目录结构
你的应用包解压后应符合以下结构：
```text
plugin-name/
├── composer.json       # 依赖定义
├── plugin.json         # 插件元数据（名称、版本、入口类）
├── src/                # 源代码
│   ├── Controllers/
│   ├── Models/
│   └── Providers/
├── resources/          # 前端资源
│   ├── js/
│   └── views/
├── database/           # 数据库迁移
│   └── migrations/
└── routes/             # 路由定义
```

### 2. 特别提示
*   **从简单开始**：初期建议先开发简单的功能插件，熟悉流程后再尝试复杂应用。
*   **安全优先**：始终假设你的输入是不可信的，做好数据验证。
*   **文档完善**：为你的应用编写清晰的使用文档，这直接决定了用户的购买意愿。
*   **合规注意**：如果是付费应用，请注意税务合规和平台的分成规则。

## 上架流程

1.  **注册开发者**：在开发者中心提交资料并认证。
2.  **开发与测试**：在本地环境开发并充分测试。
3.  **打包上传**：将应用打包为 ZIP，在开发者后台上传并填写信息。
4.  **等待审核**：平台会自动扫描并人工复核，通常需要 1-3 个工作日。
5.  **发布上架**：审核通过后，你的应用将立即在商店可见。
